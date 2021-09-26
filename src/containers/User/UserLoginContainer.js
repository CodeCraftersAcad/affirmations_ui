import Layout from "../../components/Layout/Layout";
import {useState} from "react";
import {Form} from "react-bootstrap";
import TextInputs from "../../components/TextInputs/TextInputs";
import Buttons from "../../components/Buttons/Buttons";
import {loginUser} from "../../store/actions/user-actions";
import {useDispatch} from "react-redux";

const UserLoginContainer = () => {
    const dispatch = useDispatch()

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
        await dispatch(loginUser(userLoginInformation))
    }

    return (
        <Layout>
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
                    btnText={'REGISTER'}
                    btnAlign={'text-end'}
                    type={'submit'}
                />
            </Form>
        </Layout>
    );
};

export default UserLoginContainer;