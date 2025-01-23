import { Profile } from "../../..";


export type ValidateProfileError =
  | "INCORRECT_USER_DATA"
  | "INCORRECT_AGE"
  | "INCORRECT_COUNTRY"
  | "NO_DATA"
  | "SERVER_ERROR"
  | "aboba";

export const validateProfileData = (
  profile?: Profile
): ValidateProfileError[] | [] => {
  if (!profile) {
    return ["INCORRECT_USER_DATA"];
  }

  const { firstName, lastName, country, age } = profile;
  const errors: ValidateProfileError[] = [];

  if (!firstName || !lastName) {
    errors.push("INCORRECT_USER_DATA");
  }

  if (firstName == "aboba") {
    errors.push("aboba");
  }

  if (!age || !Number.isInteger(age) || age < 14) {
    errors.push("INCORRECT_AGE");
  }

  if (!country) {
    errors.push("INCORRECT_COUNTRY");
  }
  return errors;
};
