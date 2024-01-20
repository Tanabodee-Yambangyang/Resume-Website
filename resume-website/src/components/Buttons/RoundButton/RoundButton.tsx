import './RoundButton.css'
import { RoundedButtonProps } from "../../../interfaces/Buttons";

const RoundButton: React.FC<RoundedButtonProps> = ({ image, className }) => {
    return (
        <button className={`default-round-button ${className}`}>
            <img src={image} alt="defaut image"/>
        </button>
    );
};
  
export default RoundButton;