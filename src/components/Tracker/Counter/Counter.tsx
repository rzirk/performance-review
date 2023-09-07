
type CounterProps = {
    counter: number;
    addOnClick: () => void;
    subtractOnClick: () => void;
};
function Counter({ counter, addOnClick, subtractOnClick }: CounterProps) {
    return (
        <div>
            <span>Test</span>
            <button onClick={subtractOnClick}>-</button>
            <input type="number" value={counter} readOnly />
            <button onClick={addOnClick}>+</button>
        </div>
    );
}

export default Counter;

