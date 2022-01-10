import Image from "next/image";

const AuthInputs = ({
  label,
  value,
  setValue,
  regex,
  type,
  imageURL,
  imageAlt,
  htmlFor,
  placeholder,
}) => {
  return (
    <div className="auth__inputContainer inputContainer">
      <label htmlFor={htmlFor} className="auth__inputLabel inputLabel">
        {label}
      </label>
      <div className="auth__inputIcon">
        <Image src={imageURL} alt={imageAlt} height="24" width="24" />
      </div>
      <input
        className="auth__input input"
        type={type}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder={placeholder}
        pattern={regex}
        required
      />
    </div>
  );
};

export default AuthInputs;
