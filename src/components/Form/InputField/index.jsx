import { useState } from "react";
import ValidationError from "../ValidationError";
import injectPasswordsMatch from "../../../utilities/injectPasswordsMatch";
import fieldPropTypes from "../propTypes/fieldPropTypes";
import "./InputField.css";

InputField.propTypes = {
  ...fieldPropTypes,
};

export default function InputField({
  field: {
    name,
    labelText,
    placeholder = null,
    inputType = "text",
    validations = {},
  },
  register,
  getValues = () => {},
  formErrors,
  ...rest
}) {
  const [injectedValidations, setInjectedValidations] = useState(() =>
    injectPasswordsMatch(validations, getValues)
  );
  return (
    <div className={"fieldset"}>
      <label htmlFor={name}>{labelText ? labelText : name}</label>
      <input
        {...register(name, injectedValidations)}
        type={inputType}
        placeholder={placeholder ? placeholder : name}
        aria-invalid={formErrors[name] ? "true" : "false"}
        {...rest}
      />
      {formErrors[name] && (
        <ValidationError message={formErrors[name]?.message} />
      )}
    </div>
  );
}
