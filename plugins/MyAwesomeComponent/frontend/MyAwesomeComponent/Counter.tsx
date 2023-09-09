import React from "react";

type CounterProps = {
    counter: number;
    addOnClick: () => void;
    subtractOnClick: () => void;
};
function Counter(CounterProps) {
    return (
        <div>
            <span>Test</span>
        </div>
    );
}

export default Counter;

