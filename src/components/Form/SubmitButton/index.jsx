import PropTypes from "prop-types";
import "./SubmitButton.css";

SubmitButton.propTypes = {
  errors: PropTypes.object,
};
export default function SubmitButton({ errors }) {
  return (
    <button
      className={Object.keys(errors).length > 0 ? "hold" : null}
      type="submit"
    >
      Create User
    </button>
  );
}
