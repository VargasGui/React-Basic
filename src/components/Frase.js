import styles from './Frase.module.css'


function Frase () {
    return (
        <div className={styles.fraseContainer}>
            <h3 className={styles.fraseContent}>Esta é um frase componentizada!</h3>
        </div>
    )
}
export default Frase