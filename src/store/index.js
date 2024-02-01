import { configureStore } from '@reduxjs/toolkit';
import categoriasSlice from './reducers/categorias';
import itensSlice from './reducers/itens';
import carrinhoSlice from './reducers/carrinho';
import buscaSlice from './reducers/busca';

const store = configureStore({ // Configuração do Redux
  reducer: { // Reducers
    categorias: categoriasSlice, // é o reducer de categorias
    itens: itensSlice, // é o reducer de itens
    carrinho: carrinhoSlice, // é o reducer de carrinho
    busca: buscaSlice, // é o reducer de busca
  }
});

export default store;