import { useState } from 'react'
import Button from "./components/Button.jsx";
import Statistics from "./components/Statistics.jsx";

const App = () => {

    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const rateAsGood = () => setGood(good + 1)
    const rateAsNeutral = () => setNeutral(neutral + 1)
    const rateAsBad = () => setBad(bad + 1)

    return (
        <div>
            <h1>Give feedback</h1>
            <Button handleClick={rateAsGood} text='Good' />
            <Button handleClick={rateAsNeutral} text='Neutral' />
            <Button handleClick={rateAsBad} text='Bad' />
            <h2>Statistics</h2>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default App