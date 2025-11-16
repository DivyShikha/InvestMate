import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function Login() {
  const [f, setF] = useState({ email:"", password:"" });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3002/auth/login", f, { withCredentials: true });
      toast.success("Logged in");
      window.location.href = "/";
    } catch (e) { toast.error(e.response?.data?.message || "Login failed"); }
  };

  return (
    <form onSubmit={submit} className="form_container">
      <h2>Login</h2>
      <input placeholder="Email" value={f.email} onChange={e=>setF({...f,email:e.target.value})}/>
      <input placeholder="Password" type="password" value={f.password} onChange={e=>setF({...f,password:e.target.value})}/>
      <button>Login</button>
    </form>
  );
}
