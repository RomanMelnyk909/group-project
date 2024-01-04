import styles from './ModalR.module.css';
import {createPortal} from "react-dom";

const portalRoot = document.getElementById('modal');
const ModalR = (props) => {
    const { children, showModal, openModalFunc } = props;


    const portalContent = (
        <div className={styles['common']} onClick={() => {openModalFunc(false)}}>
            <div className={styles['content']} onClick={(e) => { e.stopPropagation() }}>
                { children }
            </div>
        </div>
    );
    return showModal ? createPortal(portalContent, portalRoot) : null;

}

export default ModalR;
