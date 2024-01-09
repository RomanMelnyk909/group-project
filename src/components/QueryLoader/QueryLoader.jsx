import styles from './queryLoader.module.css'

const QueryLoader = (props) => {
    const { children, error, fetching } = props;
    return (
        <>
            <div className={styles['common-loa']}>
                <div>{fetching && 'Data is loading ...'}</div>
                <div>{error && `Opps, we have error: ${error}`}</div>
            </div>
            {(!error && !fetching) && children}
        </>
    )
}

export default QueryLoader;