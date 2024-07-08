import React from 'react';

export function ColorPicker1({ color, setColor }) {
    const handleInputChange = (event) => {
        setColor(event.target.value);
    };

    return (
        <input type="color" className="ba b--transparent" value={color} name="color1" onChange={handleInputChange} />
    );
}

export function ColorPicker2({ color, setColor }) {
    const handleInputChange = (event) => {
        setColor(event.target.value);
    };

    return (
        <input type="color" className="ba b--transparent" value={color} name="color2" onChange={handleInputChange} />
    );
}
