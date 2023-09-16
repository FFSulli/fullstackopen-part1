import Part from "./Part.jsx";

const Content = (props) => {

    return (
        <div>
            {
                props.parts.map((item, index) => <Part key={index} part={item.name} exercises={item.exercises} />)
            }
        </div>
    )
}

export default Content