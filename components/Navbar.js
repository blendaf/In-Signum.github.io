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
    margin-left: 160px;
  }

  .three:hover ~ hr {
    margin-left: 320px;
  }

  .four:hover ~ hr {
    margin-left: 480px;
  }

  .five:hover ~ hr {
    margin-left: 640px;
  }
`

const NavItemWrapper = styled.ul`
  padding: 0;
`

const NavItem = styled.li`
  display: inline;
  text-align: center;
  cursor: pointer;
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
  width: 160px;
  text-align: center;
  padding: 0.75rem 0;
  margin: 0;
  text-decoration: none;
  color: #333;
  font-size: 20px;
`

const Ruler = styled.hr`
  height: 0.25rem;
  width: 160px;
  margin: 0;
  background: rgb(39, 49, 56);
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
            <Link href="/the-product">
              <NavLink>The Product</NavLink>
            </Link>
          </NavItem>
          <NavItem className="three">
            <Link href="/about">
              <NavLink>About Us</NavLink>
            </Link>
          </NavItem>
          <DropDown className="four">
            <NavLink href="#">The Market</NavLink>
            <DropDownContent>
              <Link href="/competitors">
                <a href="#">Competitors</a>
              </Link>

              <Link href="/users">
                <a href="#">Users</a>
              </Link>
              <Link href="/hearing-loss">
                <a href="#">The Levels of Hearing Loss</a>
              </Link>
            </DropDownContent>
          </DropDown>
          <DropDown className="five">
            <NavLink href="#">Our Business</NavLink>
            <DropDownContent>
              <Link href="/canvas">
                <a href="#">Our Business Model Canvas</a>
              </Link>
              <Link href="/marketing-plan">
                <a href="#">Marketing Plan</a>
              </Link>
              <Link href="/our-business">
                <a href="#">Business Cost Structure</a>
              </Link>
              <Link href="/our-business">
                <a href="#">How We Will Run The Venture</a>
              </Link>
            </DropDownContent>
          </DropDown>
          <Ruler dist={dist} />
        </NavItemWrapper>
      </Navbar>
    </NavbarContainer>
  )
}
