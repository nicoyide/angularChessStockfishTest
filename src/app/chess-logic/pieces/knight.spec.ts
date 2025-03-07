import { Knight } from './knight';
import { Color } from '../models';

describe('Knight', () => {
  let whiteKnight: Knight;
  let blackKnight: Knight;

  beforeEach(() => {
    whiteKnight = new Knight(Color.White);
    blackKnight = new Knight(Color.Black);
  });

  it('should create a white knight', () => {
    expect(whiteKnight).toBeTruthy();
    expect(whiteKnight.color).toBe(Color.White);
    expect(whiteKnight.FENChar).toBe('N');
  });

  it('should create a black knight', () => {
    expect(blackKnight).toBeTruthy();
    expect(blackKnight.color).toBe(Color.Black);
    expect(blackKnight.FENChar).toBe('n');
  });

  it('should have correct movement directions', () => {
    const expectedDirections = [
      { x: 1, y: 2 },
      { x: 1, y: -2 },
      { x: -1, y: 2 },
      { x: -1, y: -2 },
      { x: 2, y: 1 },
      { x: 2, y: -1 },
      { x: -2, y: 1 },
      { x: -2, y: -1 }
    ];
    expect(whiteKnight.directions).toEqual(expectedDirections);
    expect(blackKnight.directions).toEqual(expectedDirections);
  });
});
