import PropTypes from "prop-types";

// propType definitions for the field prop, which is
// common to both InputField and SelectFieldAsync

const fieldPropTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    labelText: PropTypes.string,
    placeholder: PropTypes.string,
    inputType: PropTypes.string.isRequired,
    validations: PropTypes.object,
  }).isRequired,
  register: PropTypes.func.isRequired,
  getValues: PropTypes.func,
  formErrors: PropTypes.object,
};

export default fieldPropTypes;
