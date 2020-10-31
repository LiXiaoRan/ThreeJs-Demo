import React, { Component } from "react";
import styles from "../Geometry.css";
import * as THREE from "three";

export class TorusGeometry extends Component {
    static propTypes = {};

    componentDidMount() {
        this.init();
    }

    init() {
        const glrender = new THREE.WebGLRenderer({
            canvas: this.glcanvas,
        });
        glrender.setClearColor(0x000000);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, 1 / 1, 1, 100);
        camera.position.set(4, 6, 10);
        camera.lookAt(0, 0, 0);

        scene.add(camera);

        const TorusGeometry = new THREE.Mesh(
            new THREE.TorusGeometry(3, 1, 4, 8),
            new THREE.MeshBasicMaterial({
                color: 0xffff00,
                wireframe: true,
            })
        );
        scene.add(TorusGeometry);

        glrender.render(scene, camera);
    }

    render() {
        return (
            <div
                className={styles.container}
                ref={(containerDom) => {
                    return (this.containerDom = containerDom);
                }}
            >
                <canvas
                    className={styles.glcanvas}
                    ref={(glcanvas) => {
                        return (this.glcanvas = glcanvas);
                    }}
                />
            </div>
        );
    }
}

export default TorusGeometry;
