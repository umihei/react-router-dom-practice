import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1> Page2 </h1>
      <Link to="/page2/120">Url parameter</Link>
      <br />
      <Link to="/page2/120?name=hogehoge">query parameter</Link>
    </div>
  );
};
