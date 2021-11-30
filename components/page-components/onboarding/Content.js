const Content = ({ header, content }) => {
  return (
    <div className="onboarding__content">
      <h1>{header}</h1>
      <p>{content}</p>
    </div>
  );
};

export default Content;
