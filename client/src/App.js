import './App.css';
import LoginButton from "./components/login";
import LogoutButton from "./components/logout";
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const clientid = "419936028232-r3qh3k1l57qcpcfrlktibbibsqvfka67.apps.googleusercontent.com";

function App() {

  useEffect(() => {
    function start(){
      gapi.client.init({ 
        clientId: clientid, 
        scope:""
      })
    };

    gapi.load('client:auth2', start);
  });
  return (
    <div className="App">
     <LoginButton/>
     <LogoutButton/> 
    </div>
  );
}

export default App;
