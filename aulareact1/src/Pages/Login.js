import { useNavigate } from "react-router-dom";

function Login(){
    const navegar = useNavigate();

    function handleLogin(){
        navegar("/login")
    }

    return <button onClick={handleLogin}>Login</button>
}
export default Login;