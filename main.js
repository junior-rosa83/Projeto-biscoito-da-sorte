let frases = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "O fracasso é apenas um degrau na escada do sucesso. Continue subindo.",
  "As estrelas não podem brilhar sem escuridão. Encontre sua luz interior e ilumine o mundo.",
  "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
  "Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.",
  "São os nossos amigos que nos ensinam as mais valiosas lições."
]

const biscoito1 = document.querySelector("#treme")
const button1 = document.querySelector("#btnReset")
const pageOne = document.querySelector(".pageOne")
const pageTwo = document.querySelector(".pageTwo")
let ramdomNumber = Math.round(Math.random() * 5)

function screen1 () {
  pageOne.classList.add("hide")  
  pageTwo.classList.remove("hide")
  document.querySelector(".frase p").innerText = frases[ramdomNumber]
}

function screen2 () {
  location.reload()
}

biscoito1.addEventListener("click", screen1)
button1.addEventListener("click", screen2)

