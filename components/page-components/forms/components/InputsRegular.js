const InputsRegular = ({
  label,
  value,
  setValue,
  type,
  htmlFor,
  placeholder,
}) => {
  return (
    <div className="inputContainer input__regular">
      <label htmlFor={htmlFor} className="input__regularLabel inputLabel">
        {label}
      </label>
      <input
        className="input"
        type={type}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputsRegular;
