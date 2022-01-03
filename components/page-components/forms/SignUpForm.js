import { useState } from "react";
import AuthInputs from "./components/AuthInputs";
import CheckboxRegular from "./components/CheckboxRegular";
import CheckboxRegularPrivacy from "./components/CheckboxRegularPrivacy";
import BrownSubmit from "../../buttons/BrownSubmit";
import { signupValidation } from "../../../services/validation/authValidation";
import { useRouter } from "next/router";
import { clientCookieSet } from "../../../services/cookies";
import { signup } from "../../../services/cms/auth";

// const SignupForm = ({ setError, setVisible }) => {
const SignupForm = ({ setError, setVisible }) => {
  //redux learning only ^

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password1, setPassword1] = useState();
  const [password2, setPassword2] = useState();
  const [newsletter, setNewsletter] = useState(false);
  const [privacy, setPrivacy] = useState(false);

  const router = useRouter();

  const onSubmitForm = async (event) => {
    event.preventDefault();

    const fullData = {
      first_name: firstName,
      last_name: lastName,
      username: email,
      email: email,
      phone: phone,
      password1: password1,
      password2: password2,
      newsletter: newsletter,
      privacy: privacy,
    };

    // try {
    const isValid = signupValidation(fullData);
    if (isValid.error) {
      setError(isValid.error);
      setVisible(true);
    } else if (isValid.success) {
      const response = await signup(fullData);
      // const data = await response.json();

      if (response.returnData.status === 201) {
        const data = await response.returnData.json();
        console.log(data);
        console.log(data.refresh_token);
        clientCookieSet(data.access_token, data.refresh_token, true);

        router.push("/onboarding/profile");
      } else {
        try {
          const msg = await response?.json();
          setError(msg?.error);
          setVisible(true);
        } catch (err) {
          setError("Oops, something went wrong.");
          setVisible(true);
        }
      }
    }
    // } catch (err) {
    //   setError(err.error || "Oops, something went wrong.");
    //   setVisible(true);
    // }
  };

  return (
    <form className="auth__form">
      <AuthInputs
        label="First Name"
        value={firstName}
        setValue={setFirstName}
        type="text"
        imageAlt="person icon"
        imageURL="https://res.cloudinary.com/dkceblkn7/image/upload/v1640912485/boho%20vendor%20assets/Group_284_1_n3b6wa.svg"
        htmlFor="first_name"
        placeholder="First name"
        pattern={new RegExp(/^.*/i)}
      />
      <AuthInputs
        label="Last Name"
        value={lastName}
        setValue={setLastName}
        type="text"
        imageAlt="person icon"
        imageURL="https://res.cloudinary.com/dkceblkn7/image/upload/v1640912485/boho%20vendor%20assets/Group_284_1_n3b6wa.svg"
        htmlFor="last_name"
        placeholder="Last name"
        pattern={new RegExp(/^.*/i)}
      />
      <AuthInputs
        label="Phone Number"
        value={phone}
        setValue={setPhone}
        type="tel"
        imageAlt="phone icon"
        imageURL="https://res.cloudinary.com/dkceblkn7/image/upload/v1640912519/boho%20vendor%20assets/Vector_4_aozhvk.svg"
        htmlFor="phone"
        placeholder="123-123-1234"
        pattern={new RegExp(/^\(?\d{3}\)?-? *\d{3}-? *-?\d{4}/i)}
      />
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
        value={password1}
        setValue={setPassword1}
        type="password"
        imageAlt="lock icon"
        imageURL="https://res.cloudinary.com/dkceblkn7/image/upload/v1640912347/boho%20vendor%20assets/Lock_1_bb2g7m.svg"
        htmlFor="password1"
        placeholder="Password"
        pattern={
          new RegExp(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i
          )
        }
      />
      <AuthInputs
        label="Confirm Password"
        value={password2}
        setValue={setPassword2}
        type="password"
        imageAlt="lock icon"
        imageURL="https://res.cloudinary.com/dkceblkn7/image/upload/v1640912347/boho%20vendor%20assets/Lock_1_bb2g7m.svg"
        htmlFor="password2"
        placeholder="Confirm Password"
        pattern={
          new RegExp(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i
          )
        }
      />
      <CheckboxRegularPrivacy
        htmlFor="privacy"
        value={privacy}
        setValue={setPrivacy}
      />

      <CheckboxRegular
        value={newsletter}
        setValue={setNewsletter}
        content="Send me the latest news, and upcoming events"
      />
      <BrownSubmit
        paddingUpDown={20}
        paddingLeftRight={147}
        type="submit"
        content="Create Account"
        onSubmit={onSubmitForm}
      />
    </form>
  );
};

export default SignupForm;
