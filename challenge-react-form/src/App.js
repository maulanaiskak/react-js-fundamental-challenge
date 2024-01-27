import './App.css';
import background from './image/image.jpg';
import Title from './component/Title.js';
import Form from './component/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
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

function App() {
    return (
        <div style={flexContainer}>
            <Title />
            <Form />
        </div>
    );
}

export default App;

