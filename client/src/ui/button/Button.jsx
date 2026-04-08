const Button = ({
  type,
  onClick,
  buttonText,
  className,
  icon,
  form,
  disabled,
}) => {
  return (
    <div>
      <button
        className={className}
        type={type}
        onClick={onClick}
        disabled={disabled}
        form={form}
      >
        {icon}
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
