import React from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  display: flex;
  transition: all 0.3s linear;
  justify-content: right;
  li {
    padding: 20px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    background-color: gray;
    position:fixed;
    top:0;
    right:0;
    height:100vh;
    width:250px;
  }
`;

const Navbar = () => {
  return (
    <List>
      <li>Home</li>
      <li>Github</li>
      <li>buy me a coffee</li>
      <li>Contact us</li>
    </List>
  );
};

export default Navbar;
<h1>Hello World</h1>;
