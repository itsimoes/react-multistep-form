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

const MultiStepForm = () => {
  const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: var(--body_background);
    width: 80%;
  `;
  const FormContainer = styled.div`
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left:   0px;
    padding-right: 50px;
  `;

  const Button = styled.button`
    background-color: navy;
    color: white;
    font-size: 20px;
    padding: 10px 60px;
    border-radius: 5px;
    margin: 10px 0px;
    cursor: pointer;
  `;

  const formComponents = [
    <YourInfo />,
    <SelectPlan />,
    <AddOns />,
    <Summary />,
  ];

  const { currentStep, currentComponent, changeStep } = useForm(formComponents);

  return (
    <Wrapper>
      <div>steps banner</div>
      <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
        <FormContainer>
          {/* Steps */}
          { currentComponent }
        </FormContainer>
        <Button type="button" value="" onClick={() => changeStep(currentStep - 1)}>
          Previous Step
        </Button>
        <Button type="submit" value="">
          Next Step
        </Button>
      </form>
    </Wrapper>
  );
};

export default MultiStepForm;
