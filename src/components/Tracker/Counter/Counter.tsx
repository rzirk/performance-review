import "./Counter.css";

type CounterProps = {
    counterLable: string;
    counter: number;
    addOnClick: () => void;
    subtractOnClick: () => void;
};
function Counter({counterLable, counter, addOnClick, subtractOnClick }: CounterProps) {
    return (
        <div className="level-item">
            <div className="field ">
                    <label className="label">{counterLable}</label>
                <div className="field-body no-wrap field has-addons">
                    <div className="control">
                        <button className="button is-info" onClick={subtractOnClick}>-</button>
                    </div>
                    <div className="control">
                        <input className="input" type="number" value={counter} readOnly />
                    </div>
                    <div className="control">
                        <button className="button is-info" onClick={addOnClick}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Counter;

