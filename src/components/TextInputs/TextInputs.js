import { Form } from 'react-bootstrap';

export default function TextInputs({label, type, placeholder,name, onChange, value}) {
    return (
        <Form.Group>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </Form.Group>
    )
}
