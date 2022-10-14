import "./Button.scss"

function Button({kind, text, cb}){
    return (
        <button onClick={cb} className={`btn btn__${kind}`}>{text}</button>
    )
}

export default Button;