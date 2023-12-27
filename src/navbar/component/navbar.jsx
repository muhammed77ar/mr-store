import { useState } from "react";
import { NavbarLinkWrapper, NavbarWrapper, StyledIcon, StyledIconX, StyledNavLink } from "../styledComponent/navbarStyle";
import Logo from "./logo";

export default function Navbar(){
  const [active, setActive] = useState(false)
  const toggelActive = () =>{
    setActive(!active)
  }
  const link = [
    {page:"Home", href:"/"},
    {page:"Find professional", href:"/findProfessional"},
    {page:"Find work", href:"/findWork"},
    {page:"Log In", href:"/login"},
    {page:"Sign Up", href:"/signUp"},
    {page:"Post a Service", href:"/postService"}
  ]
  return <>
  <NavbarWrapper>
    <Logo />
    {active ? <StyledIconX onClick={toggelActive} /> : <StyledIcon onClick={toggelActive} />}
    <NavbarLinkWrapper active={active}>
      {link.map((link) =>(
        <StyledNavLink activeClassName="active" key={link.page} to={link.href}> 
          {link.page}
        </StyledNavLink>
      ))}
    </NavbarLinkWrapper>
  </NavbarWrapper>
  </>
}
