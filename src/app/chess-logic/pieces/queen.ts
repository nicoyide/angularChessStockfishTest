import { FENChar, Coords, Color } from "../models";
import { Piece } from "./piece";

/**
 * Represents a Queen chess piece.
 * Extends the abstract Piece class.
 */
export class Queen extends Piece {
    protected override _FENChar: FENChar;
    protected override _directions: Coords[] = [
        { x: 0, y: 1 },
        { x: 0, y: -1 },
        { x: 1, y: 0 },
        { x: 1, y: -1 },
        { x: 1, y: 1 },
        { x: -1, y: 0 },
        { x: -1, y: 1 },
        { x: -1, y: -1 }
    ];

    /**
     * Creates an instance of a Queen.
     * @param pieceColor - The color of the Queen (White or Black).
     */
    constructor(private pieceColor: Color) {
        super(pieceColor);
        this._FENChar = pieceColor === Color.White ? FENChar.WhiteQueen : FENChar.BlackQueen;
    }
}