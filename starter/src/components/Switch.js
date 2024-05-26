import React, { useState, useEffect } from 'react';
import styles  from '../css/Switch.module.css';

const Switch = ({ onSwitchChanged }) => {
    const [isOn, setIsOn] = useState(false);

    useEffect(() =>{
        onSwitchChanged(isOn);
    }, [isOn, onSwitchChanged]);

    const handleSwitchStatusChange = () => {
        setIsOn(previousIsOn => !previousIsOn);
    };

    return (
        <div className={styles["container"]}>
            <p>{isOn ? "Answered Questions" : "Unanswered Questions"}</p>
            <label className={styles["switch"]}>
                <input type="checkbox" checked={isOn} onChange={handleSwitchStatusChange} />
                <span className={styles["slider"]}></span>
            </label>
        </div>
    );
}

export default Switch;