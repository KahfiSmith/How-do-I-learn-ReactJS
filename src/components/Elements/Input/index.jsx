import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  const { label, name, type, placehoder } = props;
  return (
    <div className="mb-6">
      <Label hmtmlFor={name}>{label}</Label>
      <Input type={type} placehoder={placehoder} name={name} />
    </div>
  );
};

export default InputForm;
