import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const LoginPage = () => {
  return (
    <AuthLayouts title="Login">
      <FormLogin />
      <p className="mt-5 text-sm text-center">
      Don&#39;t have an account yet?{" "}
        <Link to="/register" className="text-blue-600 font-bold">
          Sign Up
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default LoginPage;
