import React, {Component} from 'react';
import './Item.css';

class Item extends Component {
    render() {
        const {
            props: {
                data
            }
        } = this;
        return(
            <div className="Item">
                <img src={'https://image.tmdb.org/t/p/w400' + data.poster_path} alt="poster"/>
                <h2 className="Item__title">{data.original_title}</h2>
                <p className="Item__overview">{data.overview}</p>
            </div>
        )
    }
}

export default Item;