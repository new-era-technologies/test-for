import React, {Component} from 'react';
import spinner from '../../assets/img/spinner.gif';
import './Spinner.css';

class Spinner extends Component {
    render() {
        return(
            <div>
                <div className="Spinner">
                    <img src={spinner} alt="spinner"/>
                </div>
            </div>
        )
    }
}

export default Spinner;