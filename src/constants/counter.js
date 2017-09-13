const name = 'COUNTER:';
const setConst = new Set();
setConst.add(`${name}ADD`);
setConst.add(`${name}DEL`);
setConst.add(`${name}ADD2`);
export const [ADD, DEL, ADD2] = setConst;
