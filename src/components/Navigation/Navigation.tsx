import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HeaderNavigationItems } from "../../routes/routes";
import { RoutesNavigationTypes } from "../../routes/types";
import { NavigationStyled } from "./NavigationStyled";

const Navigation:React.FC = () => {
  const { pathname } = useLocation();
  return (
    <NavigationStyled>
      <div className="content">
        <nav>
          <ul>
            {HeaderNavigationItems.map((item: RoutesNavigationTypes, index:number) => (
              <li key={index} className={pathname === item.path ? 'active' : ''}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </NavigationStyled>
  )
}

export default Navigation;
