import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const carrinhoSlice = createSlice({ // Criação do slice
    name: 'carrinho', // Nome do slice
    initialState, // Estado inicial do slice
    reducers: {
        mudarCarrinho: (state, { payload }) => {
            const temItem = state.some(item => item.id === payload);
            if (!temItem) {
                return [
                    ...state,
                    {
                        id: payload,
                        quantidade: 1,
                    }
                ]
            }
            return state.filter(item =>  item.id !== payload)
        }
    }
});

export const { mudarCarrinho } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;