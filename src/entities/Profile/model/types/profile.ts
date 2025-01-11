import { Country, Currency } from "../../../../shared/constants/common";

export interface Profile {
  firstName: string;
  lastName: string;
  age: number;
  currency: Currency;
  country: Country;
  city: string;
  username: string;
  avatar: string;
}

export interface ProfileShema {
  isLoading: boolean;
  error?: string;
  profileData?: Profile;
  readonly: boolean
}
