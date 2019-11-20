const mapRawTodo = raw => {
  return {
    uuid: raw.uuid,
    item: raw.item,
    priority: raw.priority,
    completed: raw.completed,
    due_at: raw.due_at ? new Date(raw.due_at) : null,
    created_at: new Date(raw.created_at),
    updated_at: raw.updated_at ? new Date(raw.updated_at) : null,
    id: raw.id,
  };
};

export default mapRawTodo;
