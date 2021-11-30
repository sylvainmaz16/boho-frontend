const ErrorMessage = ({ content, visible, setVisible }) => {
  return (
    <div
      className={`wrapper-form ${visible ? "error-active" : "error-hidden"}`}
    >
      <div className="error__header">
        <p className="error__headerContent">An error has occured!</p>
        <img
          onClick={() => setVisible(false)}
          src="https://res.cloudinary.com/dkceblkn7/image/upload/v1638014101/boho-vendor-assets/Group_377_o4xiox.svg"
          alt="close the error message"
        />
      </div>
      <div className="error__content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
