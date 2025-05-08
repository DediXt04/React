import styles from './Title.module.css'; // "module", não "modulo"

const Title = () => {
    return (
        <div>
            <h1 className={styles.my_title}>meu titulo</h1>
        </div>
    );
};

export default Title;
