/**
 * Marcos del Cristo (https://www.mdelcristo.info/)
 *
 * Copyright © 2017-present Marcos del Cristo. All rights reserved.
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
