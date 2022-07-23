import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import {AuthenticationContainer} from './authentication.styles.jsx'

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
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
