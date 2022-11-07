import React from 'react';
import PropTypes from 'prop-types';
import random from 'lodash.random';
import classNames from 'classnames';
import s from './Statistics.module.css';

const Statistics = ({ stats, title }) => {
  const generateRandomColor = () => {
    const randomNumber = random(1, 4);
    switch (randomNumber) {
      case 1:
        return s.blue;
      case 2:
        return s.purple;
      case 3:
        return s.red;
      case 4:
        return s.aqua;
      default:
        return s.blue;
    }
  };

  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(stat => {
          const color = generateRandomColor();
          return (
            <li className={classNames([s.item, color])} key={stat.id}>
              <span className={s.label}>{stat.label}</span>
              <span className={s.percentage}>{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};

export default Statistics;
