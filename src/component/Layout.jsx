import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Layout.css";
import Geometry from "./Geometry";
import CubeGeometry from "./Geometry/CubeGeometry";
import PlaneGeometry from "./Geometry/PlaneGeometry";
import SphereGeometry from "./Geometry/SphereGeometry";
import CircleGeometry from "./Geometry/CircleGeometry";
import CylinderGeometry from "./Geometry/CylinderGeometry";
import TetrahedronGeometry from "./Geometry/TetrahedronGeometry";
import OctahedronGeometry from "./Geometry/OctahedronGeometry";
import IcosahedronGeometry from "./Geometry/IcosahedronGeometry";
import TorusGeometry from "./Geometry/TorusGeometry";
import TorusKnotGeometry from "./Geometry/TorusKnotGeometry";

export default class Layout extends Component {
    static propTypes = {
        prop: PropTypes,
    };

    render() {
        return (
            <div className={styles.root_dom}>
                <div className={styles.contaniner}>
                    <Geometry />
                </div>
                <div className={styles.contaniner}>
                    <CubeGeometry />
                </div>
                <div className={styles.contaniner}>
                    <PlaneGeometry />
                </div>
                <div className={styles.contaniner}>
                    <SphereGeometry />
                </div>
                <div className={styles.contaniner}>
                    <CircleGeometry />
                </div>
                <div className={styles.contaniner}>
                    <CylinderGeometry />
                </div>
                <div className={styles.contaniner}>
                    <TetrahedronGeometry />
                </div>
                <div className={styles.contaniner}>
                    <OctahedronGeometry />
                </div>
                <div className={styles.contaniner}>
                    <IcosahedronGeometry />
                </div>
                <div className={styles.contaniner}>
                    <TorusGeometry />
                </div>
                <div className={styles.contaniner}>
                    <TorusKnotGeometry />
                </div>
            </div>
        );
    }
}
