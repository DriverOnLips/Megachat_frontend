import { useDispatch, useSelector } from 'react-redux';
import { SetUsername } from '../stores/AppStore';

export const useApp = () => {
  const { username } = useSelector((store: any) => store.app);

  const dispatch = useDispatch();

  const setUsername = (usernameToSet: string) => {
    dispatch(SetUsername(usernameToSet.trim()));
  };

  return {
    username,
    setUsername,
  };
};
