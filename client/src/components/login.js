import socialMediaAuth from "../service/auth";
import { googleProvider } from "../service/auth-method";

const Login = () => {
  //login function
  const login = async (provider) => {
    const res = await socialMediaAuth(provider);
    if (res.email) {
      const user = {
        email: res.email
      }
      console.log(user);
    }
  }
  return (
    <>
      <h1>hi</h1>
      <button
        onClick={() => login(googleProvider)}
      > google login</button>
    </>
  )
}

export default Login;