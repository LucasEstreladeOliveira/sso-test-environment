import styled from 'styled-components'

const StyledButton = styled.div`
    width: fit-content;
    margin-left: auto;
    margin-right: 20px;
    margin-top: -30px;

    .login-button {
      background-color: #9173c7;
      padding: 10px 20px;
      border-radius: 20px;
      font-weight: bold;
      color: white;
      cursor: pointer;
    }
    .logout-button {
      background-color: red;
      padding: 10px 20px;
      border-radius: 20px;
      font-weight: bold;
      color: white;
      cursor: pointer;
    }
`;

function LoginLogoutButton(props) {

  return (
    <StyledButton>
      {
        props.isLogin ? 
          <div className="login-button" onClick={() => props.login()}>
            Login
          </div>
        :
          <div className="logout-button" onClick={() => props.logout()}>
            Logout
          </div>
      }
    </StyledButton>
  );
}
export default LoginLogoutButton;
