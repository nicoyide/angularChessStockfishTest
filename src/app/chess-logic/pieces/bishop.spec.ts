import { Bishop } from './bishop';
import { Color } from '../models';

describe('Bishop', () => {
  let whiteBishop: Bishop;
  let blackBishop: Bishop;

  beforeEach(() => {
    whiteBishop = new Bishop(Color.White);
    blackBishop = new Bishop(Color.Black);
  });

  it('should create a white bishop', () => {
    expect(whiteBishop).toBeTruthy();
    expect(whiteBishop.color).toBe(Color.White);
    expect(whiteBishop.FENChar).toBe('B');
  });

  it('should create a black bishop', () => {
    expect(blackBishop).toBeTruthy();
    expect(blackBishop.color).toBe(Color.Black);
    expect(blackBishop.FENChar).toBe('b');
  });

  it('should have correct movement directions', () => {
    const expectedDirections = [
      { x: 1, y: 1 },
      { x: 1, y: -1 },
      { x: -1, y: 1 },
      { x: -1, y: -1 }
    ];
    expect(whiteBishop.directions).toEqual(expectedDirections);
    expect(blackBishop.directions).toEqual(expectedDirections);
  });
});
