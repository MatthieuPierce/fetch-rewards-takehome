import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "./InputField";
import SelectFieldAsync from "./SelectFieldAsync";
import handleSubmitUser from "../../utilities/handleSubmitUser";
import postUser from "../../utilities/postUser";
import fetchSelectOptions from "../../utilities/fetchSelectOptions";
import {
  userCreationFields,
  userCreationDefaults,
} from "../../utilities/userCreationConfig";
import "./Form.css";
import SubmitStatus from "./SubmitStatus";
import SubmitButton from "./SubmitButton";
export default function UserCreationForm() {
  // Initialize form handling courtesy of react-hook-form
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    shouldUseNativeValidation: false,
    defaultValues: userCreationDefaults,
  });

  // Store options snagged from fetch asynchronously
  /* options {
    [asyncCollectionName: string]: string[] | obj[]
    error?: string
  }  */
  const [options, setOptions] = useState(null);

  // Fetch options from async source (fetch rewards' endpoint)
  // assumes external options will be static over the course of user session
  useEffect(() => {
    if (!options) {
      const getOptions = async () => {
        setOptions(await fetchSelectOptions());
      };
      getOptions();
    }
  }, []);

  // Track status of user submission
  // postStatus {[ "submitting" | "error" | "success" ]: message string }
  const [postStatus, setPostStatus] = useState(null);

  return (
    <>
      {!postStatus?.success && (
        <form
          onSubmit={handleSubmit((data) =>
            handleSubmitUser(data, userCreationFields, postUser, setPostStatus)
          )}
          noValidate
        >
          {userCreationFields.map(
            ({ asyncContent, asyncCollectionName, ...field }, i) => {
              if (!asyncContent)
                return (
                  <InputField
                    key={`sync-field-${i}`}
                    field={field}
                    register={register}
                    getValues={getValues}
                    formErrors={errors}
                  />
                );
              if (asyncContent) {
                return (
                  <SelectFieldAsync
                    key={`async-field-${i}`}
                    field={field}
                    register={register}
                    getValues={getValues}
                    formErrors={errors}
                    asyncOptions={options?.[asyncCollectionName] ?? null}
                  />
                );
              }
            }
          )}
          <SubmitButton errors={errors} />
        </form>
      )}

      <SubmitStatus status={postStatus} />
      {options?.error && (
        <div>Error fetching options: {options?.error?.message}</div>
      )}
    </>
  );
}
