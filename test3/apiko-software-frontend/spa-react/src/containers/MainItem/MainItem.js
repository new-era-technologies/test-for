import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Item from '../../components/Item/Item';

class MainItem extends Component {

    state = {
        dataItem: {},
        dataList: []
    };

    componentDidMount() {
        const url = window.location.href.split('/');
        const id = url[4];
        axios.all([
            axios.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=292e09aa422a3a96332f22d068cf1bdb'),
            axios.get('https://api.themoviedb.org/3/movie/' + id + '/similar?api_key=292e09aa422a3a96332f22d068cf1bdb&language=en-US&page=1'),
        ])
            .then(axios.spread((res1, res2) => {
                this.setState({
                    dataItem: res1.data,
                    dataList: res2.data.results
                });
            }))
    }

    shouldComponentUpdate(nextProps, nextState) {
        const url = window.location.href.split('/');
        const id = url[4];
        axios
            .get('https://api.themoviedb.org/3/movie/' + id + '?api_key=292e09aa422a3a96332f22d068cf1bdb')
            .then(res => {
                this.setState({
                    dataItem: res.data
                })
            });
        const propsChange = this.props.dataItem !== nextProps.dataItem;
        const stateChange = this.state.dataItem !== nextState.dataItem;
        return propsChange || stateChange;
    }

    render() {
        const {state: {dataItem, dataList}} = this;
        return(
            <div>
                <div>
                    <Item data={dataItem} />
                </div>
                <div>
                    <h3>Recommendations</h3>
                    <ul>
                        {dataList.map(
                            (item, i) =>
                                <li key={i}>
                                    <Link to={`/movies/${item.id}`}>
                                        {item.original_title}
                                    </Link>
                                </li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default MainItem;