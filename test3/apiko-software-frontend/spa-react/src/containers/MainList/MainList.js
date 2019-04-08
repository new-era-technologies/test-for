import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './MainList.css';

class MainList extends Component {

    state = {
        dataList: [],
        srchList: []
    };

    srchMovies = () => {
        const {
            state: {
                dataList
            }
        } = this;
        const value = this.inp.value.toLowerCase();
        const newListMovies = dataList.map(
            item =>
            item.filter(
            item => item.title.toLowerCase().includes(value)
        ));
        this.setState({
            srchList: newListMovies
        })
    };

    componentDidMount() {
        axios.all([
            axios.get('https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=292e09aa422a3a96332f22d068cf1bdb'),
            axios.get('https://api.themoviedb.org/3/movie/popular?page=2&language=en-US&api_key=292e09aa422a3a96332f22d068cf1bdb'),
            axios.get('https://api.themoviedb.org/3/movie/popular?page=3&language=en-US&api_key=292e09aa422a3a96332f22d068cf1bdb'),
            axios.get('https://api.themoviedb.org/3/movie/popular?page=4&language=en-US&api_key=292e09aa422a3a96332f22d068cf1bdb'),
            axios.get('https://api.themoviedb.org/3/movie/popular?page=5&language=en-US&api_key=292e09aa422a3a96332f22d068cf1bdb')
        ])
            .then(axios.spread((res1, res2, res3, res4, res5) => {
                this.setState({
                    dataList: [
                        res1.data.results, res2.data.results, res3.data.results, res4.data.results, res5.data.results
                    ]
                });
            }))
    }

    render() {
        const {state: {dataList, srchList}} = this;
        const filteredList = srchList.length ? srchList : dataList;
        return (
            <div>
                <div>
                    <form>
                        <input
                            type="search"
                            placeholder="Movie name"
                            ref = {inp => this.inp = inp}
                            onChange = {this.srchMovies}
                        />
                        <input
                            type="submit"
                            value="Search"
                            onClick={e => e.preventDefault()}
                        />
                    </form>
                </div>
                <ul className="MainList__listMovies">
                    {filteredList.map(
                        item =>
                            item.map(
                                (item, i) =>
                                    <li key={i}>
                                        <Link to={`/movies/${item.id}`}>
                                            {item.original_title}
                                        </Link>
                                    </li>
                            )
                    )}
                </ul>
            </div>
        )
    }
}

export default MainList;