import { FENChar, Coords, Color } from "../models";
import { Piece } from "./piece";

/**
 * Represents a Knight chess piece.
 * Extends the abstract Piece class.
 */
export class Knight extends Piece {
    protected override _FENChar: FENChar;
    protected override _directions: Coords[] = [
        { x: 1, y: 2 },
        { x: 1, y: -2 },
        { x: -1, y: 2 },
        { x: -1, y: -2 },
        { x: 2, y: 1 },
        { x: 2, y: -1 },
        { x: -2, y: 1 },
        { x: -2, y: -1 }
    ];

    /**
     * Creates an instance of a Knight.
     * @param pieceColor - The color of the Knight (White or Black).
     */
    constructor(private pieceColor: Color) {
        super(pieceColor);
        this._FENChar = pieceColor === Color.White ? FENChar.WhiteKnight : FENChar.BlackKnight;
    }
}