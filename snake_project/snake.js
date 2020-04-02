class Snake {
    constructor() {
        this.len = 1
        this.body = [];
        this.body[0] = createVector(2, 9);
        this.xdir = 0;
        this.ydir = 0;
    };

    update(){
        let head = this.body[this.body.length-1].copy();
        this.body.shift();
        head.x += this.xdir
        head.y += this.ydir
        this.body.push(head)
    };

    grow(){
        let head = this.body[this.body.length-1].copy();
        this.len++
        this.body.push(head)
    }

    eat(pos) {
        let x = this.body[this.body.length-1].x
        let y = this.body[this.body.length-1].y

        if (x == pos.x && y == pos.y){
            // this.grow()
            return true
        }
        return false
    }

    show() {
        for(let i = 0; i < this.body.length; i++) {
            fill(0);
            noStroke();
            rect(this.body[i].x, this.body[i].y, 1, 1);
        }
    };

    endGame() {
        let x = this.body[this.body.length-1].x;
        let y = this.body[this.body.length-1].y;
        for (let i = 0; i < this.body.length - 1; i++){
            let part = this.body[i]
            if (part.x == x && part.y == y) {
                console.log('game over')
                return true
            }
        }
        if (x < 0 || x > w - 1 || y > h-1 || y < 0 ) {
            console.log('game over, out of bounds')
            return true
        }
        return false
    }

    setDir(x, y) {
        this.xdir = x;
        this.ydir = y;
    }
}

// Snake.prototype.update{

// };