import { useState } from "react";
import AuthInputs from "./AuthInputs";
import BrownSubmit from "../../buttons/BrownSubmit";
import { migrateValidation } from "../../../services/validation/authValidation";
import { useRouter } from "next/router";
import { clientCookieSet } from "../../../services/cookies";
import { migrate } from "../../../services/cms/auth";

const MigrateForm = ({ setError, setVisible }) => {
  const [password1, setPassword1] = useState();
  const [password2, setPassword2] = useState();

  const router = useRouter();
  const { migrate_jwt } = router.query;

  const onSubmitForm = async (event) => {
    event.preventDefault();

    const data = {
      password1: password1,
      password2: password2,
      token: migrate_jwt,
    };

    try {
      const isValid = migrateValidation(data);
      if (isValid.error) {
        setError(isValid.error);
        setVisible(true);
      } else if (isValid.success) {
        const response = await migrate(data);
        if (response.status === 201) {
          const data = await response.json();
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
    } catch (err) {
      setError(err.error || "Oops, something went wrong.");
      setVisible(true);
    }
  };

  return (
    <form>
      <AuthInputs
        label="Password"
        value={password1}
        setValue={setPassword1}
        type="password"
        imageAlt="lock icon"
        imageURL="https://res.cloudinary.com/dkceblkn7/image/upload/v1638001716/boho-vendor-assets/Lock_povifq.svg"
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
        imageURL="https://res.cloudinary.com/dkceblkn7/image/upload/v1638001716/boho-vendor-assets/Lock_povifq.svg"
        htmlFor="password2"
        placeholder="Confirm Password"
        pattern={
          new RegExp(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i
          )
        }
      />
      <BrownSubmit
        paddingUpDown={20}
        paddingLeftRight={147}
        type="submit"
        content="Change Password"
        onSubmit={onSubmitForm}
      />
    </form>
  );
};

export default MigrateForm;
