import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const randomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

const Statistics = ({ title, stats }) => {
  const statsArray = Array.isArray(stats) ? stats : Object.values(stats);

  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {statsArray.map((stat, index) => (
          <li
            key={index}
            className="item"
            style={{ backgroundColor: randomColor() }}
          >
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ),
    PropTypes.object, // Permite și un obiect
  ]).isRequired,
};

export default Statistics;
