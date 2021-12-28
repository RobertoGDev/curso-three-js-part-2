import { Scene, Color, DirectionalLight, HemisphereLight, Group, Object3D } from 'three';
import { Cube } from '../objects/Cube';

class Scene1 extends Scene {
	constructor() {
		super();
		this.background = new Color('skyblue').convertSRGBToLinear();
		this.create();
	}

	create() {
		this.brick = new Cube(2, new Color('orangered').convertSRGBToLinear());
		this.brick.position.set(0,0,0)
		
		this.floor = new Cube(7, new Color('rgb(255,255,255)').convertSRGBToLinear());
		this.floor.position.set(0, -4.5, 0);

		this.add(this.brick, this.floor);

		const ambientLight = new HemisphereLight(0xffffbb, 0x080820, .5);
		const light = new DirectionalLight(0xffffff, 1.0);
		this.add(light, ambientLight);
	}

	update() {
	}
}

export default Scene1;
