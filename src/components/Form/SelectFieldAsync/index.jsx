import OptionsList from "./OptionsList";
import ValidationError from "../ValidationError";
import fieldPropTypes from "../propTypes/fieldPropTypes";
import optionsPropTypes from "../propTypes/optionsPropTypes";
import "./SelectFieldAsync.css";

// propTypes are common b/t SelectFieldAsync & InputField
// with the exception of asyncOptions
SelectFieldAsync.propTypes = {
  ...fieldPropTypes,
  asyncOptions: optionsPropTypes,
};

export default function SelectFieldAsync({
  field: { name, labelText = null, inputType = "select", validations = {} },
  register,
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
        {asyncOptions ? (
          <OptionsList options={asyncOptions} selectName={name} />
        ) : (
          <OptionsList options={["A", "B", "C"]} selectName={name} />
        )}
      </select>
      {formErrors[name] && (
        <ValidationError message={formErrors[name]?.message} />
      )}
    </div>
  );
}
