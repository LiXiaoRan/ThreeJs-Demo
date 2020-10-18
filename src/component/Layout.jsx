import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Layout.css";

export default class Layout extends Component {
    static propTypes = {
        prop: PropTypes,
    };

    render() {
        return (
            <div className={styles.root_dom}>
                <div className={styles.container}></div>
                <div className={styles.container}></div>
                <div className={styles.container}></div>
                <div className={styles.container}></div>
                <div className={styles.container}></div>
                <div className={styles.container}></div>
                <div className={styles.container}></div>
            </div>
        );
    }
}
