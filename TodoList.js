function toggle(index) {
    todos[index].done = !todos[index].done;
    saveTodos();
    render();
}
function deleteTodo(index) {
    currentDeleteIndex = index;
    document.getElementById('deleteModal').style.display = 'flex';
}
function confirmDeleteTodo() {
    todos.splice(currentDeleteIndex, 1);
    closeDeleteModal();
    msgshow("Task has been deleted.");
    saveTodos();
    render();
}
function deleteDoneTodos() {
    todos = todos.filter(todo => !todo.done);
    saveTodos();
    render();
}
function deleteDoneTodos() {
    const doneTasks = todos.filter(todo => todo.done);
    if (doneTasks.length === 0) {
        msgshow("No done tasks to delete.");
        return;
    }
        document.getElementById('deleteAllDoneModal').style.display = 'flex';
}