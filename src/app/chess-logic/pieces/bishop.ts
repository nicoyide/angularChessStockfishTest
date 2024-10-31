import { FENChar, Coords, Color } from "../models";
import { Piece } from "./piece";

/**
 * Represents a Bishop chess piece.
 * Extends the abstract Piece class.
 */
export class Bishop extends Piece {
    protected override _FENChar: FENChar;
    protected override _directions: Coords[] = [
        { x: 1, y: 1 },
        { x: 1, y: -1 },
        { x: -1, y: 1 },
        { x: -1, y: -1 }
    ];

    /**
     * Creates an instance of a Bishop.
     * @param pieceColor - The color of the Bishop (White or Black).
     */
    constructor(private pieceColor: Color) {
        super(pieceColor);
        this._FENChar = pieceColor === Color.White ? FENChar.WhiteBishop : FENChar.BlackBishop;
    }
}
