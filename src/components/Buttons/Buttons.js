import { Button } from 'react-bootstrap';

export default function Buttons({btnText, variant, btnAlign}) {
    return (
        <p className={btnAlign}>
            <Button variant={variant}>{btnText}</Button>
        </p>
    )
}
