import { ChessBoard } from './chess-board';
import { Color, FENChar, MoveType } from './models';
import { Rook } from './pieces/rook';
import { Knight } from './pieces/knight';
import { Bishop } from './pieces/bishop';
import { Queen } from './pieces/queen';
import { King } from './pieces/king';
import { Pawn } from './pieces/pawn';

describe('ChessBoard', () => {
  let chessBoard: ChessBoard;

  beforeEach(() => {
    chessBoard = new ChessBoard();
  });

  it('should initialize the chess board correctly', () => {
    const boardView = chessBoard.chessBoardView;
    expect(boardView[0][0]).toBe(FENChar.WhiteRook);
    expect(boardView[0][1]).toBe(FENChar.WhiteKnight);
    expect(boardView[0][2]).toBe(FENChar.WhiteBishop);
    expect(boardView[0][3]).toBe(FENChar.WhiteQueen);
    expect(boardView[0][4]).toBe(FENChar.WhiteKing);
    expect(boardView[0][5]).toBe(FENChar.WhiteBishop);
    expect(boardView[0][6]).toBe(FENChar.WhiteKnight);
    expect(boardView[0][7]).toBe(FENChar.WhiteRook);
    expect(boardView[1].every(piece => piece === FENChar.WhitePawn)).toBe(true);
    expect(boardView[6].every(piece => piece === FENChar.BlackPawn)).toBe(true);
    expect(boardView[7][0]).toBe(FENChar.BlackRook);
    expect(boardView[7][1]).toBe(FENChar.BlackKnight);
    expect(boardView[7][2]).toBe(FENChar.BlackBishop);
    expect(boardView[7][3]).toBe(FENChar.BlackQueen);
    expect(boardView[7][4]).toBe(FENChar.BlackKing);
    expect(boardView[7][5]).toBe(FENChar.BlackBishop);
    expect(boardView[7][6]).toBe(FENChar.BlackKnight);
    expect(boardView[7][7]).toBe(FENChar.BlackRook);
  });

  it('should correctly identify check', () => {
    chessBoard.move(1, 4, 3, 4, null); // White pawn move
    chessBoard.move(6, 5, 5, 5, null); // Black pawn move
    chessBoard.move(0, 3, 4, 7, null); // White Queen move
    expect(chessBoard.checkState.isInCheck).toBe(true);
  });

  it('should correctly identify checkmate', () => {
    chessBoard.move(1, 5, 2, 5, null); // White pawn move
    chessBoard.move(6, 4, 4, 4, null); // Black pawn move
    chessBoard.move(0, 6, 2, 5, null); // White Knight move
    chessBoard.move(7, 3, 3, 7, null); // Black Queen move
    chessBoard.move(0, 5, 4, 1, null); // White Bishop move
    chessBoard.move(7, 5, 4, 2, null); // Black Bishop move
    chessBoard.move(0, 3, 4, 7, null); // White Queen move
    expect(chessBoard.isGameOver).toBe(true);
    expect(chessBoard.gameOverMessage).toBe('White won by checkmate');
  });

  it('should correctly identify stalemate', () => {
    chessBoard.move(1, 4, 3, 4, null); // White pawn move
    chessBoard.move(6, 5, 5, 5, null); // Black pawn move
    chessBoard.move(0, 3, 4, 7, null); // White Queen move
    chessBoard.move(7, 6, 5, 5, null); // Black Knight move
    chessBoard.move(0, 5, 4, 1, null); // White Bishop move
    chessBoard.move(7, 5, 4, 2, null); // Black Bishop move
    chessBoard.move(0, 6, 2, 5, null); // White Knight move
    chessBoard.move(7, 3, 3, 7, null); // Black Queen move
    chessBoard.move(0, 1, 2, 2, null); // White Knight move
    chessBoard.move(7, 1, 5, 2, null); // Black Knight move
    chessBoard.move(0, 2, 2, 3, null); // White Bishop move
    chessBoard.move(7, 2, 5, 3, null); // Black Bishop move
    chessBoard.move(0, 4, 4, 4, null); // White King move
    chessBoard.move(7, 4, 5, 4, null); // Black King move
    expect(chessBoard.isGameOver).toBe(true);
    expect(chessBoard.gameOverMessage).toBe('Stalemate');
  });

  it('should correctly handle castling', () => {
    chessBoard.move(1, 4, 3, 4, null); // White pawn move
    chessBoard.move(6, 4, 4, 4, null); // Black pawn move
    chessBoard.move(0, 6, 2, 5, null); // White Knight move
    chessBoard.move(7, 6, 5, 5, null); // Black Knight move
    chessBoard.move(0, 5, 4, 1, null); // White Bishop move
    chessBoard.move(7, 5, 4, 2, null); // Black Bishop move
    chessBoard.move(0, 4, 0, 6, null); // White King side castling
    expect(chessBoard.chessBoardView[0][6]).toBe(FENChar.WhiteKing);
    expect(chessBoard.chessBoardView[0][5]).toBe(FENChar.WhiteRook);
  });

  it('should correctly handle en passant', () => {
    chessBoard.move(1, 4, 3, 4, null); // White pawn move
    chessBoard.move(6, 3, 4, 3, null); // Black pawn move
    chessBoard.move(3, 4, 4, 3, null); // White pawn en passant
    expect(chessBoard.chessBoardView[4][3]).toBe(FENChar.WhitePawn);
    expect(chessBoard.chessBoardView[3][3]).toBe(null);
  });

  it('should correctly handle pawn promotion', () => {
    chessBoard.move(1, 4, 3, 4, null); // White pawn move
    chessBoard.move(6, 4, 4, 4, null); // Black pawn move
    chessBoard.move(3, 4, 4, 4, null); // White pawn capture
    chessBoard.move(6, 5, 5, 5, null); // Black pawn move
    chessBoard.move(4, 4, 5, 5, null); // White pawn capture
    chessBoard.move(6, 6, 5, 6, null); // Black pawn move
    chessBoard.move(5, 5, 6, 6, null); // White pawn capture
    chessBoard.move(6, 7, 5, 7, null); // Black pawn move
    chessBoard.move(6, 6, 7, 7, FENChar.WhiteQueen); // White pawn promotion
    expect(chessBoard.chessBoardView[7][7]).toBe(FENChar.WhiteQueen);
  });
});
