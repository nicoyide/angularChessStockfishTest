import { FENChar, Coords, Color } from "../models";
import { Piece } from "./piece";

/**
 * Represents a Rook chess piece.
 * Extends the abstract Piece class.
 */
export class Rook extends Piece {
    private _hasMoved: boolean = false;
    protected override _FENChar: FENChar;
    protected override _directions: Coords[] = [
        { x: 1, y: 0 },
        { x: -1, y: 0 },
        { x: 0, y: 1 },
        { x: 0, y: -1 }
    ];

    /**
     * Creates an instance of a Rook.
     * @param pieceColor - The color of the Rook (White or Black).
     */
    constructor(private pieceColor: Color) {
        super(pieceColor);
        this._FENChar = pieceColor === Color.White ? FENChar.WhiteRook : FENChar.BlackRook;
    }

    /**
     * Gets whether the Rook has moved.
     */
    public get hasMoved(): boolean {
        return this._hasMoved;
    }

    /**
     * Sets whether the Rook has moved.
     */
    public set hasMoved(_) {
        this._hasMoved = true;
    }
}
