


export const Input = ({
  type,
  size,
  variant,
  rightLogo,
  rightLogoOnClick,placeholder,
  onChange
}) => {
  return (
    <div className="inputContainer">
      {/* Add Right Logo */}

      <img  onClick={()=>rightLogoOnClick} src={rightLogo} alt="" />
      <input placeholder={placeholder}  variant={variant} className={`input`} type={type} size={size} onChange={()=>onChange} />
    </div>
  );
};
