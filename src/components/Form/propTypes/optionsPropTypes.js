import PropTypes from "prop-types";

// propType definitions for a list of options, main use is
// options fetched asynchronously and rendered inside a select element
const optionsPropTypes = PropTypes.arrayOf(
  PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      abbreviation: PropTypes.string.isRequired,
    }),
  ])
);

export default optionsPropTypes;
