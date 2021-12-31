const Banner = ({ content, visible }) => {
  return (
    <div
      className={`container banner ${
        visible ? "banner__active" : "banner__inactive"
      }`}
    >
      <p>{content}</p>
    </div>
  );
};

export default Banner;
