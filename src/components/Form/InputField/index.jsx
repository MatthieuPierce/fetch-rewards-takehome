export default function InputField({
  register,
  name,
  labelText = null,
  inputType = "text",
  formErrors,
  validations = {},
  ...rest
}) {
  return (
    <div>
      <label htmlFor={name}>{labelText ? labelText : name}</label>
      <input
        {...register(name, validations)}
        type={inputType}
        placeholder={rest?.placeholder ? rest.placeholder : name}
        {...rest}
      />
      <div>
        {formErrors[name] ? <span>{formErrors[name]?.message}</span> : null}
      </div>
    </div>
  );
}
