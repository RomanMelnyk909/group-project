import styles from './button.module.css';

import classNames from 'classnames';

const Button = (props) => {
    const { type, title, onClickFunction } = props;

    const buutonClassname = classNames(styles['button'], {
        [styles['submit']] : type === 'submit',
        [styles['reset']] : type === 'reset',
    });
    
    return (
        <button 
            type={type}
            className={buutonClassname}
            onClick={() => onClickFunction  || null }
        >
            { title }
        </button>
    );
}

export default Button;