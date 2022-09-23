import { useState } from "react";
import ValidationError from "../ValidationError";
import injectPasswordsMatch from "../../../utilities/injectPasswordsMatch";

export default function InputField({
  field: { name, labelText = null, inputType = "text", validations = {} },
  register,
  getValues = () => {},
  formErrors,
  ...rest
}) {
  const [injectedValidations, setInjectedValidations] = useState(() =>
    injectPasswordsMatch(validations, getValues)
  );
  return (
    <div>
      <label htmlFor={name}>{labelText ? labelText : name}</label>
      <input
        {...register(name, injectedValidations)}
        type={inputType}
        placeholder={rest?.placeholder ? rest.placeholder : name}
        {...rest}
      />
      {formErrors[name] && (
        <ValidationError message={formErrors[name]?.message} />
      )}
    </div>
  );
}
