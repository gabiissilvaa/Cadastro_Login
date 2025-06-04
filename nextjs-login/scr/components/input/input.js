import styles from '../input/input.module.css'

export default function Input(props) {
    return (
        <input className={styles.input} {...props}/>
    )
}