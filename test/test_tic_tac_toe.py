from src.tic_tac_toe import board_factory, make_move


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
    board = make_move(board, "x", (0, 0))
    assert board == (
        ("x", None, None),
        (None, None, None),
        (None, None, None),
    )
