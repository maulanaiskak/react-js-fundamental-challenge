import logo from './image/logo192.png'
let Header = (props) => {
    return (
        <div style={props.style}>
            <img src={logo} className="App-logo" style={props.imgStyle}></img>
        </div>
    );
};

export default Header