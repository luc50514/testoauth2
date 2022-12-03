import { GoogleLogin } from 'react-google-login';

const clientid = "419936028232-r3qh3k1l57qcpcfrlktibbibsqvfka67.apps.googleusercontent.com";

function Login(){
    
    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("LOGIN FAILED res: ", res);
    }

    return (<div id="signInButton">
        <GoogleLogin 
            clientId={clientid}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}>
        </GoogleLogin>
    </div>
    )
}
export default Login;