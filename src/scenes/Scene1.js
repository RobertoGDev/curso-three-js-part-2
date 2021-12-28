import { Scene, Color, DirectionalLight, HemisphereLight, Group, Object3D, CameraHelper } from 'three';
import { Cube } from '../objects/Cube';

class Scene1 extends Scene {
	constructor() {
		super();
		this.background = new Color('skyblue').convertSRGBToLinear();
		this.create();
	}

	create() {
		this.brick = new Cube(2, new Color('orangered').convertSRGBToLinear());
		this.brick.position.set(0, 0, 0)
		this.brick.castShadow = true;
		
		this.floor = new Cube(7, new Color('rgb(255,255,255)').convertSRGBToLinear());
		this.floor.position.set(0, -4.5, 0);
		this.floor.receiveShadow = true;

		this.add(this.brick, this.floor);

		const ambientLight = new HemisphereLight(0xffffbb, 0x080820, .5);
		const light = new DirectionalLight(0xffffff, 1.0);
		light.position.set(1, 1, 0);
		light.castShadow = true;

		// light.shadow.camera.top = 1;
		// light.shadow.camera.borrom = -1;
		// light.shadow.camera.left = -1;
		// light.shadow.camera.right = 1;
		
		light.shadow.camera.far = 4
		
		const helper = new CameraHelper(light.shadow.camera);
		this.add(light, ambientLight, helper);
	}

	update() {
	}
}

export default Scene1;
