import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setUserToken, setUserInfo } from '../../actions';
import moodleAPI from '../../services/moodleAPI';
import LoadingBar from 'react-top-loading-bar';

const InputProcess = ({
  username,
  password,
  handleSubmitState,
  handleError,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const loadingRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    loadingRef.current.continuousStart();
    getToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getToken = () => {
    moodleAPI('https://khub.cvisc.pshs.edu.ph/login/token.php?', {
      service: 'moodle_mobile_app',
      username,
      password,
    }).then((response) => {
      if (response.error) {
        setIsLoading(false);
        loadingRef.current.complete();
        handleError();
        return;
      }

      dispatch(setUserToken(response.token));
      getUserInfo(response.token);
    });
  };

  const getUserInfo = (token) => {
    moodleAPI('https://khub.cvisc.pshs.edu.ph/webservice/rest/server.php?', {
      moodlewsrestformat: 'json',
      wstoken: token,
      wsfunction: 'core_webservice_get_site_info',
    }).then((response) => {
      const payload = {
        firstName: response.firstname,
        userID: response.userid,
      };

      dispatch(setUserInfo(payload));
      setIsLoading(false);
      loadingRef.current.complete();
      handleSubmitState();
    });
  };

  return (
    <>
      <LoadingBar color='#e18829' ref={loadingRef} />
      {isLoading && <p style={{ textAlign: 'center' }}>Loading</p>}
    </>
  );
};

export default InputProcess;
