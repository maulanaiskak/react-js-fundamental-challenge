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

let Title = () => {
    return (
        <div style={appTitle}>
            <div style={title}>SMM Batch 2</div>
            <div style={subtitle}>Front End Hands On</div>
        </div>
    );
};

export default Title;
