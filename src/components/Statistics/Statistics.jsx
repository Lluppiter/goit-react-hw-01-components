import PropTypes from 'prop-types';
import style from '../Statistics/Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.statList}>
        {stats.map(elem => (
          <li
            className={title ? style.item : style.itemSolo}
            key={elem.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={style.label}>{elem.label}</span>
            <span className={style.percentage}>{elem.percentage}&#37;</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
