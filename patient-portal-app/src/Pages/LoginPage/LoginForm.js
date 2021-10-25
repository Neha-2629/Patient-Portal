import React, {useState} from 'react'

const LoginForm = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const [allEntry, setAllEntry] = useState([]);
    const submitForm = (e) => {
        e.preventDefault();
        const newEntry = {username: user, password: password}
        setAllEntry([...allEntry, newEntry])
    }

    return (
        <div>
            <h1>Log into Patient Portal</h1>
            <form action="" onSubmit={submitForm}>
                <div>
                    <label htmlFor="email">User Name </label>
                    <input type="text" name="username" id="username" value={user} onChange={(e)=>setUser(e.target.value)}></input> 
                    <br></br>
                    <a href='#'>Forgot username?</a>  
                </div>
                <div>
                    <label htmlFor="email">Password </label>
                    <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                    <br></br>
                    <a href='#'>Forgot password?</a>
                </div>
                <button type="submit">LOGIN</button>
            </form>
            <hr></hr>
            <h6>I am New here</h6>
            <button>CREATE ACCOUNT</button>
            <div>
                {
                    allEntry.map((curElem) =>{
                        return(
                            <div> 
                                <p>{curElem.username}</p>
                                <p>{curElem.password}</p>
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}

export default LoginForm