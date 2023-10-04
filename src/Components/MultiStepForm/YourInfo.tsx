import React from "react";
import styled from "styled-components";


const StyledInput = styled.input`
    display: block;
    padding: 12px;
    margin-top: 5px;
    margin-bottom: 20px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: hsl(213, 96%, 18%);
  `;

const StyledText = styled(StyledInput).attrs({ type: 'text' })``
const StyledEmail = styled(StyledInput).attrs({ type: 'email' })``
const StyledPhone = styled(StyledInput).attrs({ type: 'tel', pattern:"[0-9]{2}-([0-9]){2}-[0-9]{5}-[0-9]{4}" })`` //pattern não funciona

const YourInfo = () => {
  
  return (
    <>
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <br />
      <label htmlFor="name">Name</label>
      <br />
      <StyledText
        name="name"
        placeholder="e.g. Type your name here..."
      />
      <label htmlFor="email">Email Address</label>
      <br />
      <StyledEmail 
        name="email"
        placeholder="e.g. Type your email here..."
      />
      <label htmlFor="phone">Phone Number</label>
      <br />
      <StyledPhone
        name="phone"            
        placeholder="e.g. +0 (00) 00000-0000"
      />
    </>
  );
};

export default YourInfo;
