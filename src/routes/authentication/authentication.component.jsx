import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import './authentication.styles.scss'

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
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
