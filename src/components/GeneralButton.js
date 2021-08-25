import React from "react";
import styled from "styled-components";

// const { PRIMARY_COLOR: COLOR } = process.env;


export default function Button({ value = "Submit", isPrimary, type }) {

  const Button = styled.button`
    border-width: 0;
    height: 40px;
    border-radius: 5px;
    width: 100%;
    font-weight: bold;
    padding: 0 20px;
  `;

  const ButtonPrimary = styled(Button)`
    color: white;
    background-color: #0ddb89;
    box-shadow: 0 5px 5px rgba(13, 219, 137, 0.5);
  `;

  const ButtonSecondary = styled(Button)`
    background-color: #ffffff;
    border: 1px solid #0ddb89;
    color: #0ddb89;
    // box-shadow: 0 5px 5px rgba(13, 219, 137, 0.5);
  `;

  return (
    <div>
      {isPrimary ? (

        <ButtonPrimary type={type} >{value}</ButtonPrimary>

      ) : (
        <ButtonSecondary>{value}</ButtonSecondary>
      )}
    </div>
  );
}
