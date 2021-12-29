import { Color, CylinderBufferGeometry, MathUtils, Mesh, MeshStandardMaterial } from "three";

class Wheel extends Mesh {
    constructor() {
        super();
        this.material = new MeshStandardMaterial({
            color: new Color('dingray').convertSRGBToLinear(),
            flatShading: false
        })
        this.geometry = new CylinderBufferGeometry(.5, .5, .5);
        this.rotateZ(MathUtils.degToRad(90))
    }

}

export default Wheel