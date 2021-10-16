import {useState, useContext} from "react";
import {Form} from "react-bootstrap";
import TextInputs from "../../components/TextInputs/TextInputs";
import Buttons from "../../components/Buttons/Buttons";
// API
import API from "../../API/API";
// context
import AppContext from "../../store/AppContext";
const UserLoginContainer = () => {
    const { setJwt, setUser } = useContext(AppContext);
    const [userLoginInformation, setUserLoginInformation] = useState({
        password: '',
        username: '',
    })

    const handleUserInputChange = (event) => {
        const {name, value} = event.target;
        setUserLoginInformation({...userLoginInformation, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, password } = userLoginInformation;
        const response = await API.postLogin({ username, password });
        if (response.status === 200) {
            localStorage.setItem("affirm_user", JSON.stringify({ ...response.data }));
            setJwt(response.data.token);
            setUser({ ...response.data });
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <TextInputs
                type={'text'}
                id={'registerUsername'}
                name={'username'}
                label={'Username'}
                placeholder={'ccaAffirmations'}
                onChange={handleUserInputChange}
            />
            <TextInputs
                id={'registerPassword'}
                type={'password'}
                name={'password'}
                label={'Password'}
                placeholder={'Password'}
                onChange={handleUserInputChange}
            />
            <Buttons
                variant={'primary'}
                btnText={'LOGIN'}
                btnAlign={'text-end'}
                type={'submit'}
            />
        </Form>
    );
};

export default UserLoginContainer;