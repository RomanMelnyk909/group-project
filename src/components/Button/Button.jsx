import styles from './button.module.css';

const Button = (props) => {
    const { type, title, onClickFunction } = props;

    let buttonClass;
    if(type === 'submit'){
        buttonClass = styles.submitButton;
    } else if(type === 'reset'){
        buttonClass = styles.resetButton;
    } else {
        buttonClass = styles.button;
    }
    
    return (
        <button 
            type={type}
            className={buttonClass}
            onClick={() => onClickFunction  || null }
        >
            { title }
        </button>
    )

}

export default Button;