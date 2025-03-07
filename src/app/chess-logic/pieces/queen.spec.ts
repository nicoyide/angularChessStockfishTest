import { Queen } from './queen';
import { Color } from '../models';

describe('Queen', () => {
  let whiteQueen: Queen;
  let blackQueen: Queen;

  beforeEach(() => {
    whiteQueen = new Queen(Color.White);
    blackQueen = new Queen(Color.Black);
  });

  it('should create a white queen', () => {
    expect(whiteQueen).toBeTruthy();
    expect(whiteQueen.color).toBe(Color.White);
    expect(whiteQueen.FENChar).toBe('Q');
  });

  it('should create a black queen', () => {
    expect(blackQueen).toBeTruthy();
    expect(blackQueen.color).toBe(Color.Black);
    expect(blackQueen.FENChar).toBe('q');
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
    expect(whiteQueen.directions).toEqual(expectedDirections);
    expect(blackQueen.directions).toEqual(expectedDirections);
  });
});
