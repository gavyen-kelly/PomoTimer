import React from 'react';

export function StartButton({ onClick }) {
    return (
        <button onClick={onClick}>Start</button>
    );
}
export function PauseButton({ onClick }) {
    return (
        <button onClick={onClick}>Pause</button>
    );
}
export function RestartButton({ onClick }) {
    return (
        <button onClick={onClick}>Restart Timer</button>
    );
}
export function SkipBreakButton({ onClick }) {
    return (
        <button onClick={onClick}>Skip Break</button>
    );
}