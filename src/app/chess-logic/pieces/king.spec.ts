import { King } from './king';
import { Color } from '../models';

describe('King', () => {
  let whiteKing: King;
  let blackKing: King;

  beforeEach(() => {
    whiteKing = new King(Color.White);
    blackKing = new King(Color.Black);
  });

  it('should create a white king', () => {
    expect(whiteKing).toBeTruthy();
    expect(whiteKing.color).toBe(Color.White);
    expect(whiteKing.FENChar).toBe('K');
  });

  it('should create a black king', () => {
    expect(blackKing).toBeTruthy();
    expect(blackKing.color).toBe(Color.Black);
    expect(blackKing.FENChar).toBe('k');
  });

  it('should have correct movement directions', () => {
    const expectedDirections = [
      { x: 0, y: 1 },
      { x: 0, y: -1 },
      { x: 1, y: 0 },
      { x: 1, y: -1 },
      { x: 1, y: 1 },
      { x: -1, y: 0 },
      { x: -1, y: 1 },
      { x: -1, y: -1 }
    ];
    expect(whiteKing.directions).toEqual(expectedDirections);
    expect(blackKing.directions).toEqual(expectedDirections);
  });

  it('should set hasMoved to true', () => {
    expect(whiteKing.hasMoved).toBe(false);
    whiteKing.hasMoved = true;
    expect(whiteKing.hasMoved).toBe(true);
  });
});
