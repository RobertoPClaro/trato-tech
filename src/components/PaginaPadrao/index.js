import NavBar from 'components/NavBar'
import styles from './PaginaPadrao.module.scss'
import { Outlet } from 'react-router-dom'
import Footer from 'components/Footer'

const PadinaPadrao = () => {
    return (
        <div className={styles.container}>
            <NavBar/>
            <div className={styles['container-outlet']}>
                <Outlet />
            </div>
            <Footer/>
        </div>
    )
}

export default PadinaPadrao