import { take, all, fork, call, put, takeLatest } from 'redux-saga/effects';
import { ADD, ADD2 } from '../constants/counter';
import { delay } from 'redux-saga';

var oi;

function getName() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('João');
    }, 3000);
  });
}
//dasnhjvbhjbjhasdg
function *takeExec() {
  try {
    console.log('take click');
    yield take(ADD);
    console.log('take exec apos adicionar um numero no counter');
  } catch (error) {
    console.log('asdasd');
  }
}

function *takeLatestExec() {
  // só executa o que etiver depois do yield na ultima chamada,
  // chamadas com acoes em sequencia serão canceladas até não receber mais acoes e finallmente finalizar
  // a promisse de call
  try {
    console.log('takelatest click: ', oi);
    oi = yield call(getName); // só continua se call retornar um valor obtido por uma promisse
    console.log('takelatest oi: ', oi);
    yield put({ type: ADD });
  } catch (error) {
    console.log('takelatest error', error);
  }
}

function *forkExec() {
  // Função não bloqueante
  try {
    console.log('fork: executado quando carregado');
    yield delay(5000);
    console.log('fork: depois de 5 segundos');
  } catch (error) {
    console.log('error fork', error);
  }
}

function *rootSaga() {
  yield [
    fork(forkExec), // autoexec
    takeLatest(ADD2, takeLatestExec),
    takeLatest(ADD2, takeExec)
  ];
}

export default rootSaga;