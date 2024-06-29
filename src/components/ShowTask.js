export const ShowTask = ({tasklist, setTasklist, edtask, setEdtask}) => {

    const editTask = (id) => {
        const updatedTask = tasklist.find(editTask => {
           return editTask.id === id
        })
        setEdtask(updatedTask);
        console.log(updatedTask);
    }

    const deleteTask = (id) => {
        const aftdelTask = tasklist.filter(delTask => id !== delTask.id);
        setTasklist(aftdelTask);
    }

    // const tasks = [{
    //     id: 101,
    //     name: "Task One",
    //     time: "17:06:24 PM 02/02/1992"
    // }, {
    //     id: 102,
    //     name: "Task Two",
    //     time: "11:06:24 PM 02/02/1992"
    // }, {
    //     id: 10,
    //     name: "Task Three",
    //     time: "16:06:24 PM 02/02/1992"
    // }]

  return (
    <section className="showTask">
        <div className="head">
            <div>
                <span className="title">Todo</span>
                <span className="count">{tasklist.length}</span>
            </div>
            <button onClick={() => setTasklist([])} className="clearAll">Clear All</button>
        </div>

        <ul>
            {
                tasklist.map(task => (
                    <li key={task.id}>
                        <p>
                            <span className="name">{task.name}</span>
                            <span className="time">{task.time}</span>
                        </p>
                        <i onClick={() => editTask(task.id)} className="bi bi-pencil-square"></i>
                        <i onClick={() => deleteTask(task.id)} className="bi bi-trash"></i>
                    </li>
                ))
            }    
        </ul>
    </section>
  )
}
