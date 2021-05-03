import { v4 as uuidv4 } from 'uuid';

export class TileClass {
    constructor(options) {
        this.id = uuidv4();
        this.score = 0;
        /** this.type
         *  0 = Empty,
         *  1 = Wall,
         *  2 = Start,
         *  3 = End,
         *  4 = Path
         */
        this.type = "CLEAR";
        /** this.claimed
         *  0 = AI hasn't claimed
         *  1 = AI has claimed
         */
        this.visited = 0;
    }
}