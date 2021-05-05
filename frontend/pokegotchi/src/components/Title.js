const Title = ({ title, className }) => {
    return (
        <h1 className = { className }>{ title }</h1>
    )
}

Title.defaultProps = {
    title: "Add title here",
    className: ""
}

export default Title
