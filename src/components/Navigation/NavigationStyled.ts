import styled from "styled-components";

export const NavigationStyled = styled.nav`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      margin-right: 25px;
      &:last-child {
        margin-right: 0;
      }
      a {
        color: blue;
        text-decoration: underline;
        &:hover {
          text-decoration: none
        }
      }
      &.active {
        a {
          color: red;
          text-decoration: none;
        }
      }
    }
  }
`