import Header from 'components/Header'
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Categoria = () => {

    const { nomeCategoria } = useParams();

    const categorias = useSelector(state => state.categorias.find(categoria => categoria.id === nomeCategoria)) // pega o estado do reducer categorias

  return (
    <div>
        <Header
            titulo={categorias.nome}
            descricao={categorias.descricao}
            imagem={categorias.header}
        />
    </div>
  )
}

export default Categoria