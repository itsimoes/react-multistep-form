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

//assets
import SidebarBg from "../../Assets/images/bg-sidebar-desktop.svg";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 90px;
  padding-right: 90px;
`;

const StyledSidebar = styled.div`
  width: 30%;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  background-image: url(${SidebarBg});
  text-transform: uppercase;
`;
const StyledRightWrapper = styled.div`
  width: 70%;
`;

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
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--form_background);
  color: var(--form_color);
  width: 80%;
  height: 570px;
  border-radius: 10px;
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

  &:hover {
    background-color: var(--button_color_hover);
  }
`;

const StyledBackButton = styled(Button)`
  background-color: rgba(0,0,0,0.0);
  color: var(--primary_gray);
  order: 2;

  &:hover {
    color: var(--back_button_color);
    background-color: rgba(0,0,0,0.0);
  }
`

const formComponents = [<YourInfo />, <SelectPlan />, <AddOns />, <Summary />];

const MultiStepForm = () => {
  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(formComponents);

  return (
    <Wrapper>
      <StyledSidebar className="left-wrapper">
        <StyledIndexWrapper>
          <StyledNumber>1</StyledNumber>
          <div>
            <div className="styled_step">step 1</div>
            <div>your info</div>
          </div>
        </StyledIndexWrapper>
        <StyledIndexWrapper>
          <StyledNumber>2</StyledNumber>
          <div>
            <div className="styled_step">step 2</div>
            <div>select plan</div>
          </div>
        </StyledIndexWrapper>
        <StyledIndexWrapper>
          <StyledNumber>3</StyledNumber>
          <div>
            <div className="styled_step">step 3</div>
            <div>add-ons</div>
          </div>
        </StyledIndexWrapper>
        <StyledIndexWrapper>
          <StyledNumber>4</StyledNumber>
          <div>
            <div className="styled_step">step 4</div>
            <div>summary</div>
          </div>
        </StyledIndexWrapper>
      </StyledSidebar>
      <StyledRightWrapper>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <FormContainer>
            {/* Steps */}
            {currentComponent}
          </FormContainer>
          <StyledDiv>
            {!isFirstStep && (
              <StyledBackButton
                type="button"
                value=""
                onClick={() => changeStep(currentStep - 1)}
              >
                Go Back
              </StyledBackButton>
            )}
            {!isLastStep ? (
              <Button type="submit" value="">
                Next Step
              </Button>
            ) : (
              <Button type="button" value="">
                Confirm
              </Button>
            )}
          </StyledDiv>
        </form>
      </StyledRightWrapper>
    </Wrapper>
  );
};

export default MultiStepForm;
