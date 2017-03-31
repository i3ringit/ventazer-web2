/**
 * Marcos del Cristo (https://www.mdelcristo.info/)
 *
 * Copyright © 2017-present Marcos del Cristo. All rights reserved.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Schedule.css';
import php from '../projects/img/badges/badge-php.png';
// import Card from '../../components/Card';

class Schedule extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>
            <img
              className={s.badgeIcon}
              src={php}
              alt="PHP"
            />
            VetMed Schedule
          </h1>
          <p className={s.clearfix}>
            <img
              className={s.floatRight}
              src="https://placeholdit.imgix.net/~text?txtsize=28&txt=300%C3%97300&w=300&h=150"
              alt="300"
            />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quo
            veniam sint, placeat magni assumenda voluptates aperiam alias
            laudantium fuga repudiandae quisquam ipsam amet ex at adipisci quae
            rat molestiae excepturi, voluptatem vero eligendi cum est iusto
            veritatis! Nostrum repellat illum ab non aliquam placeat possimus
            doloribus.
          </p>

          <p className={s.clearfix}>
            <img
              className={s.floatLeft}
              src="https://placeholdit.imgix.net/~text?txtsize=28&txt=300%C3%97300&w=300&h=300"
              alt="300"
            />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quo
            veniam sint, placeat magni assumenda voluptates aperiam alias
            laudantium fuga repudiandae quisquam ipsam amet ex at adipisci quae
            rat molestiae excepturi, voluptatem vero eligendi cum est iusto
            veritatis! Nostrum repellat illum ab non aliquam placeat possimus
            doloribus dolores blanditiis. Dolorem perspiciatis nemo
            reprehenderit enim dignissimos ipsa, voluptatibus error,
            consequuntur dicta temporibus, sint eius quo omnis suscipit
            deleniti ratione veniam magnam molestias eaque mollitia ea ipsam ex
            unde quasi!
          </p>
          <input type="checkbox" name="btn" id={s.btn} />
          <span>test</span>
          <label className={s.btn} htmlFor={s.btn} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Schedule);
