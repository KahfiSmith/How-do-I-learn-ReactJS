import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";

const AuthLayouts = (props) => {
  const { title, children } = props;
  const {isDarkMode, setIsDarkMode} = useContext(DarkMode);
  {
    console.log(isDarkMode);
  }

  return (
    <div className={`flex justify-center min-h-screen items-center ${isDarkMode && "bg-slate-900"}`}>
      <div className="w-full max-w-md">
        <button className="absolute right-4 top-4 bg-secondary py-2 w-16 text-color rounded" onClick={() => setIsDarkMode(!isDarkMode)}>{isDarkMode ? "Light" : "Dark"}</button>
        <h1 className="font-medium text-3xl text-color mb-1">{title}</h1>
        <p className="font-medium text-color mb-8">
          Welcome, please enter your details
        </p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayouts;
