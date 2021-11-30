const BrownButton = ({ paddingLeftRight, content, type, onSubmit }) => {
  return (
    <button
      onClick={onSubmit}
      type={type}
      className="button__brownSubmit button"
      style={{ padding: `20px ${paddingLeftRight}px` }}
      value={content}
    >
      {content}
    </button>
  );
};

export default BrownButton;
