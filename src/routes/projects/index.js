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
import Projects from './Projects';

const title = 'Marcos del Cristo - Projects';

export default {

  path: '/Projects',

  action() {
    return {
      title,
      component: <Layout><Projects title={title} /></Layout>,
    };
  },
};
