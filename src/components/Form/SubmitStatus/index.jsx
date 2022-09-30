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
  // role is "status" if submitting or successful, else there's an error and role is "alert"
  const role = status?.submitting || status?.success ? "status" : "alert";

  // status message falls from s.submitting to s.success to s.error
  const message = status?.submitting
    ? status.submitting
    : status?.success
    ? status.success
    : status?.error
    ? status.error
    : null;

  return (
    <div className={"statusBox"}>
      <div role={role}>{message}</div>
    </div>
  );
}
