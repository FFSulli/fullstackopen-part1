const Total = (props) => {

    const getExercisesSum = (parts) => {
        let exercises = parts.map(item => item.exercises)
        return exercises.reduce((a, b) => a + b, 0)
    }

    return (
        <p>Number of exercises {getExercisesSum(props.parts)}</p>
    )
}

export default Total