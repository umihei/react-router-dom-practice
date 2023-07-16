import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const history = useHistory();
  const { state } = useLocation();
  const onClickBack = () => history.goBack();
  return (
    <div>
      <h1> Page1 DetailA </h1>
      <br />
      <button onClick={onClickBack}>Back</button>
    </div>
  );
};
