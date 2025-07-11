from src.tic_tac_toe import board_factory


def test_initial_state() -> None:
    board = (
        (None, None, None),
        (None, None, None),
        (None, None, None),
    )
    assert board_factory() == board


def test_make_move() -> None:
    board = (
        (None, None, None),
        (None, None, None),
        (None, None, None),
    )
    make_move(board, "x", (0, 0))
