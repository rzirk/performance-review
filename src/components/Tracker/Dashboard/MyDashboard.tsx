import { useState } from 'react';
import "./MyDashboard.css";
import Counter from "../Counter/Counter.tsx";
import MyChart from "../Chart/MyChart.tsx";

function Dashboard() {
    const [counter, setCounter] = useState(0);

    function addOnClick() {
        setCounter(counter + 1);
    }

    function subtractOnClick() {
        setCounter(counter -1);
    }

    return (
        <div>
            <Counter counter={counter} addOnClick={addOnClick} subtractOnClick={subtractOnClick} />
            <MyChart counter={counter} />
        </div>
    );
}

export default Dashboard;