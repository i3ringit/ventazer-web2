/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Page.css';

class Page extends React.Component {
  static propTypes = {
    html: PropTypes.string.isRequired,
  };

  render() {
    const { html } = this.props;
    return (
      <main className={s.root} role="main" id="main">
        <div className={s.container}>
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </main>
    );
  }
}

export default withStyles(s)(Page);
