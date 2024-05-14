import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form action="#">
      <InputForm type="email" name="email" placeholder="example@gmail.com" label="Email"/>
      <InputForm type="password" name="password" placeholder="********" label="Password"/>
      <Button variant="bg-blue-600 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
