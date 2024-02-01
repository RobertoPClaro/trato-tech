import { createSlice } from '@reduxjs/toolkit';

const initialState = "";

const buscaSlice = createSlice({ // Criação do slice
    name: 'busca', // Nome do slice
    initialState, // Estado inicial do slice
    reducers: {
        mudarBusca: (state, { payload }) => payload,
        resetarBusca: () => initialState,
    }
    
});

export const { mudarBusca, resetarBusca } = buscaSlice.actions;

export default buscaSlice.reducer;