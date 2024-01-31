import { configureStore } from '@reduxjs/toolkit'
import categoriasSlice from './reducers/categorias'
import itensSlice from './reducers/itens'

const store = configureStore({ // équivalent à createStore
    reducer: { // são os reducers
        categorias: categoriasSlice,// nome do reducer que será usado no componente
        itens: itensSlice// nome do reducer que será usado no componente
    },
})

export default store;