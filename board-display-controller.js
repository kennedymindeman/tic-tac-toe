class BoardDisplayController {
  constructor(parentElementName) {
    this.parentElement = document.querySelector(parentElementName)
    this.board = new Board()
    this.buttonGrid = this.generateButtonGrid()
  }

  generateButtonGrid = function() {
    ret = Array.from(Array(this.board.height), () => Array(this.board.width))
    for (let row = 0; row < this.board.height; row++) {
      for (let col = 0; col < this.board.width; col++) {
        this.buttonGrid[row][col] = docuement.createElement('button')
      }
    }
  }

  generateButtonSection = function(row) {
    let section = docuement.createElement('button')
    for (let col = 0; col < this.board.width; col++) {
      section
    }
  }

  generateButtons = function() {
    buttons = []
    for (let index = 0; index < this.board.area; index++) {
      ret.push(document.createElement('button'))
    }
  }
}