const Label = (props) => {
  const { htmlFor, children } = props;
  return (
    <label
      htmlFor={htmlFor}
      className="block text-color text-sm font-medium mb-2">
      {children}
    </label>
  );
};

export default Label;
