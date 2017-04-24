/**
 * Marcos del Cristo (https://www.mdelcristo.info/)
 *
 * Copyright © 2017-present Marcos del Cristo. All rights reserved.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Projects.css';
import Card from '../../components/Card';
import acvs from './img/thumbnails/acvs.jpg';
import chambana from './img/thumbnails/chambana-music.jpg';
import mySite from './img/thumbnails/my-website.jpg';
import ventazer from './img/thumbnails/ventazer.jpg';
import vetmedAnimals from './img/thumbnails/vetmed-animals.jpg';
import vetmedMulti from './img/thumbnails/vetmed-multisite.jpg';
import vetmedSchedule from './img/thumbnails/vetmed-schedule.jpg';
import wordpress from './img/thumbnails/wordpress-sites.jpg';

class Projects extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <main id="main" role="main">

        <section className={`${s.largeSection} ${s.bgGray}`} id="php">
          <div className={s.container}>
            <div className={s.section_intro}>
              <h2 className={s.textLarge}>
                PHP Projects
              </h2>
              <p className={s.textNormal}>
                These projects use PHP in the back-end and a number of
                javascript libraries in the front end.
              </p>
            </div>

            <div className={s.cardContainer}>

              <Card
                cardLink="/projects/vetmed-schedule"
                cardSrc={vetmedSchedule}
                cardTitle="VetMed Schedule"
                cardText="Scheduling system for the College of VetMed @ University of Illinois."
              />

              <Card
                cardLink="/projects/vetmed-multisite"
                cardSrc={vetmedMulti}
                cardTitle="VetMed multisite"
                cardText="WordPress multisite containing dozens of websites for VetMed @ Illinois."
              />

              <Card
                cardLink="/projects/wordpress-sites"
                cardSrc={wordpress}
                cardTitle="WordPress sites"
                cardText="Several WordPress sites designed and hosted for clients."
              />

            </div>
          </div>
        </section>

        <section className={`${s.largeSection} ${s.bgGrayLight}`} id="js">
          {/*
          <div
            className={`${s.cardContainerWrapper}
                        ${s.hasDiagonalTopGrayDark}
                        ${s.hasDiagonalBottomGrayDark}`}
          >
          </div>
          */}

          <div className={s.container}>
            <div className={s.section_intro}>
              <h2 className={s.textLarge}>
                JavaScript Projects
              </h2>
              <p className={s.textNormal}>
                These projects are written in Javascript for the back and
                front-end. The stacks consist mostly of Node.js and Express.js
                in the back-end, and Angular or React for the front-end.
              </p>
            </div>
            <div className={s.cardContainer}>

              <Card
                cardLink="/projects/my-site"
                cardSrc={mySite}
                cardTitle="This website"
                cardText="My online portfolio, an isomorphic web app experiment."
              />

              <Card
                cardLink="/projects/acvs"
                cardSrc={acvs}
                cardTitle="ACVS"
                cardText="American College of Veterinary Surgeons' historic profiles for diplomates."
              />

              <Card
                cardLink="/projects/chambana"
                cardSrc={chambana}
                cardTitle="Chambana Music"
                cardText="A historic collection of bands formed in the Urbana-Champaign area."
              />

              <Card
                cardLink="/projects/ventazer"
                cardSrc={ventazer}
                cardTitle="Ventazer"
                cardText="Ventazer is an upcoming ticketing platform for mobile and the web."
              />

            </div>
          </div>
        </section>

        <section className={`${s.largeSection} ${s.bgGray}`} id="cpp">
          <div className={s.container}>
            <div className={s.section_intro}>
              <h2 className={s.textLarge}>
                C++ Projects
              </h2>
              <p className={s.textNormal}>
                This project was developed using Unreal Engine for the College
                of Veterinary Medicine at the University of Illinois.
              </p>
            </div>

            <div className={s.cardContainer}>
              <Card
                cardLink="/projects/vetmed-animals"
                cardSrc={vetmedAnimals}
                cardTitle="VetMed Animals"
                cardText="An interactive tool for veterinary students."
              />
            </div>

          </div>
        </section>

      </main>
    );
  }
}

export default withStyles(s)(Projects);
