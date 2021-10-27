import { NegociacaoController } from "./controllers/negociacao-controllers.js";
const controller = new NegociacaoController;
const from = document.querySelector('from');
from.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
