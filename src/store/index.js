import { configureStore } from '@reduxjs/toolkit';
import categoriasSlice from './reducers/categorias';
import itensSlice from './reducers/itens';
import carrinhoSlice from './reducers/carrinho';

const store = configureStore({ // Configuração do Redux
  reducer: { // Reducers
    categorias: categoriasSlice, // é o reducer de categorias
    itens: itensSlice, // é o reducer de itens
    carrinho: carrinhoSlice, // é o reducer de carrinho
  }
});

export default store;