import React from "react";
import styled from "styled-components";

const YourInfo = () => {
  const StyledInput = styled.input`
    display: block;
    padding-top: 10px;
    padding-bottom: 10px;

    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
  `;

  return (
    <>
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>
      <label htmlFor="name">Name</label>
      <br />
      <StyledInput
        type="text"
        name="name"
        placeholder="Type your name here..."
      />
      <label htmlFor="name">Email Address</label>
      <br />
      <StyledInput
        type="text"
        name="email"
        placeholder="Type your email here..."
      />
      <label htmlFor="phone">Phone Number</label>
      <br />
      <StyledInput
        type="tel"
        name="phone"
        pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}"
        // required
        placeholder="ex.: +55 00 00000-0000"
      />
    </>
  );
};

export default YourInfo;
