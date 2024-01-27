import { Component } from 'react';

const login = {
    flex: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '8vw',
    marginRight: '8vw',
};

const loginForm = {
    display: 'flex',
    flexDirection: 'column',
    padding: '5vmin',
    backgroundColor: 'rgba(68, 68, 68, 0.6)',
    borderRadius: '8%',
    gap: '2vh',
};
const loginFormItem = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1vh',
    color: 'white',
    fontSize: '2vmin',
};

const input = {
    height: '4vmin',
    width: '35vmin',
};
const button = {
    height: '5vmin',
    fontSize: '2vmin',
};
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    // 1 func 1 input
    handlerChangeUsername = (event) => {
        this.setState({
            username: event.target.value,
        });
        console.log(event.target.value);
    };

    handlerChangePassword = (event) => {
        this.setState({
            password: event.target.value,
        });
        console.log(event.target.value);
    };

    handlerSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.brand);
        const username = this.state.username;
        const password = this.state.password;

        if (!username.includes('@') || !username.includes('.')) {
            alert('Username harus mengandung @ dan .');
            return;
        }

        if (password.length < 6) {
            alert('Password minimal 6 karakter');
            return;
        }

        if (username === 'enigmacamp@enigma.com') {
            if (password === '123qwerty') {
                alert('Login sukses');
            } else {
                alert('Password salah');
            }
        } else {
            alert('Username tidak ada');
        }
    };

    render() {
        return (
            <div style={login}>
                <form style={loginForm} onSubmit={this.handlerSubmit}>
                    <div style={loginFormItem}>
                        <label>Username</label>
                        <input
                            style={input}
                            type="text"
                            onChange={this.handlerChangeUsername}
                            value={this.state.username}
                        ></input>
                    </div>
                    <div style={loginFormItem}>
                        <label>Password</label>
                        <input
                            style={input}
                            type="password"
                            onChange={this.handlerChangePassword}
                            value={this.state.password}
                        ></input>
                    </div>
                    <button style={button} type="submit" value="submit">
                        Login
                    </button>
                    ;
                </form>
            </div>
        );
    }
}

export default Form;
