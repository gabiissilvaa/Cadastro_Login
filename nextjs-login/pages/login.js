import LoginCard from "../scr/components/loginCard/loginCard"
import styles from "../styles/Login.module.css"
import Input from "../scr/components/input/input"
import Button from "../scr/components/button/button"
import Link from 'next/Link'

export default function LoginPage() {
    return(
        <div className={styles.background}>
            <LoginCard title="Entre em sua conta">
                <form className={styles.form}>
                    <Input type="email" placeholder="Seu e-mail"/>
                    <Input type="password" placeholder="Sua senha"/>
                    <Button>Entrar</Button>
                    <Link href="/cadastro">Não possui conta?</Link>
                </form>
            </LoginCard>
        </div>
    )
}