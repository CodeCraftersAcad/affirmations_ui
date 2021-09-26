import {useState} from "react";
import Layout from "../../components/Layout/Layout";
import {Form} from "react-bootstrap";
import {useDispatch} from "react-redux";
import TextInputs from "../../components/TextInputs/TextInputs";
import Buttons from "../../components/Buttons/Buttons";
import {registerNewUser} from "../../store/actions/user-actions";

const UserRegisterContainer = () => {
    const dispatch = useDispatch();

    const [userRegistrationInformation, setUserRegistrationInformation] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        username: '',
        dob: '',
        membershipType: 'basic',
        paymentFrequency: '',
        confirmSubscription: false,
        notify: true,
        frequency: 1,
        days: [],
        notifyByEmail: false
    })

    const handleUserInputChange = (event) => {
        const {name, value} = event.target;
        setUserRegistrationInformation({...userRegistrationInformation, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(registerNewUser(userRegistrationInformation))
    }

    return (
        <Layout>
            <Form onSubmit={handleSubmit}>
                <TextInputs
                    type={'text'}
                    id={'registerName'}
                    name={'name'}
                    label={'Full Name'}
                    placeholder={'Jon Zen'}
                    onChange={handleUserInputChange}
                />
                <TextInputs
                    type={'text'}
                    id={'registerUsername'}
                    name={'username'}
                    label={'Username'}
                    placeholder={'ccaAffirmations'}
                    onChange={handleUserInputChange}
                />
                <TextInputs
                    type={'email'}
                    id={'registerEmail'}
                    name={'email'}
                    label={'Email'}
                    onChange={handleUserInputChange}
                    placeholder={'Jon.Zen@affirmations.com'}
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

export default UserRegisterContainer;