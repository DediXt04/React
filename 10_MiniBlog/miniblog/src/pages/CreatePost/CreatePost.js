import React from 'react'

import styles from "./CreatePost.module.css"

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useAuthValue} from '../../context/AuthContext'

const CreatePost = () => {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")

  const handleSumit = (e) => {
    e.preventDefault()
  }


  return (
    <div className={styles.create}>
        <h2>Criar post</h2>
        <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
        <form onSubmit={handleSumit}>
          <label>
            <span>Título:</span>
            <input type="text" 
            name='title' 
            required 
            placeholder='Título'
            onChange={(e) => setTitle(e.target.value)}
            value={title}/>
          </label>
          <label>
            <span>URL da imagem:</span>
            <input type="text" 
            name='image' 
            required 
            placeholder='Insira o link da imagem do post'
            onChange={(e) => setImage(e.target.value)}
            value={title}/>
          </label>
          <label>
            <span>Conteúdo:</span>
            <textarea name="body" 
            required 
            placeholder='Insira o conteúdo do post' 
            onChange={(e) => setBody(e.target.value)}
            value={image}
            >
            </textarea>
          </label>
          <label>
            <span>Tags:</span>
            <input type="text" 
            name='tags' 
            required 
            placeholder='Insira as tags separadas por vírgula (Exemplo: tag1, tag2, tag3)'
            onChange={(e) => setTags(e.target.value)}
            value={tags}/>
          </label>
          {!loading && <button className='btn'>Cadastrar</button> } 
        </form>
    </div>
  )
}

export default CreatePost