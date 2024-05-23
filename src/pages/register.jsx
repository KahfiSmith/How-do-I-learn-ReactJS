import { Link } from "react-router-dom";
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const RegisterPage = () => {
  return (
    <>
      <div className="bg-primary text-color">
        <AuthLayouts title="Register">
          <FormRegister />
          <p className="mt-5 text-sm text-center">
            Have an account yet?{" "}
            <Link to="/login" className="font-bold">
              Sign In
            </Link>
          </p>
        </AuthLayouts>
      </div>
    </>
  );
};

export default RegisterPage;
