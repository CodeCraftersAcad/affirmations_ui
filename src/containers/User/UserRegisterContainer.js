import {useState} from "react";
import Layout from "../../components/Layout/Layout";
import {Form} from "react-bootstrap";

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
        setUser({...user, [name]: value})
    }

    const handleSubmit = () => {
        console.log(user)
    }

    const paymentFrequency = [
        {type: 'Monthly', value: 'month'},
        {type: 'Yearly', value: 'year'}
    ];

    return (
        <Layout>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type={'text'}
                                  placeholder={'Jon Zen'}
                                  name={'name'}
                                  onChange={handleUserInputChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type={'email'}
                                  placeholder={'Jon.Zen@affirmations.com'}
                                  name={'email'}
                                  onChange={handleUserInputChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>D.O.B.</Form.Label>
                    <Form.Control type={'text'}
                                  placeholder={'04/28/1999'}
                                  name={'dob'}
                                  onChange={handleUserInputChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Membership</Form.Label>
                    <Form.Control type={'text'}
                                  placeholder={'04/28/1999'}
                                  name={'dob'}
                                  onChange={handleUserInputChange}
                    />
                </Form.Group>
                    <h3>Membership</h3>
                <Form.Group>
                    <Form.Label>Sign Up for premium</Form.Label>
                    <Form.Check type={'checkbox'} onChange={premiumMembershipShowInputs}/>
                </Form.Group>
                {showPremiumMembership && (
                    <Form.Group>
                        <Form.Label>Payment Frequency</Form.Label>
                        {paymentFrequency.map((type) => (
                            <div key={`inline-${type.value}`}>
                                <Form.Check
                                    inline
                                    type={'radio'}
                                    name={'paymentFrequency'}
                                    onChange={handleUserInputChange}
                                    id={`membership-${type.value}`}
                                    label={type.type}
                                    value={type.value}
                                />
                            </div>
                        ))}
                    </Form.Group>
                )}
            </Form>
        </Layout>
    );
};

export default UserRegisterContainer;