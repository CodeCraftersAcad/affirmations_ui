import {useState} from "react";
import Layout from "../../components/Layout/Layout";
import {Form} from "react-bootstrap";
import TextInputs from "../../components/TextInputs/TextInputs";
import CheckInputs from "../../components/CheckInputs/CheckInputs";
import Buttons from "../../components/Buttons/Buttons";

const UserRegisterContainer = () => {
    const [showPremiumMembership, setShowPremiumMemberShip] = useState(false)
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        username: '',
        dob: '',
        membership: {
            membershipType: 'basic',
            paymentFrequency: '',
            confirmSubscription: false
        },
        notifications: {
            notify: true,
            frequency: 1,
            days: [],
            email: false
        }
    })

    const premiumMembershipShowInputs = () => setShowPremiumMemberShip(!showPremiumMembership)

    const handleUserInputChange = (event) => {
        const {name, value} = event.target;
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
    }

    const paymentFrequency = [
        {type: 'Monthly', value: 'month'},
        {type: 'Yearly', value: 'year'}
    ];

    return (
        <Layout>
            <Form onSubmit={handleSubmit}>
                <TextInputs
                    type={'text'}
                    name={'name'}
                    label={'Full Name'}
                    placeholder={'Jon Zen'}
                    onChange={handleUserInputChange}
                />
                <TextInputs
                    type={'email'}
                    name={'email'}
                    label={'Email'}
                    onChange={handleUserInputChange}
                    placeholder={'Jon.Zen@affirmations.com'}
                />
                <TextInputs
                    name={'dob'}
                    type={'text'}
                    label={'D.O.B.'}
                    placeholder={'04/28/1999'}
                    onChange={handleUserInputChange}
                />
                <h3>Membership</h3>
                <CheckInputs
                    type={'checkbox'}
                    label={'Sign Up for premium'}
                    onChange={premiumMembershipShowInputs}
                />
                {showPremiumMembership && (
                    <Form.Group>
                        <Form.Label>Payment Frequency</Form.Label>
                        {paymentFrequency.map((type) => (
                                <CheckInputs
                                    type={'radio'}
                                    label={type.type}
                                    value={type.value}
                                    name={'paymentFrequency'}
                                    onChange={handleUserInputChange}
                                />
                        ))}
                    </Form.Group>
                )}
                <Buttons
                    variant={'primary'}
                    btnText={'REGISTER'}
                    btnAlign={'text-end'}
                />
            </Form>
        </Layout>
    );
};

export default UserRegisterContainer;