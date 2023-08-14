import UIButton from "react-bootstrap/Button";

const Button = ({ children, ...otherProps }) => {
  return <UIButton {...otherProps}>{children}</UIButton>;
};

export default Button;
