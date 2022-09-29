import PropTypes from "prop-types";

OptionString.propTypes = {
  o: PropTypes.string.isRequired,
};

export default function OptionString({ o }) {
  // normally would have key, but is handled in OptionsList
  return <option value={o}>{o}</option>;
}
