import Link from "next/link";

const CheckboxRegular = ({ value, setValue, htmlFor, required = false }) => {
  return (
    <div className="checkbox__regularContainer">
      <label className="checkbox__regularLabel">
        {value ? (
          <img
            src="https://res.cloudinary.com/dkceblkn7/image/upload/v1638008464/boho-vendor-assets/Checkbox_1_ttembo.svg"
            alt="checked"
          />
        ) : (
          <img
            src="https://res.cloudinary.com/dkceblkn7/image/upload/v1638008472/boho-vendor-assets/Rectangle_29_fbns5c.svg"
            alt="not checked"
          />
        )}

        <input
          name="newsletter"
          className="checkbox__regularCheckbox"
          type="checkbox"
          onClick={() => setValue(!value)}
          required={required}
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
