import React, {Component} from 'react';
import goldMedal from '../../assets/img/medals/1st.svg';
import silverMedal from '../../assets/img/medals/2nd.svg';
import bronzeMedal from '../../assets/img/medals/3rd.svg';
import './Item.scss';


class Item extends Component {
    render() {
        const {
            props: {
                item: {
                    name,
                    count_pub,
                    pageviews
                },
                index,
                gold,
                silver,
                bronze
            }
        } = this;
        return (
            <div
                className='Item'
                style={{
                    backgroundColor:
                        index % 2 === 0 ?
                            '#ffffff' : '#f4f6f9'
                }}
            >
                <div className='Item__wrapper'>
                    <span className='Item__wrapper__number'>{index + 1}</span>
                    <div
                        className='Item__wrapper__title'
                        style={{
                            backgroundColor: 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')'
                        }}
                    >
                        {name
                            .charAt(0)
                        }
                    </div>
                    <div className='Item__wrapper__name-box'>
                        <p className='Item__wrapper__name-box__name'>{name}</p>
                        <span className='Item__wrapper__name-box__pub'>{count_pub} публ.</span>
                    </div>
                    {gold !== null ?
                        <div className='Item__wrapper__medal-box'>
                            <img
                                className='Item__wrapper__medal-box__img'
                                src={goldMedal}
                                alt="gold-medal"
                            />
                        </div>
                        : null}
                    {silver !== null ?
                        <div className='Item__wrapper__medal-box'>
                            <img
                                className='Item__wrapper__medal-box__img'
                                src={silverMedal}
                                alt="silver-medal"
                            />
                        </div>
                        : null}
                    {bronze !== null ?
                        <div className='Item__wrapper__medal-box'>
                            <img
                                className='Item__wrapper__medal-box__img'
                                src={bronzeMedal}
                                alt="bronze-medal"
                            />
                        </div>
                        : null}
                    <p className='Item__wrapper__pageview'>{pageviews}</p>
                </div>
            </div>
        )
    }
}

export default Item;