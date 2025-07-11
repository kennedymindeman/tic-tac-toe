def board_factory():
    return (
        (None, None, None),
        (None, None, None),
        (None, None, None),
    )


def make_move(board, piece, position):
    mutable_board = [list(row) for row in board]
    mutable_board[position[0]][position[1]] = piece
    return tuple(tuple(row) for row in mutable_board)
