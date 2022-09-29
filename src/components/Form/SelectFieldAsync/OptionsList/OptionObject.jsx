import PropTypes from "prop-types";
/* assumes that prop o follows the interface
  interface Option {
    name: string,
    abbreviation: string
  }
*/

OptionObject.propTypes = {
  o: PropTypes.shape({
    name: PropTypes.string.isRequired,
    abbreviation: PropTypes.string.isRequired,
  }).isRequired,
};

export default function OptionObject({ o }) {
  // normally would have key, but is handled in OptionsList
  return (
    <option value={o?.name}>
      {o?.name} ({o?.abbreviation})
    </option>
  );
}
