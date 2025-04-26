let contador = 0

let numeroClicks = function() {
  let numClicks = document.getElementById("num_clicks")
  contador++
  numClicks.innerText = "Clicks: " + contador

  if(contador == 10) {
    numClicks.style.color = "red"
  }
}

let main = function() {
  let butConta = document.getElementById("but_conta")
  butConta.addEventListener("click", numeroClicks)
}

main()