let InputComponent = (props) => {
    return (
        <div style={props.itemStyle}>
            <label>{props.label}</label>
            <input style={props.inputStyle} type={props.type}></input>
        </div>
    );
};

export default InputComponent;
