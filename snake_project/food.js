class Food {
    constructor() {
        this.location = createVector(9, 9)
    }

    show() {
        noStroke();
        fill(255, 0, 0);
        rect(this.location.x, this.location.y, 1, 1)
    }

    newLocation() {
        let x = floor(random(w));
        let y = floor(random(h));
        this.location.x = x;
        this.location.y = y;
    }
}