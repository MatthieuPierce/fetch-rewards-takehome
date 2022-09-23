import "./ValidationError.css";

export default function ValidationError({ message }) {
  return (
    <div className="validationError">
      <span className="alertMessage" role="alert">
        {message}
      </span>
    </div>
  );
}
