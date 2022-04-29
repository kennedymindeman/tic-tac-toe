board = new Board(3, 3)
const main = document.querySelector('main')
boardState = board.grid
let buttonGrid = []
for (let row = 0; row < boardState.length; row++) {
  let section = document.createElement('section')
  main.appendChild(section)
  buttonGrid.push([])
  for (let col = 0; col < boardState[row].length; col++) {
    let button = document.createElement('button')
    buttonGrid[row].push(button)
    section.appendChild(button)
  }
}

let symbolIndex = 0
let symbol = board.symbols[symbolIndex]
document.querySelector('h1').innerText = `${symbol}'s turn`
for (let row = 0; row < buttonGrid.length; row++) {
  for (let col = 0; col < buttonGrid.length; col++) {
    buttonGrid[row][col].addEventListener('click', () => {
      board.makeMove(symbol, row, col)
      buttonGrid[row][col].innerText = symbol
      buttonGrid[row][col].disabled = true
      if (board.checkWin(symbol)) {
        document.querySelector('h1').innerText = `${symbol} wins!`
        applyToAllButtons((button) => button.disabled = true)
      } else {
        symbolIndex = (symbolIndex + 1) % board.symbols.length
        symbol = board.symbols[symbolIndex]
        document.querySelector('h1').innerText = `${symbol}'s turn`
      }
    })
  }
}

document.querySelector('#reset').addEventListener('click', () => {
  symbolIndex = 0
  document.querySelector('h1').innerText = `${symbol}'s turn`
  board.reset()
  applyToAllButtons((button) => button.disabled = false)
  applyToAllButtons((button) => button.innerText = '')
})

function applyToAllButtons(func) {
  for (let row = 0; row < buttonGrid.length; row++) {
    for (let col = 0; col < buttonGrid[row].length; col++) {
      func(buttonGrid[row][col])
    }
  }
}