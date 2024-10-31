import { Rook } from './rook';
import { Color } from '../models';

describe('Rook', () => {
  let whiteRook: Rook;
  let blackRook: Rook;

  beforeEach(() => {
    whiteRook = new Rook(Color.White);
    blackRook = new Rook(Color.Black);
  });

  it('should create a white rook', () => {
    expect(whiteRook).toBeTruthy();
    expect(whiteRook.color).toBe(Color.White);
    expect(whiteRook.FENChar).toBe('R');
  });

  it('should create a black rook', () => {
    expect(blackRook).toBeTruthy();
    expect(blackRook.color).toBe(Color.Black);
    expect(blackRook.FENChar).toBe('r');
  });

  it('should have correct movement directions', () => {
    const expectedDirections = [
      { x: 1, y: 0 },
      { x: -1, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: -1 }
    ];
    expect(whiteRook.directions).toEqual(expectedDirections);
    expect(blackRook.directions).toEqual(expectedDirections);
  });

  it('should set hasMoved to true when moved', () => {
    expect(whiteRook.hasMoved).toBe(false);
    whiteRook.hasMoved = true;
    expect(whiteRook.hasMoved).toBe(true);
  });
});
