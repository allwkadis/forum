import { Country } from "../../../Country";
import { Currency } from "../../../Currency";
import { ValidateProfileError } from "../services/validateProfileData/validateProfileData";

export interface Profile {
  firstName?: string;
  lastName?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileShema {
  isLoading: boolean;
  error?: string;
  profileData?: Profile;
  formData?: Profile;
  readonly: boolean;
  validateErrors?: ValidateProfileError[];
}
