import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword} from "../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./TLogin.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) return navigate("/teacher")
    }, [user, loading, navigate]);
    return (
        <div className="login">
            <div className="login__container">
            <h2>Teacher Login</h2>
                <input
                    type="text"
                    className="login__textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                    required
                />
                <input
                    type="password"
                    className="login__textBox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button
                    className="login__btn"
                    onClick={() => signInWithEmailAndPassword(auth,email, password)}
                >
                    Login
                </button>
            </div>
        </div>
    );
}
export default Login;