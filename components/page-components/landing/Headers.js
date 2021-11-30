import { useEffect } from "react";

const Headers = ({ headers }) => {
  const eachHeader = headers?.map((header, index) => {
    return <h2 key={index}>{header.value}</h2>;
  });

  useEffect(() => {}, [headers]);

  return <div className="landing__header">{eachHeader}</div>;
};

export default Headers;
