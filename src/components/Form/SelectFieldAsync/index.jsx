import { useState } from "react";

export default function SelectFieldAsync({
  register,
  name,
  labelText = null,
  inputType = "text",
  formErrors,
  validations = {},
  asyncOptions = null,
  ...rest
}) {
  const [options, setOptions] = useState();
  // render label and select form asap, fill in options once loaded
  return (
    <div>
      <label htmlFor={name}>{labelText ? labelText : name}</label>
      <select
        {...register(name, validations)}
        type={inputType}
        placeholder={rest?.placeholder ? rest.placeholder : name}
        {...rest}
      >
        <option value={""}>
          {rest?.placeholder
            ? rest.placeholder
            : `--Please choose your ${name}--`}
        </option>
        {!asyncOptions && (
          <>
            <option>Option A</option>
            <option>Option B</option>
            <option>Option C</option>
          </>
        )}
        {asyncOptions &&
          asyncOptions.map((o) => (
            <>
              <option value={o?.name}>{o?.abbreviation}</option>
            </>
          ))}
      </select>
      <div>
        {formErrors[name] ? <span>{formErrors[name]?.message}</span> : null}
      </div>
    </div>
  );
}
