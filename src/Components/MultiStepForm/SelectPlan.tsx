import React from "react";
import styled from "styled-components";

//images
import { ReactComponent as ArcadeIcon } from "../../Assets/images/icon-arcade.svg";
import { ReactComponent as AdvancedIcon } from "../../Assets/images/icon-advanced.svg";
import { ReactComponent as ProIcon } from "../../Assets/images/icon-pro.svg";

const StyledPlanWrapper = styled.div`
  display: flex;

  #plan_pro {
    margin-right: 0;
  }
`;

const StyledPlanBox = styled.button`
  width: 130px;
  height: 150px;
  border: 2px solid hsl(231, 11%, 86%);
  border-radius: 8px;
  margin-right: 20px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--plan_card_bg);

  .plan_name {
    color: var(--primary_blue);
  }

  .plan_price {
    color: var(--primary_gray);
    font-size: 14px;
    margin-top: 5px;
  }

  .IconStyle {
    border: 2px solid white;
    border-radius: 50%;
  }

  &:hover {
    background-color: var(--plan_card_bg_hover);
  }
  
  &:focus {
    background-color: var(--plan_card_bg_hover);
  }
`;

const SelectPlan = () => {

  function HandleButton(e: any) {
    e.preventDefault();    
  }

  return (
    <>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <br />
      <StyledPlanWrapper>
        <StyledPlanBox className="plan_button" onClick={(e) => HandleButton(e)}>
          <ArcadeIcon className="IconStyle" />
          <div>
            <div className="plan_name">Arcade</div>
            <div className="plan_price">$ 9/mo</div>
          </div>
        </StyledPlanBox>
        <StyledPlanBox className="plan_button" onClick={(e) => HandleButton(e)}>
          <AdvancedIcon className="IconStyle" />
          <div>
            <div className="plan_name">Advanced</div>
            <div className="plan_price">$ 12/mo</div>
          </div>
        </StyledPlanBox>
        <StyledPlanBox className="plan_button" id="plan_pro" onClick={(e) => HandleButton(e)}>
          <ProIcon className="IconStyle" />
          <div>
            <div className="plan_name">Pro</div>
            <div className="plan_price">$ 15/mo</div>
          </div>
        </StyledPlanBox>        
      </StyledPlanWrapper>
    </>
  );
};

export default SelectPlan;
