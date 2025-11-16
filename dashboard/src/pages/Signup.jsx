import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function Signup() {
  const [f, setF] = useState({ email:"", username:"", password:"" });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3002/auth/signup", f, { withCredentials: true });
      toast.success("Signed up");
      window.location.href = "/";     // go home
    } catch (e) { toast.error(e.response?.data?.message || "Signup failed"); }
  };

  return (
    <form onSubmit={submit} className="form_container">
      <h2>Signup</h2>
      <input placeholder="Email"    value={f.email}    onChange={e=>setF({...f,email:e.target.value})}/>
      <input placeholder="Username" value={f.username} onChange={e=>setF({...f,username:e.target.value})}/>
      <input placeholder="Password" type="password" value={f.password} onChange={e=>setF({...f,password:e.target.value})}/>
      <button>Create account</button>
    </form>
  );
}
