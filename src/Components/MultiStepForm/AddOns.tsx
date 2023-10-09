import React from "react";
import styled from "styled-components";

const StyledPlanWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledPlanBox = styled.button`
  width: 100%;
  /* width: 130px; */
  height: 70px;
  border: 2px solid hsl(231, 11%, 86%);
  border-radius: 8px;
  margin-right: 20px;
  margin-bottom: 10px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--plan_card_bg);
  color: var(--form_color);

  &:hover {
    background-color: var(--plan_card_bg_hover);
  }

  .left_block {
    display: flex;
    text-align: start;

    input {
      margin-right: 20px;
    }

    .subtitle {
      color: var(--primary_gray);
    }
  }

  .price {
    color: var(--price_color);
  }
`;

const AddOns = () => {
  function HandleButton(e: any) {
    e.preventDefault();

    const allBtns = document.querySelectorAll<HTMLElement>(".btn");

    allBtns.forEach((btn) => {
      btn.addEventListener("click", function onClick() {
        if (btn.style.backgroundColor === "var(--plan_card_bg)")
          btn.style.backgroundColor = "var(--plan_card_bg_hover)";
        else btn.style.backgroundColor = "var(--plan_card_bg)";
      });
    });
  }

  return (
    <>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <br />
      <StyledPlanWrapper>
        <StyledPlanBox className="btn" onClick={(e) => HandleButton(e)}>
          <div className="left_block">
            <input type="checkbox" />
            <div>
              <div>Online service</div>
              <div className="subtitle">Access to multiplayer games</div>
            </div>
          </div>
          <div className="price">+$1/mo</div>
        </StyledPlanBox>
        <StyledPlanBox className="btn" onClick={(e) => HandleButton(e)}>
          <div className="left_block">
            <input type="checkbox" />
            <div>
              <div>Larger storage</div>
              <div className="subtitle">Extra 1TB of cloud save</div>
            </div>
          </div>
          <div className="price">+$2/mo</div>
        </StyledPlanBox>
        <StyledPlanBox className="btn" onClick={(e) => HandleButton(e)}>
          <div className="left_block">
            <input type="checkbox" />
            <div>
              <div>Customizable profile</div>
              <div className="subtitle">Custom theme on yout profile</div>
            </div>
          </div>
          <div className="price">+$2/mo</div>
        </StyledPlanBox>
      </StyledPlanWrapper>
    </>
  );
};

export default AddOns;
