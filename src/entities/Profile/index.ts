export type { Profile, ProfileShema } from "./model/types/profile";
export {
  profileSlice,
  profileActions,
  profileSelectors,
} from "./model/slice/ProfileSlice";
export { fetchProfileData } from "./model/services/fetchProfileData/fetchProfileData";
export { ProfileCard } from "./ui/ProfileCard/ProfileCard";
