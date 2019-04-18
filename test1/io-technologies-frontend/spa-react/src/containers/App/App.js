import React, {Component} from 'react';
import Item from '../../components/Item/Item';
import dataList from '../../utils/configs/data';
import mag from '../../assets/img/search.png';
import left from '../../assets/img/arrows/left.svg';
import right from '../../assets/img/arrows/right.svg';
import './App.scss';


class App extends Component {

    state = {
        dataList: dataList,
        srchList: [],
        activeStep: 'all',
        currentPage: 1,
        dataPerPage: 10,
        firstPlace: {},
        secondPlace: {},
        thirdPlace: {}
    };

    srchItems = () => {
        const {
            state: {
                dataList
            }
        } = this;
        const value = this.inp.value.toLowerCase();
        const newList = dataList.filter(
            item => item.name
                .toLowerCase()
                .includes(value)
        );
        this.setState({
            srchList: newList,
            activeStep: 'search'
        })
    };

    sortByName = () => {
        const newList = [...this.state.dataList];
        newList.sort((a, b) => a.name > b.name ? 1 : -1);
        this.setState({
            dataList: newList,
            activeStep: 'all'
        })
    };

    sortByPublic = () => {
        const newList = [...this.state.dataList];
        newList.sort((a, b) => b.count_pub - a.count_pub);

        this.setState({
            dataList: newList,
            activeStep: 'all',
            firstPlace: newList[0],
            secondPlace: newList[1],
            thirdPlace: newList[2]
        })
    };

    sortByViews = () => {
        const newList = [...this.state.dataList];
        newList.sort((a, b) => b.pageviews - a.pageviews);
        this.setState({
            dataList: newList,
            activeStep: 'all',
            firstPlace: newList[0],
            secondPlace: newList[1],
            thirdPlace: newList[2]
        })
    };

    incrementPage = () => {
        if (this.state.currentPage < this.state.dataList.length / this.state.dataPerPage) {
            this.setState({
                currentPage: this.state.currentPage + 1,
                activeStep: 'all'
            })
        }
    };

    decrementPage = () => {
        if (this.state.currentPage > 1) {
            this.setState({
                currentPage: this.state.currentPage - 1,
                activeStep: 'all'
            })
        }
    };

    render() {
        const {
            state:
                {
                    dataList,
                    activeStep,
                    srchList,
                    currentPage,
                    dataPerPage,
                    firstPlace,
                    secondPlace,
                    thirdPlace
                }
        } = this;
        const indexOfLastData = currentPage * dataPerPage;
        const indexOfFirstData = indexOfLastData - dataPerPage;
        const currentData = dataList.slice(indexOfFirstData, indexOfLastData);

        const filteredList = activeStep === 'search' ? srchList : currentData;

        return (
            <div className="App">
                <div className='App__box'>
                    <div className='App__box__inner'>
                        <ul className='App__box__inner__list'>
                            <li className='App__box__inner__list__item App__box__inner__list__item--first'>
                                <img
                                    className='App__box__inner__list__item__img'
                                    src={mag}
                                    alt="mag"
                                />
                                <input
                                    className='App__box__inner__list__item__inp'
                                    type="search"
                                    ref={inp => this.inp = inp}
                                    onChange={this.srchItems}
                                    placeholder='Поиск авторов по имени'
                                />
                            </li>
                            <li className='App__box__inner__list__item App__box__inner__list__item--second'>
                                <p className='App__box__inner__list__item__text'>Сортировка по: </p>
                                <button className='App__box__inner__list__item__button' onClick={this.sortByName}>
                                    Имя
                                </button>
                                <button className='App__box__inner__list__item__button'
                                        onClick={this.sortByPublic}>
                                    Публикации
                                </button>
                                <button className='App__box__inner__list__item__button'
                                        onClick={this.sortByViews}>
                                    Просмотры
                                </button>
                            </li>
                            {filteredList
                                .map((item, ind, gold, silver, bronze) => (
                                    <li
                                        className='App__box__inner__list__item'
                                        key={ind}
                                    >
                                        <Item
                                            item={item}
                                            index={
                                                currentPage >= 2 ? ind + (currentPage * 10 - 10) : ind
                                            }
                                            gold={item === firstPlace ? gold : null}
                                            silver={item === secondPlace ? silver : null}
                                            bronze={item === thirdPlace ? bronze : null}
                                        />
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <div className='App__box__pagination'>
                        {currentPage !== 1 ?
                            <div
                                className="App__box__pagination__item App__box__pagination__item--left"
                                onClick={this.decrementPage}
                            >
                                <img
                                    className='App__box__pagination__item__img'
                                    src={left}
                                    alt="arrow-left"
                                />
                            </div>
                            : null}
                        <div className="App__box__pagination__item">
                            {indexOfFirstData + 1} - {indexOfLastData}
                        </div>
                        {currentPage <= dataList.length / dataPerPage ?
                            <div
                                className="App__box__pagination__item App__box__pagination__item--right"
                                onClick={this.incrementPage}
                            >
                                <img
                                    className='App__box__pagination__item__img'
                                    src={right}
                                    alt="arrow-right"
                                />
                            </div>
                            : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;