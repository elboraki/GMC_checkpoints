import { useEffect, useState } from "react";

const emptyForm = {
  name: "",
  description: ""
};

// TaskForm handles controlled inputs and validation for creating or editing tasks.
function TaskForm({ editingTask, onCancelEdit, onSaveTask }) {
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingTask) {
      setFormData({
        name: editingTask.name,
        description: editingTask.description
      });
      setErrors({});
    }
  }, [editingTask]);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value
    }));
  }

  function validateForm() {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Task name is required.";
    }

    if (!formData.description.trim()) {
      nextErrors.description = "Task description is required.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    onSaveTask({
      name: formData.name.trim(),
      description: formData.description.trim()
    });

    setFormData(emptyForm);
    setErrors({});
  }

  function handleCancel() {
    setFormData(emptyForm);
    setErrors({});
    onCancelEdit();
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div>
        <p className="section-label">{editingTask ? "Edit task" : "Add task"}</p>
        <h2>{editingTask ? "Update the selected task" : "Create a new task"}</h2>
      </div>

      <label htmlFor="name">Task name</label>
      <input
        aria-describedby={errors.name ? "name-error" : undefined}
        id="name"
        name="name"
        onChange={handleChange}
        placeholder="Example: Finish checkpoint"
        type="text"
        value={formData.name}
      />
      {errors.name && (
        <p className="error-message" id="name-error">
          {errors.name}
        </p>
      )}

      <label htmlFor="description">Description</label>
      <textarea
        aria-describedby={errors.description ? "description-error" : undefined}
        id="description"
        name="description"
        onChange={handleChange}
        placeholder="Add the details for this task"
        rows="5"
        value={formData.description}
      />
      {errors.description && (
        <p className="error-message" id="description-error">
          {errors.description}
        </p>
      )}

      <div className="form-actions">
        {editingTask && (
          <button className="secondary-button" onClick={handleCancel} type="button">
            Cancel
          </button>
        )}
        <button className="primary-button" type="submit">
          {editingTask ? "Save changes" : "Add task"}
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
