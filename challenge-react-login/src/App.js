import './App.css';
import background from './image/image.jpg';
import TitleTextComponent from './component/TitleTextComponent.js';
import InputComponent from './component/InputComponent.js';
import ButtonComponent from './component/ButtonComponent.js';

function App() {
    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    const appTitle = {
        flex: '50%',
        marginLeft: '8vw',
        marginRight: '8vw',
        marginBottom: '4vh',
        color: 'white',
    };

    const title = {
        fontSize: '9vmin',
    };

    const subtitle = {
        fontSize: '4vmin',
    };

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
        backgroundOpacity: '1',
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

    const button = {
        height: '5vmin',
        fontSize: '2vmin',
    };
    const input = {
        height: '4vmin',
        width: '35vmin',
    };
    return (
        <div style={flexContainer}>
            <div style={appTitle}>
                <TitleTextComponent style={title} text="SMM Batch 2" />
                <TitleTextComponent
                    style={subtitle}
                    text="Front End Hands On"
                />
            </div>

            <div style={login}>
                <div style={loginForm}>
                    <InputComponent
                        itemStyle={loginFormItem}
                        inputStyle={input}
                        label="User Name"
                        type="text"
                    />
                    <InputComponent
                        itemStyle={loginFormItem}
                        inputStyle={input}
                        label="Password"
                        type="password"
                    />
                    <ButtonComponent style={button} text="Login" />
                </div>
            </div>
        </div>
    );
}

export default App;

