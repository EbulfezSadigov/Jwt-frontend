import styles from "./styles.module.css";
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from "react";
const Signup = () => {
    const navigate = useNavigate()

    const [data, setdata] = useState({
        username: "",
        email: "",
        password: ""
    })

    const updateName = e => {
        const fieldName = e.target.name
        setdata(existingValues => ({
            ...existingValues,
            [fieldName]: e.target.value,
        }))
    }

    const handlePost = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/api/users', data)
            .then(res => navigate('/login'))
            .catch(res => console.log(res.data))
    }



    return (
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
                <div className={styles.left}>
                    <h1>Welcome Back</h1>
                    <Link to="/login">
                        <button type="button" className={styles.white_btn}>
                            Sign in
                        </button>
                    </Link>
                </div>
                <div className={styles.right}>
                    <form className={styles.form_container} onSubmit={handlePost}>
                        <h1>Create Account</h1>
                        <input
                            value={data.username}
                            type="text"
                            placeholder="Username"
                            name="username"
                            required
                            className={styles.input}
                            onChange={updateName}
                        />
                        <input
                            type="email"
                            value={data.email}
                            placeholder="Email"
                            name="email"
                            required
                            className={styles.input}
                            onChange={updateName}
                        />
                        <input
                            value={data.password}
                            type="password"
                            placeholder="Password"
                            name="password"
                            required
                            className={styles.input}
                            onChange={updateName}
                        />
                        <button type="submit" className={styles.green_btn}>
                            Sing Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;