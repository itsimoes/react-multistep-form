import React from "react";
import "./style.scss";
import styled from "styled-components";

//Components
import YourInfo from "./YourInfo";
import SelectPlan from "./SelectPlan";
import AddOns from "./AddOns";
import Summary from "./Summary";

//hooks
import { useForm } from "../../hooks/useForm";

const StyledDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 90px;
  padding-right: 90px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--form_background);
  color: var(--form_color);
  width: 80%;
  border-radius: 2%;
`;
const FormContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 50px;
  padding-left: 90px;
  padding-right: 90px;
`;

const Button = styled.button`
  background-color: var(--button_bg_color);
  color: var(--button_color);
  font-size: 20px;
  padding: 10px 20px;
  border-radius: 8px;
  margin: 10px 0px;
  cursor: pointer;

/* CSS */

  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  outline: none;
  padding: 10px 16px;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`;

const formComponents = [
  <YourInfo />,
  <SelectPlan />,
  <AddOns />,
  <Summary />,
];

const MultiStepForm = () => {

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents);

  return (
    <Wrapper>
      <div>steps banner</div>
      <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
        <FormContainer>
          {/* Steps */}
          {currentComponent}
        </FormContainer>
        <StyledDiv>
        {!isFirstStep && (
          <Button
          type="button"
          value=""
          onClick={() => changeStep(currentStep - 1)}
        >
          Previous Step
        </Button>
        )}
        {!isLastStep ? (
          <Button type="submit" value="">
          Next Step
        </Button>
        ) : (
          <Button type="button" value="">
          Send
        </Button>
        )}
        </StyledDiv>
      </form>
    </Wrapper>
  );
};

export default MultiStepForm;
