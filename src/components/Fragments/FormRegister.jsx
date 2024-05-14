import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="#">
      <InputForm type="text" name="fullname" placehoder="insert your name here..." label="Fullname" />
      <InputForm type="email" name="email" placehoder="example@gmail.com" label="Email" />
      <InputForm type="password" name="password" placehoder="********" label="Password" />
      <InputForm type="password" name="confirmPassword" placehoder="********" label="Confirm Password" />
      <Button variant="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
