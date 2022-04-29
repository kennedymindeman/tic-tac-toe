class Board {
  constructor(height, width) {
    this.symbols = ['X', 'O']
    this.height = height
    this.width = width
    this.area = this.width * this.height
    this.size = Math.min(this.height, this.width)
    this.reset()
  }

  reset = function() {
    this.grid = []
    for (let row = 0; row < this.height; row++) {
      this.grid.push([])
      for (let col = 0; col < this.width; col++) {
        this.grid[row].push(null)
      }
    }
  }

  makeMove = function(piece, row, col) {
    this.grid[row][col] = piece
  }

  checkWin = function(char) {
    let target = char.repeat(this.size)
    let downDiagnal = []
    let upDiagnal = []
    for (let row = 0; row < this.height; row++) {
      if (this.grid[row].join('') === target) {
        return true
      }
    }
    for (let col = 0; col < this.width; col++) {
      let colContents = []
      for (let row = 0; row < this.height; row++) {
        colContents.push(this.grid[row][col])
      }
      if (colContents.join('') === target) {
        return true
      }
    }
    for (let offset = 0; offset < this.size; offset++) {
      downDiagnal.push(this.grid[offset][offset])
      upDiagnal.push(this.grid[offset][this.width - offset - 1])
    }
    return upDiagnal.join('') === target || downDiagnal.join('') === target
  }
}