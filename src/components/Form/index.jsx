import { useForm } from "react-hook-form";
import "./Form.css";
import InputField from "./InputField";
import SelectFieldAsync from "./SelectFieldAsync";

import { emailRegExp } from "../../utilities/regexps";
import handleSubmitUser from "../../utilities/handleSubmitUser";
import getSelectOptions from "../../utilities/getSelectOptions";

export default function UserCreationForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    shouldUseNativeValidation: false,
    defaultValues: {
      name: "",
      email: "",
      password: "",
      occupation: "",
      state: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(handleSubmitUser)} noValidate>
      <InputField
        inputType={"text"}
        name={"name"}
        labelText={"Full Name"}
        placeholder={"full name"}
        validations={{
          required: {
            value: true,
            message: "Please supply your full name.",
          },
          maxLength: {
            value: 255,
            message:
              "Please provide a version of your full name that is less than 255 characters",
          },
        }}
        register={register}
        formErrors={errors}
      />

      <InputField
        inputType={"email"}
        name={"email"}
        labelText={"Email Address"}
        placeholder={"email@address.com"}
        validations={{
          required: {
            value: true,
            message: "Gotta have an email address.",
          },
          pattern: {
            value: emailRegExp,
            message: "This doesn't look like an email address.",
          },
        }}
        register={register}
        formErrors={errors}
      />

      <InputField
        inputType={"password"}
        name={"password"}
        labelText={"Set a password"}
        placeholder={""}
        validations={{
          required: {
            value: true,
            message: "Password required.",
          },
          minLength: {
            value: 8,
            message: "Sorry, passwords need 8+ characters.",
          },
          maxLength: {
            value: 255,
            message: "Cool it on the password length.",
          },
        }}
        register={register}
        formErrors={errors}
      />

      <InputField
        inputType={"password"}
        name={"password-confirm"}
        labelText={"Re-enter your password"}
        placeholder={""}
        validations={{
          required: {
            value: true,
            message: "Password confirmation required.",
          },
          validate: {
            passwordsMatch: (value) =>
              value == getValues("password") || "Passwords need to match.",
          },
          onBlur: async () => trigger("password-confirm"),
        }}
        register={register}
        formErrors={errors}
      />

      <SelectFieldAsync
        name={"occupation"}
        labelText={
          "Occupation (If there's time, do autocomplete instead of select)"
        }
        placeholder={""}
        validations={{}}
        register={register}
        formErrors={errors}
        asyncOptions={null}
      />

      <SelectFieldAsync
        name={"state"}
        labelText={"State (If there's time, do autocomplete instead of select)"}
        placeholder={""}
        validations={{}}
        register={register}
        formErrors={errors}
        asyncOptions={null}
      />

      <button type={"submit"} onSubmit={getSelectOptions}>
        Create User
      </button>
      {/* submission status div will be placed outside of form element */}
    </form>
  );
}
