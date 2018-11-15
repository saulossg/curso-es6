"use strict";

var _console;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// class List {
//   constructor() {
//     this.data = [];
//   }
//   addTodo() {
//     this.data.push('Novo todo');
//     console.log(this.data);
//   }
// }
// class TodoList extends List {
//   constructor(){
//     super();
//     this.usuario = 'Diego';
//   }
//   mostrarUsuario() {
//     console.log(this.usuario);
//   }
// }
// const MinhaLista = new TodoList();
// document.getElementById('novotodo').onclick = function() {
//   MinhaLista.addTodo();
// }
// MinhaLista.mostrarUsuario();
// const arr = [1,2,3,4,5,6];
// const newArr = arr.map(function(item, index) {
//   return item + index;
// })
// console.log(newArr);
// const sum = arr.reduce(function(total, next) {
//   return total + next;
// });
// console.log(sum);
// const filter = arr.filter(function(item) {
//   return item % 2 === 0;
// })
// console.log(filter);
// const find = arr.find(function(item) {
//   return item === 4;
// })
// console.log(find);
// const newArr2 = arr.map(item => item * 3);
// console.log(newArr2);
// const teste = () => [5, 6, 7, 8];
// const teste2 = () => ({ nome: 'José'  });
// const teste3 = () => 'teste';
// console.log(teste);
// console.log(teste2);
// console.log(teste3);
// const somaArrow = (a = 1, b = 2) => a + b;
// console.log(somaArrow(4));
// console.log(somaArrow());
// const usuario = {
//   nome: 'Saulo',
//   idade: 33,
//   endereco: {
//     rua : 100,
//     cidade: 'Jundiaí'  
//   },
// };
// function mostrarNome({ nome, idade }) {
//   console.log(nome, idade);
// }
// mostrarNome(usuario);
// const { nome, idade, endereco: { cidade } } = usuario;
// console.log(nome);
// console.log(idade);
// console.log(cidade); 
// //REST
// const usuario2 = {
//   nome2: 'João',
//   idade2: 23,
//   empresa2: 'Tac Tac'
// };
// const { nome2, ...resto } = usuario2;
// console.log(nome2);
// console.log(resto);
// //SPREAD
// const arr1 = [1, 2, 3];
// const arr2 = [3, 4, 5];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);
// const usuario3 = {
//   nome: 'Maria',
//   idade: 24,
//   empresa: 'Rock'
// };
// const usuario4 = { ...usuario3, nome: 'Felipe' };
// console.log(usuario4);
// console.log(usuario4.nome);
//Exercícios 01
// class Usuario {
//   constructor(email, senha) {
//     this.email = email;
//     this.senha = senha;
//     this.admin = false;
//   }
//   isAdmin() {
//     return this.admin;
//   }
// }
// class Admin extends Usuario {
//   constructor(email, senha) {
//     super(email, senha)
//     this.admin = true;
//   }
// }
// const user1 = new Usuario('email@teste.com.br', 'senha123');
// const admin1 = new Admin('email@teste.com.br', 'senha123');
// console.log(user1.isAdmin());
// console.log(admin1.isAdmin());
// console.log(user1.email);
//Exercício 02
// const usuarios = [
//   { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
//   { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
//   { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
// ]
// const idadesUsuario = usuarios.map(item => item.idade);
// console.log(idadesUsuario);
// const usuariosRocketseat = usuarios.filter(function(item) {
//   return item.empresa === 'Rocketseat' && item.idade >= 18
// })
// console.log(usuariosRocketseat);
// const usuarioTrabalhaGoogle = usuarios.find(function(item) {
//   return item.empresa === 'Google';
// })
//console.log(usuarioTrabalhaGoogle);
// const multiplicaIdadeDoUsuarioPorDois = usuarios.map(item => item.idade * 2);
// console.log(multiplicaIdadeDoUsuarioPorDois);
// const usuariosMaximo50 = multiplicaIdadeDoUsuarioPorDois.filter(item => item < 50)
// console.log(usuariosMaximo50);
//Exercício 03
// const arr = [1, 2, 3, 4, 5];
// var newArr = arr.map(item => item + 10);
// const usuario = { nome: 'Saulo', idade: 23 };
// const mostrarIdade = (usuario) => usuario.idade;
// console.log(mostrarIdade(usuario));
// const nome = "Diego";
// const idade = 23;
// const mostraUsuario = (nome, idade) => { return nome + ' ' + idade };
// console.log(mostraUsuario(nome, idade));
// console.log(mostraUsuario(nome));
//Exercício 04
// const empresa = {
//   nome: 'Rocketseat',
//   endereco: {
//     cidade: 'Rio do Sul',
//     estado: 'SC',
//   }
// }
// const { nome, endereco: { cidade, estado }} = empresa;
// console.log(nome);
// console.log(cidade);
// console.log(estado);
// function mostraInfo(usuario) {
//   return `${usuario.nome} tem ${usuario.idade} noas.`;
// }
// mostraInfo({ nome })
var arr = [1, 2, 3, 5, 6];
var x = arr[0];

var resto = _extends({}, arr);

console.log(x);

(_console = console).log.apply(_console, _toConsumableArray(resto));
