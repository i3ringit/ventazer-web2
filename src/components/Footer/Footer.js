/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.css';
import Link from '../Link';

class Footer extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <span className={s.copyright}>© 2017 &nbsp; Marcos del Cristo</span>
          <Link className={`${s.link} ${s.firstLink}`} to="/">Home</Link>
          <Link className={s.link} to="/projects">Projects</Link>
          <Link className={s.link} to="/contact">Contact</Link>
          <Link className={s.link} to="/privacy">Privacy</Link>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
