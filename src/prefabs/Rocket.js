//Prefab for the rocket player projectile thing
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        //this will add the new object to the scene
        scene.add.existing(this);
    }
}