import React, { useState } from 'react'
import { LogoutFromPublisher, LoginFromPublisher, startArenaSSO } from '../../utils/loginHelper.js'
import LoginLogoutButton from '../Atoms/LoginLogoutButton'
import Steps from '../Molecules/Steps'

// This organism will test the case when the user triggers the login from an arena widget.
// The expected is that it triggers the login from the publisher side, so the authentication is realized from the publisher and then the user info is sent to arena authenticate it.

function Test2() {
  
  const stepsConstructor = [
    {
      id: 0,
      title: 'Realizar o logout pelo publisher',
      checked: false,
    },
    {
      id: 1,
      title: 'Realizar o login pelo publisher',
      checked: false,
    },
    {
      id: 2,
      title: 'Realizar o logout pelo widget arena',
      checked: false,
    },
    {
      id: 3,
      title: 'Realizar o login pelo widget arena',
      checked: false,
    },
  ]
  
  const [steps, setSteps] = useState(stepsConstructor)
  const [firstAccess, setFirstAccess] = useState(true)
  const [isLogin, setIsLogin] = useState(false)

  if (window.arenaSSO) { 
    if(firstAccess) {
      LoginFromPublisher()
      setFirstAccess(false)
    }

    startArenaSSO(
      {
        onSignin: () => LoginWidget(),
        onSignout: () => LogoutWidget(),
      }
    );
  } else { 
    document.addEventListener(
    'arena-im-api-ready', 
    startArenaSSO, 
    false
    ); 
  }

  function LoginWidget() {
    setSteps(steps.map(step => {
      if(step.id === 3){
        step.checked = true;
      }
      return step
    }))
    setIsLogin(false)
  }
  
  
  function LoginPublisher() {
    LoginFromPublisher();
    setSteps(steps.map(step => {
      if(step.id === 1){
        step.checked = true;
      }
      return step
    }))
    setIsLogin(false)
  }
  
  function LogoutWidget() {
    setSteps(steps.map(step => {
      if(step.id === 2){
        step.checked = true;
      }
      return step
    }))
    setIsLogin(true)
  }
  
  function LogoutPublisher() {
    LogoutFromPublisher();
    setSteps(steps.map(step => {
      if(step.id === 0){
        step.checked = true;
      }
      return step
    }))
    setIsLogin(true)
  }

  return (
    <div>
      <LoginLogoutButton isLogin={isLogin} login={LoginPublisher} logout={LogoutPublisher}/>
      <Steps steps={steps} />
    </div>
  )

}

export default Test2