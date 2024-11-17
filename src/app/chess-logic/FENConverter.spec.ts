import { FENConverter } from './FENConverter';
import { Color, FENChar, LastMove } from './models';
import { Bishop } from './pieces/bishop';
import { King } from './pieces/king';
import { Knight } from './pieces/knight';
import { Pawn } from './pieces/pawn';
import { Queen } from './pieces/queen';
import { Rook } from './pieces/rook';

describe('FENConverter', () => {
  let converter: FENConverter;

  beforeEach(() => {
    converter = new FENConverter();
  });

  it('should convert initial board position to FEN string', () => {
    const board = [
      [new Rook(Color.White), new Knight(Color.White), new Bishop(Color.White), new Queen(Color.White), new King(Color.White), new Bishop(Color.White), new Knight(Color.White), new Rook(Color.White)],
      [new Pawn(Color.White), new Pawn(Color.White), new Pawn(Color.White), new Pawn(Color.White), new Pawn(Color.White), new Pawn(Color.White), new Pawn(Color.White), new Pawn(Color.White)],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [new Pawn(Color.Black), new Pawn(Color.Black), new Pawn(Color.Black), new Pawn(Color.Black), new Pawn(Color.Black), new Pawn(Color.Black), new Pawn(Color.Black), new Pawn(Color.Black)],
      [new Rook(Color.Black), new Knight(Color.Black), new Bishop(Color.Black), new Queen(Color.Black), new King(Color.Black), new Bishop(Color.Black), new Knight(Color.Black), new Rook(Color.Black)]
    ];

    const FEN = converter.convertBoardToFEN(board, Color.White, undefined, 0, 1);
    expect(FEN).toBe('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
  });

  it('should convert board position after a few moves to FEN string', () => {
    const board = [
      [new Rook(Color.White), new Knight(Color.White), new Bishop(Color.White), new Queen(Color.White), new King(Color.White), new Bishop(Color.White), new Knight(Color.White), new Rook(Color.White)],
      [new Pawn(Color.White), new Pawn(Color.White), new Pawn(Color.White), new Pawn(Color.White), null, new Pawn(Color.White), new Pawn(Color.White), new Pawn(Color.White)],
      [null, null, null, null, new Pawn(Color.White), null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, new Pawn(Color.Black), null, null, null],
      [null, null, null, null, null, null, null, null],
      [new Pawn(Color.Black), new Pawn(Color.Black), new Pawn(Color.Black), new Pawn(Color.Black), null, new Pawn(Color.Black), new Pawn(Color.Black), new Pawn(Color.Black)],
      [new Rook(Color.Black), new Knight(Color.Black), new Bishop(Color.Black), new Queen(Color.Black), new King(Color.Black), new Bishop(Color.Black), new Knight(Color.Black), new Rook(Color.Black)]
    ];

    const lastMove: LastMove = {
      piece: new Pawn(Color.White),
      prevX: 1,
      prevY: 4,
      currX: 3,
      currY: 4,
      moveType: new Set()
    };

    const FEN = converter.convertBoardToFEN(board, Color.Black, lastMove, 0, 2);
    expect(FEN).toBe('rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 2');
  });

  it('should handle castling rights correctly', () => {
    const board = [
      [new Rook(Color.White), new Knight(Color.White), new Bishop(Color.White), new Queen(Color.White), new King(Color.White), new Bishop(Color.White), new Knight(Color.White), new Rook(Color.White)],
      [new Pawn(Color.White), new Pawn(Color.White), new Pawn(Color.White), new Pawn(Color.White), null, new Pawn(Color.White), new Pawn(Color.White), new Pawn(Color.White)],
      [null, null, null, null, new Pawn(Color.White), null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, new Pawn(Color.Black), null, null, null],
      [null, null, null, null, null, null, null, null],
      [new Pawn(Color.Black), new Pawn(Color.Black), new Pawn(Color.Black), new Pawn(Color.Black), null, new Pawn(Color.Black), new Pawn(Color.Black), new Pawn(Color.Black)],
      [new Rook(Color.Black), new Knight(Color.Black), new Bishop(Color.Black), new Queen(Color.Black), new King(Color.Black), new Bishop(Color.Black), new Knight(Color.Black), new Rook(Color.Black)]
    ];

    const lastMove: LastMove = {
      piece: new Pawn(Color.White),
      prevX: 1,
      prevY: 4,
      currX: 3,
      currY: 4,
      moveType: new Set()
    };

    const FEN = converter.convertBoardToFEN(board, Color.Black, lastMove, 0, 2);
    expect(FEN).toBe('rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 2');
  });

  it('should handle en passant correctly', () => {
    const board = [
      [new Rook(Color.White), new Knight(Color.White), new Bishop(Color.White), new Queen(Color.White), new King(Color.White), new Bishop(Color.White), new Knight(Color.White), new Rook(Color.White)],
      [new Pawn(Color.White), new Pawn(Color.White), new Pawn(Color.White), new Pawn(Color.White), null, new Pawn(Color.White), new Pawn(Color.White), new Pawn(Color.White)],
      [null, null, null, null, new Pawn(Color.White), null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, new Pawn(Color.Black), null, null, null],
      [null, null, null, null, null, null, null, null],
      [new Pawn(Color.Black), new Pawn(Color.Black), new Pawn(Color.Black), new Pawn(Color.Black), null, new Pawn(Color.Black), new Pawn(Color.Black), new Pawn(Color.Black)],
      [new Rook(Color.Black), new Knight(Color.Black), new Bishop(Color.Black), new Queen(Color.Black), new King(Color.Black), new Bishop(Color.Black), new Knight(Color.Black), new Rook(Color.Black)]
    ];

    const lastMove: LastMove = {
      piece: new Pawn(Color.White),
      prevX: 1,
      prevY: 4,
      currX: 3,
      currY: 4,
      moveType: new Set()
    };

    const FEN = converter.convertBoardToFEN(board, Color.Black, lastMove, 0, 2);
    expect(FEN).toBe('rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 2');
  });

  it('should handle promotion correctly', () => {
    const board = [
      [new Rook(Color.White), new Knight(Color.White), new Bishop(Color.White), new Queen(Color.White), new King(Color.White), new Bishop(Color.White), new Knight(Color.White), new Rook(Color.White)],
      [new Pawn(Color.White), new Pawn(Color.White), new Pawn(Color.White), new Pawn(Color.White), null, new Pawn(Color.White), new Pawn(Color.White), new Pawn(Color.White)],
      [null, null, null, null, new Pawn(Color.White), null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, new Pawn(Color.Black), null, null, null],
      [null, null, null, null, null, null, null, null],
      [new Pawn(Color.Black), new Pawn(Color.Black), new Pawn(Color.Black), new Pawn(Color.Black), null, new Pawn(Color.Black), new Pawn(Color.Black), new Pawn(Color.Black)],
      [new Rook(Color.Black), new Knight(Color.Black), new Bishop(Color.Black), new Queen(Color.Black), new King(Color.Black), new Bishop(Color.Black), new Knight(Color.Black), new Rook(Color.Black)]
    ];

    const lastMove: LastMove = {
      piece: new Pawn(Color.White),
      prevX: 1,
      prevY: 4,
      currX: 3,
      currY: 4,
      moveType: new Set()
    };

    const FEN = converter.convertBoardToFEN(board, Color.Black, lastMove, 0, 2);
    expect(FEN).toBe('rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 2');
  });
});
