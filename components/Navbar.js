import styled from 'styled-components'
import Link from 'next/link'

const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Navbar = styled.div`
  margin: 0;
  padding-top: 20px;

  .one:hover ~ hr {
    margin-left: 0px;
  }

  .two:hover ~ hr {
    margin-left: 120px;
  }

  .three:hover ~ hr {
    margin-left: 240px;
  }

  .four:hover ~ hr {
    margin-left: 360px;
  }
`

const NavItemWrapper = styled.ul`
  padding: 0;
`

const NavItem = styled.li`
  display: inline;
  text-align: center;
`
const DropDown = styled.div`
  display: inline;
  text-align: center;
  overflow: hidden;
  position: relative;

  :hover > div {
    display: block;
  }
`

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  left: 0;
  top: 30px;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  a:hover {
    background-color: #ddd;
  }
`

const NavLink = styled.a`
  display: inline-block;
  width: 120px;
  text-align: center;
  padding: 0.75rem 0;
  margin: 0;
  text-decoration: none;
  color: #333;
  font-size: 20px;
`

const Ruler = styled.hr`
  height: 0.25rem;
  width: 120px;
  margin: 0;
  background: #ff3d4a;
  border: none;
  transition: 0.3s ease-in-out;
  position: relative;
  top: -60px;
  margin-left: ${(props) => props.dist};
`

export default ({ dist }) => {
  return (
    <NavbarContainer>
      <Navbar>
        <NavItemWrapper>
          <NavItem className="one">
            <Link href="/">
              <NavLink>Home</NavLink>
            </Link>
          </NavItem>
          <NavItem className="two">
            <Link href="/about">
              <NavLink>About Us</NavLink>
            </Link>
          </NavItem>
          <DropDown className="three">
            <NavLink href="#">The Market</NavLink>
            <DropDownContent>
              <a href="#">Competitors</a>
              <a href="#">Users</a>
            </DropDownContent>
          </DropDown>
          <DropDown className="four">
            <NavLink href="#">Our Business</NavLink>
            <DropDownContent>
              <a href="#">Business Model Canvas</a>
              <a href="#">Marketing Plan</a>
              <a href="#">Business Cost Structure</a>
            </DropDownContent>
          </DropDown>
          <Ruler dist={dist} />
        </NavItemWrapper>
      </Navbar>
    </NavbarContainer>
  )
}
