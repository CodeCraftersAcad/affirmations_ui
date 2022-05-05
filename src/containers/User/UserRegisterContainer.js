import React, { useState } from "react";
import { useHistory } from "react-router";
import { Form } from "react-bootstrap";
import TextInputs from "../../components/TextInputs/TextInputs";
import Buttons from "../../components/Buttons/Buttons";
// API
import API from "../../API/API";

const UserRegisterContainer = () => {
    const history = useHistory();
    const [userRegistrationInformation, setUserRegistrationInformation] = useState({
        name: '',
        email: '',
        password: '',
        username: '',
    })

    const handleUserInputChange = (event) => {
        const { name, value } = event.target;
        setUserRegistrationInformation({
            ...userRegistrationInformation,
            [name]: value
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password, username } = userRegistrationInformation;
        const result = await API.postRegister({ name, email, password, username });
        if (result.status === 201) history.push('/login')
    }
    return (
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
    )
}
export default UserRegisterContainer;