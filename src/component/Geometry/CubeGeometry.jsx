import React, { Component } from "react";
import * as THREE from "three";
import styles from "../Geometry.css";

class CubeGeometry extends Component {
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
        camera.position.set(4, 5, 7);
        camera.lookAt(0, 0, 0);

        scene.add(camera);

        const cube = new THREE.Mesh(
            new THREE.CubeGeometry(1, 2, 3, 2, 2, 3),
            new THREE.MeshBasicMaterial({
                color: 0xffff00,
                wireframe: true,
            })
        );

        const points = [];
        const xAxis = new THREE.Vector3(2, 0, 0);
        const yAxis = new THREE.Vector3(0, 2, 0);
        const zAxis = new THREE.Vector3(0, 0, 2);
        points.push(xAxis);
        points.push(yAxis);
        points.push(zAxis);
        const lineMaterial = new THREE.LineBasicMaterial({color: 0xff0000})
        const lineGeometry = new THREE.BufferGeometry().setFromPoints( points );
        const line = new THREE.Line(lineGeometry,lineMaterial);
        
        const axesHelper = new THREE.AxesHelper( 3 );
        scene.add(axesHelper);
        scene.add(line);
        scene.add(cube);
        
        // glRender.render()
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
export default CubeGeometry;
