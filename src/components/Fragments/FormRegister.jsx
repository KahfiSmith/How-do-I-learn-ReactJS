import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="#">
      <InputForm type="text" name="fullname" placeholder="insert your name here..." label="Fullname" />
      <InputForm type="email" name="email" placeholder="example@gmail.com" label="Email" />
      <InputForm type="password" name="password" placeholder="********" label="Password" />
      <InputForm type="password" name="confirmPassword" placeholder="********" label="Confirm Password" />
      <Button variant="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
