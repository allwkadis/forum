import { Country } from "../../../../shared/constants/common";
import { Currency } from "../../../Currency";

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
}
