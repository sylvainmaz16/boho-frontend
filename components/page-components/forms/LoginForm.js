import { useState } from "react";
import AuthInputs from "./components/AuthInputs";
import { useRouter } from "next/router";
import BrownSubmit from "../../buttons/BrownSubmit";
import { loginValidation } from "../../../services/validation/authValidation";
import { login } from "../../../services/cms/auth";
import { clientCookieSet } from "../../../services/cookies";

const LoginForm = ({ setError, setVisible }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const router = useRouter();

  const onSubmitForm = async (event) => {
    event.preventDefault();

    const data = {
      // untested
      username: email,
      email: email,
      password: password,
    };

    try {
      const isValid = loginValidation(data);
      if (isValid.error) {
        setError(isValid.error);
        setVisible(true);
      } else if (isValid.success) {
        const response = await login(data);
        if (response.status === 200) {
          const data = await response.json();
          console.log(data);
          clientCookieSet({
            access: data.access_token,
            refresh: data.refresh_token,
            isLoggedIn: true,
          });

          router.push("/dashboard");
        } else {
          const msg = await response.json();
          console.log(msg);
          setError(msg.error);
          setVisible(true);
        }
      }
    } catch (err) {
      setError(err.error || "Oops, something went wrong.");
      setVisible(true);
    }
  };
  return (
    <form>
      <AuthInputs
        label="Email"
        value={email}
        setValue={setEmail}
        type="text"
        imageAlt="mail icon"
        imageURL="https://res.cloudinary.com/dkceblkn7/image/upload/v1639793400/boho%20vendor%20assets/001-email_1_lu1lam.svg"
        htmlFor="email"
        placeholder="Email"
        pattern={new RegExp(/^\S+@\S+$/i)}
      />
      <AuthInputs
        label="Password"
        value={password}
        setValue={setPassword}
        type="password"
        imageAlt="lock icon"
        imageURL="https://res.cloudinary.com/dkceblkn7/image/upload/v1640912347/boho%20vendor%20assets/Lock_1_bb2g7m.svg"
        htmlFor="password1"
        placeholder="Password"
        pattern={new RegExp(/^.*/i)}
      />
      <BrownSubmit
        paddingUpDown={20}
        paddingLeftRight={211}
        type="submit"
        content="Login"
        onSubmit={onSubmitForm}
      />
    </form>
  );
};

export default LoginForm;
