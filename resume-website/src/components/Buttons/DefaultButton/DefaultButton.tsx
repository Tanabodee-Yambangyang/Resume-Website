import './DefaultButton.css'
import { ButtonProps } from "../../../interfaces/Buttons";

const DefaultButton: React.FC<ButtonProps> = ({ text, onClick, className }) => {
    return (
        <button className={`default-button ${className}`} onClick={onClick}>
            {text}
        </button>
    );
};
  
export default DefaultButton;