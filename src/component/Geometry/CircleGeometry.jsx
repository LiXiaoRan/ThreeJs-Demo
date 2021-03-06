import React, { Component } from "react";
import * as THREE from "three";
import styles from "../Geometry.css";

class CircleGeometry extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {}

    componentDidMount() {
        //创建渲染器
        this.init();
    }

    init() {
        const glRender = new THREE.WebGLRenderer({
            canvas: this.glcanvas,
        });
        glRender.setClearColor(0x000000);
        // 创建场景
        const scene = new THREE.Scene();
        //摄像机
        const camera = new THREE.PerspectiveCamera(45, 1 / 1, 1, 100);
        camera.position.set(5, 4, 7);
        camera.lookAt(0, 0, 0);
        //添加摄像机
        scene.add(camera);
        //几何体
        const circle = new THREE.Mesh(
            new THREE.CircleGeometry(3, 18, Math.PI / 3, (Math.PI / 3) * 4),
            new THREE.MeshBasicMaterial({
                color: 0xffff00,
                wireframe: true,
            })
        );
        const axesHelper = new THREE.AxesHelper( 3 );
        scene.add(axesHelper);
        // 添加几何体
        scene.add(circle);

        //渲染
        glRender.render(scene, camera);
    }

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

export default CircleGeometry;
