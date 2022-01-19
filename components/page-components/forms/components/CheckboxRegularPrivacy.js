import Link from "next/link";
import { CheckBoxIcon } from "@/icons/*";

const CheckboxRegular = ({ value, setValue, htmlFor }) => {
  return (
    <div className="checkbox__regularContainer">
      <label
        className="checkbox__regularLabel checkbox__privacy"
        htmlFor={htmlFor}
      >
        {value ? (
          <CheckBoxIcon
            className="icon--xs checkbox--checked"
            color="white"
            onClick={() => setValue(!value)}
          />
        ) : (
          <CheckBoxIcon
            className="icon--xs checkbox--unchecked"
            color="white"
            onClick={() => setValue(!value)}
          />
        )}

        <input
          name="newsletter"
          className="checkbox__regularCheckbox"
          type="checkbox"
          required
        />
        <p>
          I agree to the <Link href="/privacy-policy">privacy policy</Link> and{" "}
          <Link href="/terms-and-conditions">terms and conditions</Link>
        </p>
      </label>
    </div>
  );
};

export default CheckboxRegular;
