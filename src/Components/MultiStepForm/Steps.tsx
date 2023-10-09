import React from "react";
import styled from "styled-components";

const StyledIndexWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
  color: white;
  font-size: 15px;
  font-weight: 500;

  .styled_step {
    color: var(--primary_gray);
    font-size: 12px;
  }
`;

const StyledNumber = styled.div`
  width: 30px;
  height: 30px;
  margin: 10px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &[data-active="true"] {
    background-color: hsl(206, 94%, 87%);
    color: var(--primary_blue);
    border: none;
  }
`;

const Steps = ({ currentStep }: any) => {
  return (
    <>
      <StyledIndexWrapper>
        <StyledNumber data-active={currentStep === 0}>1</StyledNumber>
        <div>
          <div className="styled_step">step 1</div>
          <div>your info</div>
        </div>
      </StyledIndexWrapper>
      <StyledIndexWrapper>
        <StyledNumber data-active={currentStep === 1}>2</StyledNumber>
        <div>
          <div className="styled_step">step 2</div>
          <div>select plan</div>
        </div>
      </StyledIndexWrapper>
      <StyledIndexWrapper>
        <StyledNumber data-active={currentStep === 2}>3</StyledNumber>
        <div>
          <div className="styled_step">step 3</div>
          <div>add-ons</div>
        </div>
      </StyledIndexWrapper>
      <StyledIndexWrapper>
        <StyledNumber data-active={currentStep === 3}>4</StyledNumber>
        <div>
          <div className="styled_step">step 4</div>
          <div>summary</div>
        </div>
      </StyledIndexWrapper>
    </>
  );
};

export default Steps;
