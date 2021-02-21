import { Formik, Form, Field } from "formik";
import "../resources/sass/Login.scss";
import { useHistory } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import * as Yup from 'yup';
 
const ErrorMessagesSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('*required'),
  password: Yup.string()
    .min(6, 'Password too short!')
    .required('*required'),
});

const Login = () => {
    const history = useHistory();
    const handleSubmit = () => {
        history.push("/question-page");
    }
    
    return (
        <div className="loginContainer">
            <div className="loginDetails">
                <Formik initialValues={{ email: '', password: '' }} validationSchema={ErrorMessagesSchema} onSubmit={handleSubmit}>
                    {({ errors, touched }) => (<Form>
                        <h2 className="heading"> Login </h2>
                        <div className="inputContainer">
                            <div className="inputFields">
                                <label>
                                    <MdEmail />
                                </label>
                                <Field type="input" name="email" placeholder="email" />
                            </div>
                            {touched.email && errors.email && <div className="errorField">{errors.email}</div>}
                        </div>
                        <div className="inputContainer">
                            <div className="inputFields">
                                <label>
                                    <RiLockPasswordFill />
                                </label>
                                <Field type="password" name="password" placeholder="password" />
                            </div>
                            {touched.password && errors.password && <div className="errorField">{errors.password}</div>}                            
                        </div>
                        <button className="btnBlue" type="submit"> Submit </button>
                    </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default Login;