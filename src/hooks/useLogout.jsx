import { resetUser } from 'constants/constants';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from 'reducer/authApi';
import { setCredentials } from 'reducer/authSlice';

const useLogout = () => {
  const [logout, { isLoading }] = useLogoutMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const token = Cookies.get('authorization');
      await logout(token);
      Cookies.remove('authorization');
      localStorage.removeItem('userData');
      dispatch(setCredentials(resetUser));

      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return {
    isLoading,
    handleLogout,
  };
};

export default useLogout;
