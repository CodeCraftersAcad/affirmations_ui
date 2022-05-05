import React, { useState, useContext } from 'react';
// components
import TextInputs from '../../components/TextInputs/TextInputs';
import Buttons from '../../components/Buttons/Buttons';
import Form from 'react-bootstrap/Form';
import UserQuotes from '../UserQuotes/UserQuotes';
// context
import AppContext from '../../store/AppContext';
// api
import API from '../../API/API';
export default function AddQuotes() {
    const { jwt } = useContext(AppContext);
    const [quoteText, setQuoteText] = useState({});
    const handleUserInputChange = (e) => {
        const { name, value } = e.target;
        setQuoteText({ ...quoteText, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await API.postAddNewQuote(quoteText, jwt);
        console.log(response);
        // if (response.status === 201) {
        //     console.log(alert("bloop"))
        // }
    }
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <TextInputs
                    type={'text'}
                    id={'text'}
                    name={'text'}
                    label={'Add Quote'}
                    placeholder={'A thing that makes you happy'}
                    onChange={handleUserInputChange}
                />
                <TextInputs
                    type={'text'}
                    id={'author'}
                    name={'author'}
                    label={'Quote author'}
                    placeholder={'Who wrote this quote'}
                    onChange={handleUserInputChange}
                />
                <div className='mb-3'>
                    <label>Category</label>
                    <select
                        className='form-select mt-2'
                        onChange={handleUserInputChange}
                        name='category'>
                        <option value=''>-- Choose Category --</option>
                        <option value='general'>General</option>
                    </select>
                </div>
                <Buttons
                    variant={'primary'}
                    btnText={`+`}
                    btnAlign={'text-end'}
                    type={'submit'}
                />
            </Form>
            <UserQuotes />
        </>
    )
}
