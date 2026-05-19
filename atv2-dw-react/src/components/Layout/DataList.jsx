import { useState } from "react"
import { Button } from "../ui/Button"
import styles from "@/styles/DataList.module.css"

export const DataList = () => {
    const [data, setData] = useState([])
    const [number, setNumber] = useState(0)

    // Buscar todos os posts
    const getAllPosts = async () => {
        try {
            const response = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json()
            setData(response)
        } catch (error) {
            return alert(error)
        }
    }

    // Buscar apenas um post
    const getOnePosts = async () => {
        if (number < 1 || number > 100) return alert("Post não encontrado")

        try {
            const response = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${number}`)).json()
            setData([response])
        } catch (error) {
            return alert(error)
        }
    }

    return (
        <div className="">
            <div className={styles.buttonGroup}>
                <input onChange={ e => setNumber(e.target.value) } type="number" placeholder="Digite um índex"/>
                <Button onClick={getOnePosts} text="Buscar post" />
                <Button onClick={getAllPosts} text="Exibir lista completa" style={{backgroundColor: "#4f95d7", color: "white"}} />
            </div>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th style={{width: "50px"}}>Id</th>
                        <th>Título</th>
                        <th>Texto</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr key={item.id}>
                                <td style={{width: "50px"}}>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}