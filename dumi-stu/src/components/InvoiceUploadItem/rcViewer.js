/*
 * @Author: zp
 * @Date:   2019-07-29 10:51:44
 * @Last Modified by:   zp
 * @Last Modified time: 2019-08-15 13:27:08
 */
import React, { Component } from 'react';

import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.min.css';

export default class RcViewer extends Component {
  constructor(props) {
    super(props);
    this.container = null;
    this.viewer = null;
  }

  componentDidMount() {
    const { startIndex } = this.props;
    this.viewerInit();
    if (startIndex) {
      this.viewer.view(startIndex);
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidUpdate() {
    if (!this.viewer || this.isIdentical()) return;
    this.viewerInit();
  }

  componentWillUnmount() {
    if (this.viewer) this.viewer.destroy();
  }

  getViewer() {
    return {
      viewer: this.viewer,
      container: this.container
    };
  }

  isIdentical() {
    const imgarr = this.viewer.images || [];
    this.viewer.update();
    const imgarr2 = this.viewer.images || [];
    if (!imgarr.length && !imgarr2.length) return true;
    if (imgarr.length !== imgarr2.length) return false;
    return imgarr2.every((img, index) => imgarr[index] === img && img.src === imgarr[index].src);
  }

  viewerInit() {
    if (this.viewer) this.viewer.destroy();
    const { options = {}, children } = this.props;
    this.viewer = new Viewer(this.container, {
      navbar: !!(Array.isArray(children) && children.length),
      ...options
    });
  }

  render() {
    const { children, startIndex, ...others } = this.props;
    return (
      <div
        ref={container => {
          this.container = container;
        }}
        {...others}
      >
        {children}
      </div>
    );
  }
}
