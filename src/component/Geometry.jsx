import React, { Component } from "react";
import styles from "./Geometry.css";
import * as THREE from "three";

class Geometry extends Component {
    constructor(props) {
        super(props);
        this.glcanvas = React.createRef();
    }

    componentDidMount() {
        this.init();
    }

    init = (params) => {
        // console.log("this.glcanvas", this.glcanvas);
        console.log("this.con_dom", this.con_dom.offsetHeight);
        console.log("this.con_dom", this.con_dom.offsetWidth);
        //渲染器
        let glRender = new THREE.WebGLRenderer({
            canvas: this.glcanvas.current,
        });
        glRender.setClearColor(0x000000);
        //场景
        let scene = new THREE.Scene();
        //摄像机
        let camera = new THREE.PerspectiveCamera(45, 1 / 1, 1, 1000);
        camera.position.set(0, 0, 5);
        //场景中加入摄像机
        scene.add(camera);

        //加入立方体进入场景
        const cube = new THREE.Mesh(
            new THREE.CubeGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({
                color: 0xff0000,
                wireframe: true,
            })
        );

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
                    ref={this.glcanvas}
                ></canvas>
            </div>
        );
    }
}

export default Geometry;
