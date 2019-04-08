import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class Header extends Component {

    submit = (e) => {
        e.preventDefault();
        this.props.history.push('/movies')
    };

    render() {
        return (
            <div className="Header">
                <form onSubmit={this.submit}>
                    <input
                        className="Header_srch"
                        type="search"
                        placeholder="Movie name"
                    />
                    <input
                        className="Header_submit"
                        type="submit"
                        value="Search"
                    />
                </form>
            </div>
        )
    }
}

export default withRouter(Header);