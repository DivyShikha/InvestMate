import { useEffect, useState } from "react";
import axios from "axios";

export default function Home1() {
  const [me, setMe] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3002/me", { withCredentials: true })
      .then(res => setMe(res.data.user))
      .catch(() => (window.location.href = "/login"));
  }, []);

  if (!me) return <p>Loading…</p>;
  return <p>Welcome! (role: {me.role})</p>;
}
