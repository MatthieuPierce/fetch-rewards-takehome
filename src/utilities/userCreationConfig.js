import { emailRegExp } from "./regexps";

// unified store for the user creation fields' requirements

// validations field is for use with react-hook-form; see
// https://react-hook-form.com/api/useform/register

export const userCreationFields = [
  {
    name: "name",
    labelText: "Full Name",
    placeholder: "Full Name",
    inputType: "text",
    asyncContent: false,
    validations: {
      required: {
        value: true,
        message: "Please supply your full name.",
      },
      maxLength: {
        value: 255,
        message:
          "Please provide a version of your full name that is less than 255 characters",
      },
    },
    order: 0,
  },
  {
    name: "email",
    labelText: "Email Address",
    placeholder: "email@address.com",
    inputType: "email",
    asyncContent: false,
    validations: {
      required: {
        value: true,
        message: "Gotta have an email address.",
      },
      pattern: {
        value: emailRegExp,
        message: "This doesn't look like an email address.",
      },
    },
    order: 1,
  },
  {
    name: "password",
    labelText: "Set a password",
    placeholder: "",
    inputType: "password",
    asyncContent: false,
    validations: {
      required: {
        value: true,
        message: "Password required.",
      },
      minLength: {
        value: 8,
        message: "Sorry, passwords need 8+ characters.",
      },
      maxLength: {
        value: 510,
        message: "Cool it on the password length, I'm just a take-home demo.",
      },
    },
    order: 2,
  },
  {
    name: "password-confirm",
    labelText: "Re-enter your password",
    placeholder: "",
    inputType: "password",
    asyncContent: false,
    excludeFromPost: true,
    validations: {
      required: {
        value: true,
        message: "Password confirmation required.",
      },
      validate: {
        passwordsMatch: (value) =>
          value == getValues("password") || "Passwords need to match.",
      },
    },
    order: 3,
  },
  {
    name: "occupation",
    labelText:
      "Occupation (if there's time, do autocomplete instead of select)",
    placeholder: "",
    inputType: "select",
    asyncContent: true, // for this take-home, all the select fields are async
    asyncCollectionName: "occupations",
    validations: {
      required: {
        value: true,
        message: "Please select an occupation.",
      },
    },
    order: 4,
  },
  {
    name: "state",
    labelText: "State (If there's time, do autocomplete instead of select)",
    placeholder: "",
    inputType: "select",
    asyncContent: true, // for this take-home, all the select fields are async
    asyncCollectionName: "states",
    validations: {
      required: {
        value: true,
        message: "Please select a state.",
      },
    },
    order: 5,
  },
];

// return each field's registered name as a key with an empty string value
// to supply to react-hook-form's defaultValues option
export const userCreationDefaults = userCreationFields.reduce(
  (acc, curr, i) => {
    acc[curr?.name] = "";
    return acc;
  },
  {}
);

export default userCreationFields;
