import styles from "@/styles/Button.module.css"

export const Button = ({text = "Botão", onClick, style})=> {
    return (
        <button style={style} onClick={onClick} className={styles.button}>
            {text}
        </button>
    )
}