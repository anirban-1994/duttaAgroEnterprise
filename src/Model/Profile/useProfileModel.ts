import {useSelector} from 'react-redux';
import {profileSlice} from './profileSlice';
import {RootState} from '../../Adapter/Redux/Store';

export const useProfileModel = () => {
  const profileActions = profileSlice.actions;
  const profileDetails = useSelector((state: RootState) => state.profile);

  //------------------------getters--------------------------------------
  const getEmail = () => {
    return profileDetails.email;
  };
  const getFirstname = () => {
    return profileDetails.firstname;
  };
  const getLastname = () => {
    return profileDetails.lastname;
  };
  const getUsername = () => {
    return profileDetails.username;
  };
  const getPic = () => {
    return profileDetails.pic;
  };
  //------------------setters------------------------------------------

  const setFirstname = (firstname: string) => {
    profileActions.setProfile({...profileDetails, firstname});
  };
  const setLastname = (lastname: string) => {
    profileActions.setProfile({...profileDetails, lastname});
  };
  const setUsername = (username: string) => {
    profileActions.setProfile({...profileDetails, username});
  };
  const setEmail = (email: string) => {
    profileActions.setProfile({...profileDetails, email});
  };
  const setPic = (pic: string) => {
    profileActions.setProfile({...profileDetails, pic});
  };

  return {
    getEmail,
    getFirstname,
    getLastname,
    getUsername,
    getPic,
    setFirstname,
    setLastname,
    setEmail,
    setUsername,
    setPic,
  };
};
