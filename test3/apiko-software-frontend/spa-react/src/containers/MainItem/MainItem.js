import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Item from '../../components/Item/Item';
import Spinner from '../../components/Spinner/Spinner';

class MainItem extends Component {
    _isMounted = false;

    state = {
        dataItem: {},
        dataList: [],
        loading: true
    };

    componentDidMount() {
        this._isMounted = true;
        const url = window.location.href.split('/');
        const id = url[4];
        axios.all([
            axios.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=292e09aa422a3a96332f22d068cf1bdb'),
            axios.get('https://api.themoviedb.org/3/movie/' + id + '/similar?api_key=292e09aa422a3a96332f22d068cf1bdb&language=en-US&page=1'),
        ])
            .then(axios.spread((res1, res2) => {
                if (this._isMounted) {
                    this.setState({
                        dataItem: res1.data,
                        dataList: res2.data.results,
                        loading: false
                    });
                }
            }))
    }

    shouldComponentUpdate(nextProps, nextState) {
        this._isMounted = true;
        const url = window.location.href.split('/');
        const id = url[4];
        axios
            .get('https://api.themoviedb.org/3/movie/' + id + '?api_key=292e09aa422a3a96332f22d068cf1bdb')
            .then(res => {
                if (this._isMounted) {
                    this.setState({
                        dataItem: res.data
                    })
                }
            });
        const propsChange = this.props.dataItem !== nextProps.dataItem;
        const stateChange = this.state.dataItem !== nextState.dataItem;
        return propsChange || stateChange;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const {state: {dataItem, dataList, loading}} = this;
        let contentRecomend = loading ? <Spinner/> : dataList.map(
                                                        (item, i) =>
                                                            <li key={i}>
                                                                <Link to={`/movies/${item.id}`}>
                                                                    {item.original_title}
                                                                </Link>
                                                            </li>
                                                        );
        let contentItem = loading ? <Spinner /> : <Item data={dataItem}/>;
        return (
            <div>
                <div>
                    {contentItem}
                </div>
                <div>
                    <h3>Recommendations</h3>
                    <ul>
                        {contentRecomend}
                    </ul>
                </div>
            </div>
        )
    }
}

export default MainItem;