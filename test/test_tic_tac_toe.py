def test_initial_state() -> None:
    board = (
        (None, None, None),
        (None, None, None),
        (None, None, None),
    )
    assert board_factory() == board
