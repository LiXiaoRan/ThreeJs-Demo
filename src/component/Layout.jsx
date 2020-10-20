import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Layout.css";
import Geometry from "./Geometry";


export default class Layout extends Component {
    static propTypes = {
        prop: PropTypes,
    };

    render() {
        return (
            <div className={styles.root_dom}>
                <div className={styles.contaniner}>
                    <Geometry/>
                </div>
                <div className={styles.contaniner}></div>
                <div className={styles.contaniner}></div>
                <div className={styles.contaniner}></div>
                <div className={styles.contaniner}></div>
                <div className={styles.contaniner}></div>
                <div className={styles.contaniner}></div>
            </div>
        );
    }
}
