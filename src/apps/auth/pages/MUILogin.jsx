import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage } from "@toolpad/core/SignInPage";
import { useTheme } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { requestLogin } from "../authSlice";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { isTokenExpired } from "../../../utils/customTokenValidator";
import { useMemo, useState } from "react";

// preview-start
const providers = [{ id: "credentials", name: "Email and Password" }];
// preview-end

// we can use this or the same link for forgot password
// const SignUpLink = (() =>{
//   return (
//     <Link to={`/auth/register`}>Sign Up?</Link>
//   )
// })

export default function MUILogin() {
  const theme = useTheme();
  const accessToken = useSelector((state) => state.auth.accessToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signIn = async (provider, formData) => {
    console.log("accessToken", accessToken);
    const loginCredentials = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    console.log("loginCredentials", loginCredentials);
    const result = await dispatch(requestLogin(loginCredentials));
    if (result.meta.requestStatus === "fulfilled") {
      navigate("/");
    }
  };
  useEffect(() => {
    if (!isTokenExpired(accessToken)) {
      navigate("/");
    }
  }, [accessToken]);
  return (
    // preview-start

    <AppProvider theme={theme}>
      <SignInPage
        signIn={signIn}
        providers={providers}
        slotProps={{ emailField: { autoFocus: true } }}
      />
    </AppProvider>
    // preview-end
  );
}
