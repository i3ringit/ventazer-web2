/**
 * Marcos del Cristo (https://www.mdelcristo.info/)
 *
 * Copyright © 2017-present Marcos del Cristo. All rights reserved.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Schedule from './Schedule';

const title = 'Marcos del Cristo - VetMed Schedule';

export default {

  path: '/projects/vetmed-schedule',

  action() {
    return {
      title,
      component: <Layout><Schedule title={title} /></Layout>,
    };
  },
};
