import { useEffect, useState } from "react";
import API from "../api/axios";
import Logout from "../components/Logout";

export default function AdminDashboard() {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchIssues = async () => {
    try {
      const res = await API.get("/issues");
      setIssues(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await API.put(`/issues/${id}/status`, { status });
      fetchIssues();
    } catch (err) {
      alert("Only admins can update status");
    }
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <div className="container">
      <Logout />
      <h2>Admin Dashboard</h2>

      {loading && <p>Loading issues...</p>}

      {!loading && issues.length === 0 && (
        <p>No issues found</p>
      )}

      {issues.map((i) => (
        <div
          key={i._id}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "6px",
          }}
        >
          <b>{i.title}</b>
          <p style={{ margin: "4px 0" }}>{i.description}</p>

          <span
            style={{
              fontSize: "12px",
              padding: "4px 8px",
              borderRadius: "4px",
              background:
                i.status === "RESOLVED"
                  ? "#c8e6c9"
                  : i.status === "IN_PROGRESS"
                  ? "#fff3cd"
                  : "#e3f2fd",
            }}
          >
            {i.status}
          </span>

          <div style={{ marginTop: "8px" }}>
            <button
              onClick={() => updateStatus(i._id, "IN_PROGRESS")}
              disabled={i.status === "IN_PROGRESS"}
            >
              In Progress
            </button>

            <button
              onClick={() => updateStatus(i._id, "RESOLVED")}
              disabled={i.status === "RESOLVED"}
              style={{ marginLeft: "8px" }}
            >
              Resolved
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
