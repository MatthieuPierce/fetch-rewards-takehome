import OptionsList from "./OptionsList";
import ValidationError from "../ValidationError";
import "./SelectFieldAsync.css";

export default function SelectFieldAsync({
  field: { name, labelText = null, inputType = "select", validations = {} },
  register,
  getValues,
  formErrors,
  asyncOptions = null,
  ...rest
}) {
  return (
    <div className="fieldset">
      <label htmlFor={name}>{labelText ? labelText : name}</label>
      <select
        {...register(name, validations)}
        type={inputType}
        placeholder={rest?.placeholder ? rest.placeholder : name}
        aria-invalid={formErrors[name] ? "true" : "false"}
        {...rest}
      >
        <option value={""}>
          {rest?.placeholder
            ? rest.placeholder
            : `--Please choose your ${name}--`}
        </option>
        {!asyncOptions && (
          <OptionsList options={["A", "B", "C"]} selectName={name} />
        )}
        {asyncOptions && (
          <OptionsList options={asyncOptions} selectName={name} />
        )}
      </select>
      {formErrors[name] && (
        <ValidationError message={formErrors[name]?.message} />
      )}
    </div>
  );
}
