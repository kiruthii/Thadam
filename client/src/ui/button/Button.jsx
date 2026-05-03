const Button = ({
  type,
  onClick,
  buttonText,
  className,
  icon,
  form,
  disabled,
  style
}) => {
  return (
    <div>
      <button
        className={className}
        type={type}
        onClick={onClick}
        disabled={disabled}
        form={form}
        style={style}
      >
        {icon}
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
