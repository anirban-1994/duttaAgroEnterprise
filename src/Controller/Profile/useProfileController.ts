import {useProfileModal} from '../../Model/Profile/useProfileModal';

export const useProfileController = (
  profileModal: ReturnType<typeof useProfileModal>,
) => {
  const fetchUsername = () => {
    profileModal.setUsername('anirbnn');
  };

  return {fetchUsername};
};
