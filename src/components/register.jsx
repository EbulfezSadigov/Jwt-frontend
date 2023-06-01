import styles from "./styles.module.css";
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Signup = () => {
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
                    <form className={styles.form_container}>
                        <h1>Create Account</h1>
                        <input
                            type="text"
                            placeholder="Username"
                            name="username"
                            required
                            className={styles.input}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            required
                            className={styles.input}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            required
                            className={styles.input}
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