import {useProfileModel} from '../../Model/Profile/useProfileModel';

export const useProfileController = (
  profileModel: ReturnType<typeof useProfileModel>,
) => {
  const loadAndSetProfileDetails = () => {
    //api call done here to load profile details
    //update profile details
    profileModel.setFirstname('ANIRBAN');
    profileModel.setLastname('DUTTA');
    profileModel.setEmail('anirbandutta327@gmail.com');
    profileModel.setPic('................');
    profileModel.setUsername('anirban_po4');
  };

  return {loadAndSetProfileDetails};
};
