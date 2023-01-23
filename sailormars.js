class SailorMars {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./SailorMars.png"), 0, 0, 43.8, 111, 9, 0.2);

        this.x = 0;
        this.y = 0;
        this.speed = 250;
    };
    update() {
        this.x += this.speed * this.game.clockTick;
        if (this.x > 900) this.x = 0;
    };
    draw(ctx) {

        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}
