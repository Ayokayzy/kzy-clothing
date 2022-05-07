import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const Authentication = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await getRedirectResult(auth);
	// 		// const { user } = await signInWithGooglePopup();
  //     if(response) {
	// 			const userDocRef = await createUserDocumentFromAuth();
	// 		}
  //   };
	// 	fetchData()
  // }, []);


  return (
    <div>
      <h1>Sign in page</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
