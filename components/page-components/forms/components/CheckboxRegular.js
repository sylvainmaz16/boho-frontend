import { CheckBoxIcon } from "@/icons/*";

const CheckboxRegular = ({ value, setValue, content, htmlFor }) => {
  return (
    <div className="checkbox__regularContainer">
      <label className="checkbox__regularLabel" htmlFor={htmlFor}>
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
        <p>{content}</p>
      </label>
    </div>
  );
};

export default CheckboxRegular;
