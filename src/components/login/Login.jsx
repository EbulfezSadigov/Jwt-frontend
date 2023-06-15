import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Login = () => {

    const [data, setdata] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    const updateName = e => {
        const fieldName = e.target.name
        setdata(existingValues => ({
            ...existingValues,
            [fieldName]: e.target.value,
        }))
    }

    console.log(data);

    const handlePost = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/api/users/login', data)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                navigate('/')

            })
            .catch(res => console.log(res.data))
    }
    return (
        <div className={styles.login_container}>
            <div className={styles.login_form_container}>
                <div className={styles.left}>
                    <form className={styles.form_container} onSubmit={handlePost}>
                        <h1>Login to Your Account</h1>
                        <input
                            value={data.email}
                            type="email"
                            placeholder="Email"
                            name="email"
                            required
                            className={styles.input}
                            onChange={updateName}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={data.password}
                            required
                            className={styles.input}
                            onChange={updateName}
                        />
                        <button type="submit" className={styles.green_btn}>
                            Sign In
                        </button>
                    </form>
                </div>
                <div className={styles.right}>
                    <h1>New Here ?</h1>
                    <Link to="/register">
                        <button type="button" className={styles.white_btn}>
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;