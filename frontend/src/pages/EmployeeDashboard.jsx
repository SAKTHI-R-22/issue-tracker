import { useEffect, useState } from "react";
import API from "../api/axios";
import Logout from "../components/Logout";

export default function EmployeeDashboard() {
  const [issues, setIssues] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const fetchIssues = async () => {
    const res = await API.get("/issues");
    setIssues(res.data);
  };

  const createIssue = async () => {
    await API.post("/issues", { title, description });
    setTitle("");
    setDescription("");
    fetchIssues();
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      {/* Logout button */}
      <Logout />

      <h2>Employee Dashboard</h2>

      <input
        placeholder="Issue Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br /><br />

      <button onClick={createIssue}>Create Issue</button>

      <h3>My Issues</h3>
      <ul>
        {issues.map((i) => (
          <li key={i._id}>
            {i.title} — {i.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
