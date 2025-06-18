import { useState } from "react";
import "./ToggleSwitch.css";
export const ToggleSwitch = () => {
    const [isOn, setIsOn] = useState(true);
    return (
        <div className="toggle-switch" onClick={handleToggleSwitch}>
            <div className="switch">
                <span className="switch-state">{isOn ? "on" : "off"}</span>
            </div>
        </div>
    );
};

export default ToggleSwitch;