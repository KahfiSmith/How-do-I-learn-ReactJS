import { Link } from "react-router-dom";
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register">
      <FormRegister/>
      <p className="mt-5 text-sm text-center">
        Have an account yet?{" "}
        <Link to="/Login" className="text-blue-600 font-bold">
          Sign In
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default RegisterPage;
