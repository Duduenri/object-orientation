import {Cliente} from "./Cliente.js"
import {contaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Eduardo", 0500213003);
const cliente2 = new Cliente("Alice", 88822233309);


const contaCorrenteEduardo = new contaCorrente(1001, cliente);
contaCorrenteEduardo.depositar(500);

const conta2 = new ContaCorrente(1002, cliente2);

let valor = 200;
contaCorrenteEduardo.transferir(valor, conta2);

console.log("valor: ", valor);
console.log(conta2);


