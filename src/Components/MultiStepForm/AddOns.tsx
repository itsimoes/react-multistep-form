import React from "react";
import styled from "styled-components";

const StyledPlanWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledPlanBox = styled.label`
  width: 100%;
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
  &[data-active="true"] {
    background-color: var(--primary_gray);
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
  function DataToggle(id: string) {
    const card = document.getElementById(id);
    const inputBox = document.getElementById(`input${id}`) as HTMLInputElement;

    if (card !== null) {
      if (inputBox.checked === true) {
        console.log(card);
        card.style.backgroundColor = "var(--plan_card_bg_hover)";
      } else {
        card.style.backgroundColor = "var(--plan_card_bg)";
      }
    }
  }

  function deRequireCb() {
    // e.preventDefault();
    const inputBoxList = document.getElementsByName("addon_checkbox");
    // el = document.getElementsByClassName(elClass);

    var atLeastOneChecked = false; //at least one cb is checked
    for (let i = 0; i < inputBoxList.length; i++) {
      const inputBox = inputBoxList[i] as HTMLInputElement;

      if (inputBox.checked === true) {
        atLeastOneChecked = true;
      }
    }
    if (atLeastOneChecked === true) {
      for (let j = 0; j < inputBoxList.length; j++) {
        const inputBox = inputBoxList[j] as HTMLInputElement;
        inputBox.required = false;
      }
    } else {
      for (let j = 0; j < inputBoxList.length; j++) {
        const inputBox = inputBoxList[j] as HTMLInputElement;
        inputBox.required = true;        
      }
    }
  }

  // function addonSubmit() {
  //   // e.preventDefault();
  //   const inputBoxList = document.getElementsByName("addon_checkbox");

  //   // console.log({ inputBoxList });

  //   for (let i = 0; i < inputBoxList.length; i++) {
  //     const inp = inputBoxList[i] as HTMLInputElement;
  //     console.log(inp);
  //     if (inp.checked === true) {
  //       console.log("true");
  //     }
  //   }
  //   console.log("pick one");
  // }

  return (
    <>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <br />
      <StyledPlanWrapper>
        <ul>
          <StyledPlanBox
            id="1"
            onClick={() => [DataToggle("1"), deRequireCb()]}
          >
            <div className="left_block">
              <input
                id="input1"
                type="checkbox"
                name="addon_checkbox"
                required
                // onInvalid={(e) => {
                //   (e.target as HTMLInputElement).setCustomValidity(" ");
                // }}
                // oninput="setCustomValidity('')"
              />
              <div>
                <div>Online service</div>
                <div className="subtitle">Access to multiplayer games</div>
              </div>
            </div>
            <div className="price">+$1/mo</div>
          </StyledPlanBox>
          <StyledPlanBox
            id="2"
            onClick={() => [DataToggle("2"), deRequireCb()]}
          >
            <div className="left_block">
              <input
                id="input2"
                type="checkbox"
                name="addon_checkbox"
                required
              />
              <div>
                <div>Larger storage</div>
                <div className="subtitle">Extra 1TB of cloud save</div>
              </div>
            </div>
            <div className="price">+$2/mo</div>
          </StyledPlanBox>
          <StyledPlanBox
            id="3"
            onClick={() => [DataToggle("3"), deRequireCb()]}
          >
            <div className="left_block">
              <input
                id="input3"
                type="checkbox"
                name="addon_checkbox"
                required
              />
              <div>
                <div>Customizable profile</div>
                <div className="subtitle">Custom theme on yout profile</div>
              </div>
            </div>
            <div className="price">+$2/mo</div>
          </StyledPlanBox>
        </ul>
      </StyledPlanWrapper>
    </>
  );
};

export default AddOns;
