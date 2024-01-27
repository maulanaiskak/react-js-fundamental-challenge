import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Card from './component/Card';
import Label from './component/Label';

function App() {
    const container = {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
    };
    const header = {
        height: '10%',
        textAlign: 'center',
        background: '#012140',
        color: 'white',
    };
    const headerImg = {
        height: '100%',
    };
    const myCard = {
        width: '20%',
        height: '50%',
        boxShadow: '20px 20px 2px 1px lightgrey',
        border: 'solid lightgrey',
        borderRadius: '5px',
        marginLeft: '40%',
        marginTop: '5%',
        textAlign: 'center',
    };

    const myLabel = {
        width: '20%',
        height: '7%',
        border: 'solid blue',
        borderRadius: '5px',
        marginLeft: '40%',
        marginTop: '5%',
    };
    const number = 123;
    return (
        <div style={container}>
            <Header style={header} imgStyle={headerImg} />
            <Card style={myCard} value={number} />
            <Label style={myLabel} value={number} />
        </div>
    );
}

export default App;
