import LoginCard from "../scr/components/loginCard/loginCard"
import styles from "../styles/Login.module.css"

export default function LoginPage() {
    return(
        <div className={styles.background}>
            <LoginCard />
        </div>
    )
}