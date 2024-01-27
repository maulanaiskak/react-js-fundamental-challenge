let Card = (props) => {
    return (
        <div style={props.style}>
            <h1>Angka didapat:</h1>
            <p>{props.value}</p>
        </div>
    );
};

export default Card;
