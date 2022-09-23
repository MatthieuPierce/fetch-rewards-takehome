import "./SubmitButton.css";

export default function SubmitButton({ errors, ...rest }) {
  console.log(errors);
  return (
    <button
      className={Object.keys(errors).length > 0 ? "hold" : null}
      type="submit"
    >
      Create User
    </button>
  );
}
