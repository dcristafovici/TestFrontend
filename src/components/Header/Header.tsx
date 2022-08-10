import React from "react";
import Navigation from "../Navigation";
import { HeaderStyled } from "./HeaderStyled";

const Header:React.FC = () => (
  <HeaderStyled>
    <Navigation />
  </HeaderStyled>
)

export default Header;