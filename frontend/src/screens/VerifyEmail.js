import { useContext, useEffect, useState } from "react";
import {useSearchParams, useNavigate} from "react-router-dom";
// import {Alert, CircularProgress} from "@mui/material"
import { AuthContext } from "../auth";
import { baseUrl, postRequest } from "../utils";

const VerifyEmail = () => {

    const [user, updateUser] = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const emailToken = searchParams.get("emailToken");
    console.log(user);
    console.log("emailToken", emailToken)
    useEffect(() => {
        (async () => {
            if(user?.isVerified){
                setTimeout(() => {
                    return navigate("/");
                }, 3000);
            }
            else{
                if(emailToken){
                    setIsLoading(true);
                    const response =    await postRequest(`${baseUrl}/users/verify-email`,
                        JSON.stringify({emailToken})
                    );
                    setIsLoading(false);
                    console.log("res", response);
                    if(response.error){
                        return setError(response);
                    }
                    updateUser(response);
                }
            }
        })();
    }, [emailToken, user])



    return(
        <div>
            {isLoading ? (
                <div>...Loading</div>
            ) : (
                <div>
                    {user?.isVerified ? (<div>{alert("Email is verified!")}</div>) : 
                    (<div>{error.error ? (<div>{alert("Error")}</div>) : null}
                    </div>)}
                </div>
            )}
        </div>
    )
}
export default VerifyEmail