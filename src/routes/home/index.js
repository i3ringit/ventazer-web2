/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Page from '../../components/Page';

const title = 'Marcos del Cristo - Home';

export default {

  path: '/',

  async action() {
    const data = await require.ensure([], require => require('./about.md'), 'about');

    if (!data || !data.title) throw new Error('Failed to load the about feed.');

    return {
      title,
      chunk: 'about',
      component: <Layout><Page {...data} /></Layout>,
    };
  },
};
