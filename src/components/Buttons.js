import React from 'react';

export function StartButton({ onClick, color1, color2 }) {
    return (
        <button
            onClick={onClick}
            className="btn btn-start"
            style={{ background: `linear-gradient(to right, ${color1}, ${color2})` }}
        >
            Start
        </button>
    );
}

export function PauseButton({ onClick, color1, color2 }) {
    return (
        <button
            onClick={onClick}
            className="btn btn-pause"
            style={{ background: `linear-gradient(to right, ${color1}, ${color2})` }}
        >
            Pause
        </button>
    );
}

export function RestartButton({ onClick, color1, color2 }) {
    return (
        <button
            onClick={onClick}
            className="btn btn-restart"
            style={{ background: `linear-gradient(to right, ${color1}, ${color2})` }}
        >
            Restart
        </button>
    );
}

export function SkipBreakButton({ onClick, color1, color2 }) {
    return (
        <button
            onClick={onClick}
            className="btn btn-skip"
            style={{ background: `linear-gradient(to right, ${color1}, ${color2})` }}
        >
            Skip Break
        </button>
    );
}
