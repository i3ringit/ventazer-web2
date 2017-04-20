/**
 * Marcos del Cristo (https://www.mdelcristo.info/)
 *
 * Copyright © 2017-present Marcos del Cristo. All rights reserved.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Schedule.css';
import image1 from './img/phone-1_1x.jpg';
import image2 from './img/phone-1_2x.jpg';

class Schedule extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>

        <section className={`${s.largeSection} ${s.uTightBottom} ${s.uBgGrayLight}`}>

          <div className={s.container}>

            <div className={s.section_intro}>
              <h2 className={s.textLarge}>
                VetMed Schedule
              </h2>
              <p className={s.textNormal}>
                Scheduling system for VetMed at the University of Illinois.
              </p>
            </div>

            <div className={`${s.largeSection} ${s.largeSection_textAndMedia}`}>
              <div className={`${s.grid} ${s.grid__middle} ${s.uGrid__override}`}>

                <div className={`${s.grid_item} ${s.desktop__oneHalf} ${s.tablet__oneWhole}`}>
                  <div className={s.largeSection_media}>
                    <img src={image1} srcSet={image2} alt="phone" />
                  </div>
                </div>

                <div
                  className={`${s.grid_item}
                              ${s.push__desktop__oneTwelfth}
                              ${s.desktop__fourTwelfths}
                              ${s.tablet__oneWhole}`}
                >
                  <div className={`${s.largeSection_text} ${s.largeSection_text__offsetUp}`}>
                    <h3 className={s.beta}>Hello World!</h3>
                    <p className={s.textNormal}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsum voluptate, modi expedita magni explicabo.
                      Laudantium accusamus ipsam reprehenderit quis unde.
                      <br />
                      <br />
                      Repellat blanditiis distinctio autem amet sint quibusdam
                      tempore, aliquid, praesentium dolorum, vitae accusantium
                      alias nulla, doloremque suscipit laboriosam laudantium
                      iusto.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div
              className={`${s.largeSection}
                          ${s.largeSection_textAndMedia}
                          ${s.largeSection_mediaDeskRight}
                          ${s.uTightBottom}`}
            >
              <div className={`${s.grid} ${s.grid__middle} ${s.uGrid__override}`}>

                <div
                  className={`${s.grid_item}
                              ${s.push__desktop__oneTwelfth}
                              ${s.desktop__fourTwelfths}
                              ${s.tablet__oneWhole}`}
                >
                  <div className={`${s.largeSection_text} ${s.largeSection_text__offsetUp}`}>
                    <h3 className={s.beta}>Hello World!</h3>
                    <p className={s.textNormal}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsum voluptate, modi expedita magni explicabo.
                      Laudantium accusamus ipsam reprehenderit quis unde.
                      <br />
                      <br />
                      Repellat blanditiis distinctio autem amet sint quibusdam
                      tempore, aliquid, praesentium dolorum, vitae accusantium
                      alias nulla, doloremque suscipit laboriosam laudantium
                      iusto.
                    </p>
                  </div>
                </div>

                <div
                  className={`${s.grid_item}
                              ${s.desktop__oneHalf}
                              ${s.tablet__oneWhole}
                              ${s.push__desktop__twoTwelfths}`}
                >
                  <div className={s.largeSection_media}>
                    <img src={image1} srcSet={image2} alt="phone" />
                  </div>
                </div>

              </div>
            </div>

          </div>

        </section>

        {/* <input type="checkbox" name="btn" id={s.btn} />
        <span>test</span>
        <label className={s.btn} htmlFor={s.btn} /> */}

      </div>
    );
  }
}

export default withStyles(s)(Schedule);
