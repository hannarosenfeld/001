import { TextField, Button } from '@mui/material';

const onSubmit = (e) => {
    e.preventDefault();
    console.log("🌼")
}

export default function LoginPage() {
    return(
        <form onSubmit={onSubmit}>
            <div className='flex flex-col'>
                <TextField id="standard-basic" label="Email" variant="standard" />
                <TextField id="standard-basic" label="Password" variant="standard" />
                <Button type="submit">Submit</Button>
            </div>
        </form>
    )
}