import * as types from "../types";

const initialState = {
  botaoClicado: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log("Sucesso =D");
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }
    case types.BOTAO_CLICADO_REQUEST: {
      console.log("Estou fazendo a requisição!");
      return state;
    }
    case types.BOTAO_CLICADO_FAILURE: {
      console.log("Deus ERRO =( !");
      return state;
    }

    default: {
      console.log("Sem Action");
      return state;
    }
  }
}
