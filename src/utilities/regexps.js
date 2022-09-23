// Validation regexps from ajv-formats
// https://github.com/ajv-validator/ajv-formats/blob/master/src/formats.ts

export const emailRegExp =
  /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i;