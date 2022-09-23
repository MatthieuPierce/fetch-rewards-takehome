// Email Validation regexp from ajv-formats
// https://github.com/ajv-validator/ajv-formats/blob/master/src/formats.ts
export const emailRegExp =
  /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i;

// Name Validation regexp that requires 1+ Latin character at start
// TODO: proper unicode support for non-Latin characters
// TODO: sanitize user input on the imaginary backend
// https://stackoverflow.com/questions/3009993/what-would-be-regex-for-matching-foreign-characters
export const nameRegExp = /^[A-Za-zŽžÀ-ÿ]+.*/i;
