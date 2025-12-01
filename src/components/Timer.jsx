import { useState, useEffect, useRef } from "react";

export default function Timer({ duration, onTimeout }) {
    const [timeLeft, setTimeLeft] = useState(duration);
    const timeoutCalled = useRef(false);

    // Reset when duration changes (e.g. new scene)
    useEffect(() => {
        setTimeLeft(duration);
        timeoutCalled.current = false;
    }, [duration]);

    // Ticking logic
    useEffect(() => {
        if (timeLeft <= 0) return;

        const timerId = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timerId);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timerId);
    }, [timeLeft]); // Re-run if timeLeft changes? No, this still recreates.
    // Actually, if we want to avoid recreation, we should only depend on [duration] or nothing, 
    // but we need to stop if it hits 0.
    // The functional update handles the stop.
    // But if we remove [timeLeft], the effect won't re-run, which is good.
    // However, if timeLeft is updated externally (by the first effect), this effect needs to restart?
    // Yes.

    // Let's stick to the separate effect pattern for clarity and safety.

    // Timeout Trigger Logic
    useEffect(() => {
        if (timeLeft === 0 && !timeoutCalled.current) {
            timeoutCalled.current = true;
            onTimeout();
        }
    }, [timeLeft, onTimeout]);

    const percentage = duration > 0 ? (timeLeft / duration) * 100 : 0;

    return (
        <div className="timer-container">
            <div
                className="timer-bar"
                style={{ width: `${percentage}%` }}
            />
        </div>
    );
}
