import { useState } from 'react';
import { useDispatch } from "react-redux";
import { TextField, Button } from '@mui/material';

export default function SignUpPage() {
    const [userName, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("🌼")
    }

    return(
        <form onSubmit={onSubmit}>
            <div className='flex flex-col'>
                <TextField id="standard-basic" label="Username" variant="standard" onChange={(e) => setEmail(e.target.value)} />
                <TextField id="standard-basic" label="Email" variant="standard" onChange={(e) => setUsername(e.target.value)} />
                <TextField id="standard-basic" label="Password" variant="standard" onChange={(e) => setPassword(e.target.value)} />
                <Button type="submit">Submit</Button>
            </div>
        </form>
    )
}