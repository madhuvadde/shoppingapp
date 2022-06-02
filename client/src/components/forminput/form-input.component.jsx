import "./form-input.style.css";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="form-input">
      {label && (
        <label className="label-name">
          {label}
          <input className="inputField" {...otherProps} />
        </label>
      )}
    </div>
  );
};

export default FormInput;
