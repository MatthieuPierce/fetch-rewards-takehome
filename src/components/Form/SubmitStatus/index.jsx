import PropTypes from "prop-types";
import "./SubmitStatus.css";

SubmitStatus.propTypes = {
  status: PropTypes.shape({
    submitting: PropTypes.string,
    error: PropTypes.string,
    success: PropTypes.string,
  }),
};

export default function SubmitStatus({ status }) {
  return (
    <div className={"statusBox"}>
      {status?.submitting && (
        <div>
          <span role="status">{status.submitting}</span>
        </div>
      )}
      {status?.error && (
        <div>
          <span role="alert">
            Error while attempting to create user: {status?.error}
          </span>
        </div>
      )}
      {status?.success && (
        <div>
          <span role="status">{status?.success}</span>
        </div>
      )}
    </div>
  );
}