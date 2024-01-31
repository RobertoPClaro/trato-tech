import styles from './Home.module.scss'
import Header from 'components/Header'
import relogio from 'assets/inicial.png'

const Home = () => {
  return (
    <div>
      <Header
        titulo='Classificados Tech'
        descricao='Compre diversos tipos de produtos no melhor site do Brasil!'
        imagem={relogio}
        className={styles.header}
      />
    </div>
  )
}

export default Home