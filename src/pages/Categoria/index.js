import Header from 'components/Header';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function Categoria() {
  const { nomeCategoria } = useParams(); // Pegando o parâmetro da URL
  const categoria = useSelector(state => state.categorias.find(categoria => categoria.id === nomeCategoria)); // Pegando a categoria do estado
  return (
    <div>
      <Header
        titulo={categoria.nome}
        descricao={categoria.descricao}
        imagem={categoria.header}
      />
    </div>
  )
}