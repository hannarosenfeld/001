import { TextField } from '@mui/material';

export default function LoginPage() {
    return(
        <div className='flex flex-col'>
            <TextField id="standard-basic" label="Email" variant="standard" />
            <TextField id="standard-basic" label="Password" variant="standard" />
        </div>
    )
}