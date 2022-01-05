import { useState, useEffect } from 'react';
import SignupForm from '../components/page-components/forms/SignUpForm';
import AuthHeader from '../components/page-components/auth/AuthHeader';
import GoogleButton from '../components/buttons/GoogleButton';
import AuthDivider from '../components/page-components/auth/AuthDivider';
import ErrorMessage from '../components/error/ErrorMessage';
import Redirect from '../components/page-components/auth/Redirect';
import fetchWrapper, { fetchPage } from '../services/useFetch';
import { pageFilter } from '../services/cms/pages';
import GoogleLogin from 'react-google-login';
import { clientCookieSet } from '../services/cookies';
import { useRouter } from 'next/router';

const Signup = ({ pageData }) => {
  const [error, setError] = useState();
  const [visible, setVisible] = useState(false);

  const router = useRouter();

  const positiveResponseGoogle = async (response) => {
    if (response.error) {
      setError("Something went wrong, please try again in a moment.");
    }

    const postData = {
      access_token: response.accessToken,
      id_token: response.idToken,
      email: response.profileObj?.email,
      first_name: response?.profileObj?.givenName,
      last_name: response?.profileObj?.familyName,
    };

    const responseAPI = await fetchWrapper('/api/login/google', {
      method: 'POST',
      data: postData
    });

    const data = await responseAPI.json();
    if (responseAPI.status === 200) {
      clientCookieSet(data.access_token, data.refresh_token, true);
      console.log(window.location.pathname);

      router.push('/onboarding/profile');
    } else {
      try {
        const msg = await responseAPI?.json();
        setError(msg?.error);
        setVisible(true);
      } catch (err) {
        setError('Oops, something went wrong.');
        setVisible(true);
      }
    }
  };

  return (
    <div className='auth container'>
      <div className='wrapper-form'>
        <AuthHeader pageData={pageData ? pageData[0] : null} />
        <GoogleLogin
          clientId='584643384358-ck6a8dph9o5dnf7fm8jjtere9s02s4c7.apps.googleusercontent.com'
          render={(renderProps) => (
            <GoogleButton
              content='Signup with Google'
              renderProps={renderProps}
            />
          )}
          buttonText='Login'
          onSuccess={positiveResponseGoogle}
          onFailure={positiveResponseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        <AuthDivider />
        <ErrorMessage
          content={error}
          visible={visible}
          setVisible={setVisible}
        />
        <SignupForm setError={setError} setVisible={setVisible} />
        <Redirect
          content='Already have an account?'
          link='/login'
          linkContent='Login'
        />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const pageStatus = await fetchPage("pages.AuthPage");

  let pageData;
  if (pageStatus.status === 200) {
    const pageTemp = await pageStatus.json();
    pageData = await pageFilter(pageTemp, "signup");
  }

  return {
    props: { pageData: pageData || null },
  };
}

export default Signup;
