import { exception } from "node:console";

class Bot {
    state: number;
    position: number;

    constructor() {
        this.state = 0;
        this.position
    }

    Init() {

    }

    GetStartPosition(tiles) {
        const result = tiles.findIndex((tile) => tile.id === "START");
        if(result) {
            return result;
        } else {
            throw 'Error: Bot was not able to find start index.'
        }
    }
}