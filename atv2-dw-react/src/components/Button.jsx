import { global } from "styled-jsx/css"

export const Button = ({text = "Botão"})=> {
    return (
        <button className="button">
            {text}
        </button>
    )
}