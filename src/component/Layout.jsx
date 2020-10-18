import React, { Component } from "react";
import PropTypes from "prop-types";
import module_styles from "./Layout.css";

export default class Layout extends Component {
    static propTypes = {
        prop: PropTypes,
    };

    render() {
        return (
            <div className={module_styles.root_dom}>
                <div className={module_styles.container}></div>
                <div className={module_styles.container}></div>
                <div className={module_styles.container}></div>
                <div className={module_styles.container}></div>
                <div className={module_styles.container}></div>
                <div className={module_styles.container}></div>
                <div className={module_styles.container}></div>
            </div>
        );
    }
}
