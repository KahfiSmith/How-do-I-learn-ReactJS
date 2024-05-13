const Input = (props) => {
    const { type, placehoder, name } = props;
    return (
      <input
        type={type}
        className="text-sm border rounded-md w-full py-2 px-3 text-slate-700 placeholder: opacity-50"
        placeholder={placehoder}
        name={name}
      />
    );
  };
  
  export default Input;
  