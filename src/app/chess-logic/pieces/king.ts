import { FENChar, Coords, Color } from "../models";
import { Piece } from "./piece";

/**
 * Represents a King chess piece.
 * Extends the abstract Piece class.
 */
export class King extends Piece {
    private _hasMoved: boolean = false;
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
     * Creates an instance of a King.
     * @param pieceColor - The color of the King (White or Black).
     */
    constructor(private pieceColor: Color) {
        super(pieceColor);
        this._FENChar = pieceColor === Color.White ? FENChar.WhiteKing : FENChar.BlackKing;
    }

    /**
     * Gets whether the King has moved.
     */
    public get hasMoved(): boolean {
        return this._hasMoved;
    }

    /**
     * Sets whether the King has moved.
     */
    public set hasMoved(_) {
        this._hasMoved = true;
    }
}