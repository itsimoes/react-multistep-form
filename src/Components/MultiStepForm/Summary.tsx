import React from "react";
import styled from "styled-components";

const StyledPlanBox = styled.div`
  width: 100%;
  background-color: hsl(231, 11%, 86%);
  border: 2px solid hsl(231, 11%, 86%); //hsl(231, 11%, 86%)
  border-radius: 8px;
`
const Summary = () => {
  return (
    <>
      <h1>Finishing up</h1>
      <p>Double check everything looks OK before confirming.</p>
      <br />
      <StyledPlanBox>
        <div>aaaa</div>
        <div>aaaa</div>
        <div>aaaa</div>
        <div>aaaa</div>
        <div>aaaa</div>    
      </StyledPlanBox>
    </>
  );
};

export default Summary;
