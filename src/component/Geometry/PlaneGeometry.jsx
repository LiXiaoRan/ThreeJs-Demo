import React, { Component } from "react";
import * as THREE from "three";
import styles from "../Geometry.css";

class PlaneGeometry extends Component {
    componentDidMount() {
        this.init();
    }

    init = () => {
        const glRender = new THREE.WebGL1Renderer({
            canvas: this.glcanvas,
        });
        glRender.setClearColor(0x000000);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, 1 / 1, 1, 100);
        camera.position.set(3, 4, 7);
        camera.lookAt(0, 0, 0);

        scene.add(camera);

        const cube = new THREE.Mesh(
            new THREE.PlaneGeometry(2, 4, 3, 2),
            new THREE.MeshBasicMaterial({
                color: 0xffff00,
                wireframe: true,
            })
        );

        const axesHelper = new THREE.AxesHelper( 3 );
        scene.add(axesHelper);
        scene.add(cube);

        glRender.render(scene, camera);
    };

    render() {
        return (
            <div
                className={styles.container}
                ref={(con_dom) => {
                    return (this.con_dom = con_dom);
                }}
            >
                <canvas
                    className={styles.glcanvas}
                    ref={(glcanvas) => {
                        return (this.glcanvas = glcanvas);
                    }}
                ></canvas>
            </div>
        );
    }
}
export default PlaneGeometry;
