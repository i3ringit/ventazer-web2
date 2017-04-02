/**
 * Marcos del Cristo (https://www.mdelcristo.info/)
 *
 * Copyright © 2017-present Marcos del Cristo. All rights reserved.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Schedule.css';
import php from '../projects/img/badges/badge-php.png';

class Schedule extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.container}>

        <section>

          <div className={s.section__intro}>
            <h2 className={s.textLarge}>
              VetMed Schedule
            </h2>
            <p className={s.textNormal}>Scheduling system for VetMed @ University of Illinois.</p>
          </div>

          <div className={`${s.grid} ${s.section__textAndMedia}`}>
            <div className={`${s.grid__item} ${s.grid__itemPhoto}`}>photo</div>
            <div className={`${s.grid__item} ${s.grid__itemText}`}>
              <h3>title</h3>
              <p>parragraph</p>
            </div>
          </div>
        </section>

        <section>
          Section 2
        </section>
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
            className={s.floatLeft}
            src="https://placeholdit.imgix.net/~text?txtsize=28&txt=300%C3%97300&w=300&h=150"
            alt="300"
          />
          This project was developed out of a need for a modern solution to
          schedule and display lectures, with any associated reading
          materials, for students, faculty, and staff at the College of
          Veterinary Medicine, University of Illinois. In late 2015, this VetMed
          Schedule replaced a previous system consisting of HTML tables to
          display blocks of lectures, in use since the late 90&apos;s.
        </p>

        <p className={s.clearfix}>
          <img
            className={s.floatRight}
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
    );
  }
}

export default withStyles(s)(Schedule);
