import StatisticLine from "./StatisticLine.jsx";

const Statistics = ({good, neutral, bad}) => {

    const getRatesSum = () => good + neutral + bad
    const getAverageRate = () => getRatesSum() / 3
    const getPositiveRate = () => (good * 100) / getRatesSum()

    if (getRatesSum() === 0) {
        return (
            <div>
                <p>No feedback given</p>
            </div>
        )
    }

    return (
        <div>
            <table>
                <tbody>
                    <StatisticLine text="Good" value={good} />
                    <StatisticLine text="Neutral" value={neutral} />
                    <StatisticLine text="Bad" value={bad} />
                    <StatisticLine text="All" value={getRatesSum()} />
                    <StatisticLine text="Average" value={getAverageRate()} />
                    <StatisticLine text="Positive" value={getPositiveRate()} />
                </tbody>
            </table>
        </div>
    )
}


export default Statistics