import styles from './styles.module.css'

export function Cycles() {
    return (
        <div className={styles.cycles}>
            <span>Clicos:</span>

                <div className={styles.cyclesDots}>
                    <span className={`${styles.cyclesDot} ${styles.workTime}`}></span>
                    <span className={`${styles.cyclesDot} ${styles.shortBreackTime}`}></span>
                    <span className={`${styles.cyclesDot} ${styles.workTime}`}></span>
                    <span className={`${styles.cyclesDot} ${styles.shortBreackTime}`}></span>
                    <span className={`${styles.cyclesDot} ${styles.workTime}`}></span>
                    <span className={`${styles.cyclesDot} ${styles.shortBreackTime}`}></span>
                    <span className={`${styles.cyclesDot} ${styles.workTime}`}></span>
                    <span className={`${styles.cyclesDot} ${styles.longBreackTime}`}></span>
                </div>
        </div>
    )
}