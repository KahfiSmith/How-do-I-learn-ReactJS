const Button = (props) => {
    const { children, variant = "bg-black", onClick = () => {}, type="button" } = props;
    return (
        <button
            className={`py-2 px-6 font-semibold rounded-md ${variant} text-white`} type={type} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
