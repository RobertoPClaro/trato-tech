import styles from './NavBar.module.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import classNames from 'classnames'
import {
    RiShoppingCart2Line,
    RiShoppingCartFill
  } from 'react-icons/ri';

const iconeProps = {
    color: 'white',
    size: 24
}

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <Logo className={styles.Logo} />
            <div className={styles.links}>
                <div>
                    <a href="/" className={classNames(styles.link, {
                        [styles.selected]: window.location.pathname === '/' // Se a condição for verdadeira, ele adiciona a classe selected
                    })}>
                        Página Inicial
                    </a>
                </div>
            </div>
            <div className={styles.busca}>

            </div>
            <div className={styles.icones}>
                <a href="/carrinho">
                    {window.location.pathname === '/carrinho'
                       ? <RiShoppingCartFill {...iconeProps} /> // se a condição for verdadeira, ele mostra o carrinho cheio
                       : <RiShoppingCart2Line {...iconeProps} /> //se a condição for falsa, ele mostra o carrinho vazio
                    }
                </a>
            </div>
        </nav>
    )
}

export default NavBar