import { Pawn } from './pawn';
import { Color, Coords } from '../models';

describe('Pawn', () => {
  let whitePawn: Pawn;
  let blackPawn: Pawn;

  beforeEach(() => {
    whitePawn = new Pawn(Color.White);
    blackPawn = new Pawn(Color.Black);
  });

  it('should create a white pawn', () => {
    expect(whitePawn).toBeTruthy();
    expect(whitePawn.color).toBe(Color.White);
    expect(whitePawn.FENChar).toBe('P');
  });

  it('should create a black pawn', () => {
    expect(blackPawn).toBeTruthy();
    expect(blackPawn.color).toBe(Color.Black);
    expect(blackPawn.FENChar).toBe('p');
  });

  it('should have correct initial movement directions for white pawn', () => {
    const expectedDirections: Coords[] = [
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 1, y: 1 },
      { x: 1, y: -1 }
    ];
    expect(whitePawn.directions).toEqual(expectedDirections);
  });

  it('should have correct initial movement directions for black pawn', () => {
    const expectedDirections: Coords[] = [
      { x: -1, y: 0 },
      { x: -2, y: 0 },
      { x: -1, y: 1 },
      { x: -1, y: -1 }
    ];
    expect(blackPawn.directions).toEqual(expectedDirections);
  });

  it('should update movement directions after moving', () => {
    whitePawn.hasMoved = true;
    const expectedWhiteDirections: Coords[] = [
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 1, y: -1 }
    ];
    expect(whitePawn.directions).toEqual(expectedWhiteDirections);

    blackPawn.hasMoved = true;
    const expectedBlackDirections: Coords[] = [
      { x: -1, y: 0 },
      { x: -1, y: 1 },
      { x: -1, y: -1 }
    ];
    expect(blackPawn.directions).toEqual(expectedBlackDirections);
  });
});
