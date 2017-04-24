/**
 * Marcos del Cristo (https://www.mdelcristo.info/)
 *
 * Copyright © 2017-present Marcos del Cristo. All rights reserved.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Card.css';

/* import Link from '../Link'; */

class Card extends React.Component {
  static propTypes = {
    cardLink: PropTypes.string.isRequired,
    cardSrc: PropTypes.string.isRequired,
    cardTitle: PropTypes.string.isRequired,
    cardText: PropTypes.string.isRequired,
    cardLinkText: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.card}>

        {/*
        <Link to={this.props.cardLink}>
          <img src={this.props.cardSrc} alt={this.props.cardTitle} />
        </Link>*/}

        <a href={this.props.cardLink}>
          <img src={this.props.cardSrc} alt={this.props.cardTitle} />
        </a>
        <div className={s.innerCard}>
          <h2>{this.props.cardTitle}</h2>
          <p>{this.props.cardText}</p>
          <a href={this.props.cardLink} className={s.btn}>
            {this.props.cardLinkText}
          </a>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Card);
