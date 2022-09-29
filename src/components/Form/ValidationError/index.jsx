import PropTypes from "prop-types";
import "./ValidationError.css";

ValidationError.propTypes = {
  message: PropTypes.string.isRequired,
};

export default function ValidationError({ message }) {
  return (
    <div className="validationError">
      <span className="alertMessage" role="alert">
        {message}
      </span>
    </div>
  );
}
