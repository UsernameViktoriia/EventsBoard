import PropTypes from "prop-types";
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";
import css from "./Event.module.css";

export const Event = ({ name, location, speaker, type, start, end }) => {
  return (
    <div className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.info}>
        <FaMapMarkerAlt className={css.icon} size={16} />
        {location}
      </p>
      <p className={css.info}>
        <FaUserAlt className={css.icon} size={16} />
        {speaker}
      </p>
      <p className={css.info}>
        <FaCalendarAlt className={css.icon} />
        {start}
      </p>
      <p className={css.info}>
        <FaClock className={css.icon} />
        Duration
      </p>
      {/* <span className="chip free|paid|vip">Event type</span> */}
    </div>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  time: {
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
  },
};
