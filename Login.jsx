let username = "";
let password = "";

function Login() {
    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" placeholder="Username" onChange={(e) => username = e.target.value} />
            <input type="password" placeholder="Password" onChange={(e) => password = e.target.value} />
            <button onClick={() => console.log(`Username: ${username}, Password: ${password}`)}>Login</button>
        </div>
    );
}