import { FENChar, Coords, Color } from "../models";
import { Piece } from "./piece";

/**
 * Represents a Pawn chess piece.
 * Extends the abstract Piece class.
 */
export class Pawn extends Piece {
    private _hasMoved: boolean = false;
    protected override _FENChar: FENChar;
    protected override _directions: Coords[] = [
        { x: 1, y: 0 },
        { x: 2, y: 0 },
        { x: 1, y: 1 },
        { x: 1, y: -1 }
    ];

    /**
     * Creates an instance of a Pawn.
     * @param pieceColor - The color of the Pawn (White or Black).
     */
    constructor(private pieceColor: Color) {
        super(pieceColor);
        if (pieceColor === Color.Black) this.setBlackPawnDirections();
        this._FENChar = pieceColor === Color.White ? FENChar.WhitePawn : FENChar.BlackPawn;
    }

    /**
     * Sets the movement directions for a black pawn.
     */
    private setBlackPawnDirections(): void {
        this._directions = this._directions.map(({ x, y }) => ({ x: -1 * x, y }));
    }

    /**
     * Gets whether the Pawn has moved.
     */
    public get hasMoved(): boolean {
        return this._hasMoved;
    }

    /**
     * Sets whether the Pawn has moved.
     */
    public set hasMoved(_) {
        this._hasMoved = true;
        this._directions = [
            { x: 1, y: 0 },
            { x: 1, y: 1 },
            { x: 1, y: -1 }
        ];
        if (this.pieceColor === Color.Black) this.setBlackPawnDirections();
    }
}
