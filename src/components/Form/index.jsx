import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./Form.css";
import InputField from "./InputField";
import SelectFieldAsync from "./SelectFieldAsync";
import handleSubmitUser from "../../utilities/handleSubmitUser";
import getSelectOptions from "../../utilities/getSelectOptions";
import {
  userCreationFields,
  userCreationDefaults,
} from "../../utilities/userCreationConfig";

export default function UserCreationForm() {
  // initialize form handling via react-hook-form
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    shouldUseNativeValidation: false,
    defaultValues: userCreationDefaults,
  });

  /* options {
    [asyncCollectionName: string]: string[] | obj[]
    error?: string
  }  */
  const [options, setOptions] = useState(null);

  // get options from async source (fetch rewards' endpoint)
  // assumes external options will be static over the course of user session
  useEffect(() => {
    if (!options) {
      async function getOptions() {
        setOptions(await getSelectOptions());
      }
      getOptions();
    }
  }, []);

  return (
    <>
      {options?.error && (
        <div>Error getting options: {options?.error?.message}</div>
      )}
      <form onSubmit={handleSubmit(handleSubmitUser)} noValidate>
        {userCreationFields.map(
          ({ asyncContent, asyncCollectionName, ...field }, i) => {
            if (!asyncContent)
              return (
                <InputField
                  key={`sync-field-${i}`}
                  field={field}
                  register={register}
                  formErrors={errors}
                />
              );
            if (asyncContent) {
              return (
                <SelectFieldAsync
                  key={`async-field-${i}`}
                  field={field}
                  register={register}
                  formErrors={errors}
                  asyncOptions={options?.[asyncCollectionName] ?? null}
                />
              );
            }
          }
        )}
        <button type={"submit"}>Create User</button>
        {/* submission status div will be placed outside of form element */}
      </form>
    </>
  );
}
