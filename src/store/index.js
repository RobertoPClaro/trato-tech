import { configureStore } from '@reduxjs/toolkit';
import categoriasSlice from './reducers/categorias';
import itensSlice from './reducers/itens';

const store = configureStore({ // Configuração do Redux
  reducer: { // Reducers
    categorias: categoriasSlice, // é o reducer de categorias
    itens: itensSlice, // é o reducer de itens
  }
});

export default store;