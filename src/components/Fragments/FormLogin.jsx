import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const LoginForm = (props) => {
  return (
    <form action="#">
      <InputForm type="email" name="email" placehoder="example@gmail.com" label="Email" />
      <InputForm type="password" name="password" placehoder="********" label="Password" />
      <Button variant="bg-blue-600 w-full">Login</Button>
    </form>
  );
};

export default LoginForm;
