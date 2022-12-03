import { GoogleLogout } from 'react-google-login';

const clientid = "419936028232-r3qh3k1l57qcpcfrlktibbibsqvfka67.apps.googleusercontent.com";

function Logout(){

    const onSuccess = () => {
        console.log("Log out successfull!");
    }

    return(
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientid}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}>
            </GoogleLogout>
        </div>
    )
}

export default Logout