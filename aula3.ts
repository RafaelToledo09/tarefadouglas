import { Cliente } from "./model/Cliente.js";
import { Endereco } from "./model/Endereco.js";

const endereco = new Endereco("Rua A", "123");
const cliente = new Cliente(1, "Douglas", 15, endereco);

const clientes: Cliente[] = [];

clientes.push(cliente);
clientes.push(new Cliente(2, "Alex", 25, endereco));


console.log(clientes[1]?.apresentar());
