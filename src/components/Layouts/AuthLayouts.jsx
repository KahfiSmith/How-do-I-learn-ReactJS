const AuthLayouts = (props) => {
  const { title, children } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-md">
        <h1 className="font-medium text-3xl text-blue-600 mb-1">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, please enter your details
        </p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayouts;
