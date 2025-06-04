import LoginCard from "../scr/components/loginCard/loginCard"
import style from "../styles/Login.module.css"
import Input from "../scr/components/input/input"
import Button from "../scr/components/button/button"
import Link from 'next/Link'

export default function CadastroPage() {
    return(
        <div className={style.background}>
            <LoginCard title="Crie sua conta">
                <form className={style.form}>
                    <Input type="text" placeholder="Seu nome"/>
                    <Input type="email" placeholder="Seu e-mail"/>
                    <Input type="password" placeholder="Sua senha"/>
                    <Button>Cadastrar</Button>
                    <Link href="/login">Possui conta?</Link>
                </form>
            </LoginCard>
        </div>
    )
}