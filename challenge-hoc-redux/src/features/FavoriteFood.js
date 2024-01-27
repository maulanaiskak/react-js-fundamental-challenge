import { Component } from 'react';
import WithStorage from '../shared/WithStorage';

class FavoriteFood extends Component {
    state = {
        userName: '',
        favoriteFood: '',
    };

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = () => {
        this.props.save('userName', this.state.userName);
        this.props.save('favoriteFood', this.state.favoriteFood);
        this.setState({
            userName: '',
            favoriteFood: '',
        });
    };

    handleClear = () => {
        this.props.clear();
    };

    render() {
        return (
            <>
                <input
                    name="userName"
                    value={this.state.userName}
                    placeholder="user name"
                    onChange={this.handleOnChange}
                ></input>
                <input
                    name="favoriteFood"
                    value={this.state.favoriteFood}
                    placeholder="favorite food"
                    onChange={this.handleOnChange}
                ></input>
                <button onClick={this.handleSubmit}>Submit</button>
                <button onClick={this.handleClear}>Clear</button>
            </>
        );
    }
}

export default WithStorage(FavoriteFood);
