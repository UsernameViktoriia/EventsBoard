import PropTypes from "prop-types";
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";
import { formatEventStart, formatEventDuration } from "../../utils";
import { iconSize } from "../constants";
import { Card, Chip, EventInfo, EventName } from "./Event.styled";

export const Event = ({ name, location, speaker, type, start, end }) => {
  const formatedStart = formatEventStart(start);
  const formatedDuration = formatEventDuration(start, end);
  return (
    <Card>
      <EventName>{name}</EventName>
      <EventInfo>
        <FaMapMarkerAlt size={iconSize.sm} />
        {location}
      </EventInfo>
      <EventInfo>
        <FaUserAlt size={iconSize.sm} />
        {speaker}
      </EventInfo>
      <EventInfo>
        <FaCalendarAlt size={iconSize.sm} />
        {formatedStart}
      </EventInfo>
      <EventInfo>
        <FaClock size={iconSize.sm} />
        {formatedDuration}
      </EventInfo>
      <Chip eventType={type}>{type}</Chip>
    </Card>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  time: PropTypes.exact({
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
  }),
};
