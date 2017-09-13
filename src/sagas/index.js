import { select, race, take, all, fork, call, put, takeLatest } from 'redux-saga/effects';
import { ADD, ADD2 } from '../constants/counter';
import { delay } from 'redux-saga';


/******************************************* TAKE */
function *takeExec() {
  try {
    console.log('take click');
    yield take(ADD); // redux action
    console.log('take exec apos adicionar um numero no counter');
  } catch (error) {
    console.log('asdasd');
  }
}

/******************************************* TAKELATEST */
// só executa o que etiver depois do yield na ultima chamada,
// chamadas com acoes em sequencia serão canceladas até não receber mais acoes e finallmente finalizar
// a promisse de call

var oi; //  global undefined

function getName() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('João');
    }, 3000);
  });
}

function *takeLatestExec() {
  try {
    console.log('takelatest click: ', oi);
    oi = yield call(getName); // só continua se call retornar um valor obtido por uma promisse
    console.log('takelatest oi: ', oi); // deve ser joão no console
    yield put({ type: ADD });
    yield fork(selectExec); // exibe o store de counter atual no redux
;  } catch (error) {
    console.log('takelatest error', error);
  }
}

/******************************************* FORK */
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

/******************************************* RACE */
function race1(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('hello');
    }, time);
  });
}

function race2(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('bye');
    }, time);
  });
}

function *raceExec() {
  try {
    console.log('race: foi iniciado');
    yield take(ADD);
    console.log('race: foi chamado para disputar qual retorna o resultado primeiro');
    const {t1, t2} = yield race({
      t1: race1(3000),
      t2: race2(5000)
    });
    console.log('race: resultado ', t1, t2);
  } catch(error) {
    console.log('error race', error);
  }
}

/* SELECT */

function *selectExec() {
  try {
    const counter = yield select(state => state.counter);
    console.log('select: store do counter é ', counter)
  } catch(error) {
    console.log(error);
  }
}

/******************************************* SAGAS CONFIG */
function *rootSaga() {
  yield [
    fork(forkExec), // autoexec
    takeLatest(ADD2, takeLatestExec),
    takeLatest(ADD2, takeExec),
    fork(raceExec),
    fork(selectExec)
  ];
}

export default rootSaga;

/*
  Redux Saga expõe vários métodos chamados de Effects, e vamos usar vários deles:
  fork(), realiza uma operação não bloqueante com a função passada
  take(), pausa as operações até receber uma redux action
  race(), executa Effects simultaneamente, e cancela todos quando um efeito retorna seu resultado
  call(), executa uma função. Se essa função retornar uma Promise, ele irá pausar a Saga até a Promise ser resolvida
  put(), despacha uma redux action
  select(), executa uma função seletora que irá buscar dados do estado global do Redux
  takeLatest(), irá executar as operações recebidas, porém, irá retornar apenas o valor da última. Se a mesma operação for enviada mais de uma vez, elas serão ignoradas, exceto a última (ex: click -> loadUser, usuário clica 4 vezes no botão (ele é legal né, quer testar sua app), apenas a função enviada no último click será executada/retornado o valor, as outras serão ignoradas)
  takeEvery(), irá retornar os valores de todas as operações recebidas
*/