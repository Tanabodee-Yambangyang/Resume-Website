import './RoundButton.css'
import { RoundedButtonProps } from "../../../interfaces/Buttons";

const RoundButton: React.FC<RoundedButtonProps> = ({ image, className, onClick }) => {
    return (
        <button className={`default-round-button ${className}`} onClick={onClick}>
            <img src={image} alt="defaut image" className={`image-${className}`}/>
        </button>
    );
};
  
export default RoundButton;