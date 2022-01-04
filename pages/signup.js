import { useState, useEffect } from 'react';
import SignupForm from '../components/page-components/forms/SignUpForm';
import AuthHeader from '../components/page-components/auth/AuthHeader';
import GoogleButton from '../components/buttons/GoogleButton';
import AuthDivider from '../components/page-components/auth/AuthDivider';
import ErrorMessage from '../components/error/ErrorMessage';
import Redirect from '../components/page-components/auth/Redirect';
import fetchWrapper from '../services/useFetch';
import { pageFilter } from '../services/cms/pages';
import GoogleLogin from 'react-google-login';
import { clientCookieSet } from '../services/cookies';
import { useRouter } from 'next/router';

const Signup = ({ pageData }) => {
  const [error, setError] = useState();
  const [visible, setVisible] = useState(false);

  const router = useRouter();

  const positiveResponseGoogle = async (response) => {
    const data = {
      access_token: response.accessToken,
      id_token: response.idToken,
      email: response.profileObj.email,
      first_name: response?.profileObj?.givenName,
      last_name: response?.profileObj?.familyName,
    };

    const responseAPI = await fetchWrapper('/api/login/google', {
      method: 'POST',
      data
    });

    if (responseAPI.returnData.status === 200) {
      const data = await responseAPI.returnData.json();
      clientCookieSet(data.access_token, data.refresh_token, true);
      console.log(window.location.pathname);

      router.push('/onboarding/profile');
    } else {
      try {
        const msg = await response?.json();
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
          clientId='698856264513-b8rl7o427e166fqp5rcu3hm6vqfkv212.apps.googleusercontent.com'
          render={(renderProps) => (
            <GoogleButton
              content='Signup with Google'
              renderProps={renderProps}
            />
          )}
          buttonText='Login'
          onSuccess={positiveResponseGoogle}
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
  const pageStatus = await fetchWrapper(process.env.NEXT_PUBLIC_BASE_CMS, {
    pageType: "pages.AuthPage"
  });

  let pageData;
  if (pageStatus.returnData.status === 200) {
    const pageTemp = await pageStatus.returnData.json();
    pageData = await pageFilter(pageTemp, "signup");
  }

  return {
    props: { pageData: pageData || null },
  };
}

export default Signup;
