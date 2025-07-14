import { useState } from "react";
import './App.css';

function MyPage() {
    const [count, setCount] = useState(1);

    return (
        <>
            <button onClick={() => setCount(count + 1)}>Add Me</button><br />

            <button className={count === 0 ? alert("Your are on Zero!") : count > 5 ? "testcolor1" : "testcolor"}>
                {count}
            </button>
            <br />
            <button onClick={() => setCount(count - 1)}>Sub Me</button><br />
        </>
    );
}

export default MyPage;
