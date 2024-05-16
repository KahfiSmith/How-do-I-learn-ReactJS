import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem('email', event.target.email.value);
    localStorage.setItem('password', event.target.password.value);
    console.log("Berhasil Login");
    window.location.href = "/product"
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        type="email"
        name="email"
        placeholder="example@gmail.com"
        label="Email"
      />
      <InputForm
        type="password"
        name="password"
        placeholder="********"
        label="Password"
      />
      <Button variant="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
