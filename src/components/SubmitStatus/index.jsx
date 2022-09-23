export default function SubmitStatus({ status }) {
  return (
    <div>
      {status?.submitting && <div>Submitting Status: {status.submitting} </div>}
      {status?.error && (
        <div>
          Error response from attempting to submit user: {status?.error}
        </div>
      )}
      {status?.success && <div>Success response: {status?.success}</div>}
    </div>
  );
}
