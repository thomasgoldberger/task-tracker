const Tasks = ({ tasks }) => { 
    return (
        <>
            {tasks.map((tasks) => (
            <h3 key= {tasks.id}>{tasks.text}</h3>))}
        </>
    )
}

export default Tasks
