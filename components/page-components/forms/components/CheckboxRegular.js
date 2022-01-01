import Image from "next/image";

const CheckboxRegular = ({
  value,
  setValue,
  content,
  htmlFor,
  required = false,
}) => {
  return (
    <div className="checkbox__regularContainer">
      <label className="checkbox__regularLabel">
        {value ? (
          <Image
            src="https://res.cloudinary.com/dkceblkn7/image/upload/v1640912659/boho%20vendor%20assets/Group_157_ajnkod.svg"
            alt="checked"
            width="32"
            height="32"
          />
        ) : (
          <Image
            src="https://res.cloudinary.com/dkceblkn7/image/upload/v1640912717/boho%20vendor%20assets/Group_157_1_ivsyso.svg"
            alt="not checked"
            width="32"
            height="32"
          />
        )}

        <input
          name="newsletter"
          className="checkbox__regularCheckbox"
          type="checkbox"
          onClick={() => setValue(!value)}
          required={required}
        />
        <p>{content}</p>
      </label>
    </div>
  );
};

export default CheckboxRegular;
