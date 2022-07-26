import { call, put, all, takeLatest } from "redux-saga/effects";
import * as action from "./actions";
import * as types from "../types";

const requisicao = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

function* exempleRequest() {
  try {
    yield call(requisicao);
    yield put(action.clicaBotaoSuccess());
  } catch (error) {
    yield put(action.clicaBotaoFailure);
  }
}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exempleRequest)]);
