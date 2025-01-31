import React, { useState } from "react";
import Todo from "./ToDo";
import { Project } from "./Types";

const App: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [projects, setProjects] = useState<Project[]>([]);
  const [newProject, setNewProject] = useState<Project | null>(null);

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const addProject = () => {
    if (newProject !== null) {
      setProjects([...projects, newProject]);
      setNewProject("");
    }
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input 
        type="text" 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <Todo key={index} text={todo} />
        ))}
      </ul>
      <h2>Projects</h2>
        <input 
            type="text" 
            value={newProject?.title || ""} 
            onChange={(e) => setNewProject({ ...newProject, title: e.target.value }  as Project)}
        />
        <input 
            type="text" 
            value={newProject?.description || ""} 
            onChange={(e) => setNewProject({ ...newProject, description: e.target.value }  as Project)}
        />
        <input 
            type="text" 
            value={newProject?.actionItems || ""} 
            onChange={(e) => setNewProject({ ...newProject, actionItems: e.target.value } as Project)}
        />
        <input 
            type="text" 
            value={newProject?.DateStarted || ""} 
            onChange={(e) => setNewProject({ ...newProject, DateStarted: new Date(e.target.value) } as Project)}
        />
        <input 
            type="text" 
            value={newProject?.DueDate || ""} 
            onChange={(e) => setNewProject({ ...newProject, DueDate: new Date(e.target.value) }  as Project)}
        />
        <input 
            type="text" 
            value={newProject?.budget || ""} 
            onChange={(e) => setNewProject({ ...newProject, budget: parseFloat(e.target.value) } as Project)}
        />
        
    </div>
  );
};

export default App;