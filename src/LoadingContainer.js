import { useState } from "react";
import { css } from "@emotion/react";
import ClipLoader from 'react-spinners/ClipLoader';

const override = css`
  display: block;
  margin: 40px auto;
  overflow:hidden
`;

const LoadingContainer = () => {
    let [color, setColor] = useState("rgb(200,200,200)");

  return (
    <div className="loading-container">
      <ClipLoader color={color} loading css={override} size={150} />
    </div>
  );
}

export default LoadingContainer
