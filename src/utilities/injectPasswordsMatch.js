// pass a registered getValues function to the validations object
// so react-hook-form can compare the values of password & password-confirm

export default function injectPasswordsMatch(validationsObj, getValuesFn) {
  if (validationsObj?.validate?.hasOwnProperty("passwordsMatch")) {
    const newMatch = (value) =>
      value == getValuesFn("password") || "Passwords need to match.";
    validationsObj.validate.passwordsMatch = newMatch;
  }
  return validationsObj;
}
