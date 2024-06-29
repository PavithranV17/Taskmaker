export const AddTask = ({tasklist, setTasklist, edtask, setEdtask}) => {
    const submit = (event) => {
        event.preventDefault();

        if(edtask.id){
            const date = new Date();
            const newTaskname = tasklist.map(editedmap => {
                return edtask.id === editedmap.id ? {id: edtask.id, name: edtask.name, time: edtask.name !== editedmap.name ? `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` : editedmap.time} : editedmap 
            })
            setTasklist(newTaskname);
            setEdtask({});
        } else{
            if(event.target.task.value !== ""){
                const date = new Date();
                const newTask = {
                    id: date.getTime(),
                    name: event.target.task.value,
                    time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
                }
            
                setTasklist([...tasklist, newTask]);
                setEdtask({});
            } else{
                alert("Please enter valid task name");
            }   
        }
    }

  return (
    <section className="addTask">
        <form onSubmit={submit}>
            <input type="text" name="task" value={edtask.name || ""} autoComplete="off" placeholder="add task" maxLength="25" onChange={(event) => setEdtask({...edtask, name: event.target.value})}/>
            <button type="submit">{edtask.id ? "Update" : "Add"}</button>
        </form>
    </section>
  )
}
