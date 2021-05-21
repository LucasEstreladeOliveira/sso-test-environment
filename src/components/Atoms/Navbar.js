import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledNavbar = styled.div`
  display: flex;
  width: fit-content;
  margin: auto;

  a {
    background: #5021A6;
    margin: 10px;
    padding: 10px 20px;
    color: white;
    text-decoration: none;
    border-radius: 20px;
  }
`;

function Navbar() {

  return (
    <StyledNavbar>
      <Link to="/user-not-logged">User não logado</Link>
      <Link to="/user-logged">User logado</Link>
    </StyledNavbar>
  );
}
export default Navbar;
