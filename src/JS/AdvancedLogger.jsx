import react from 'react'
import {useForm} from 'react-hook-form'
import '../App.css'
import { DevTool } from '@hookform/devtools'
export default Logger 
function Logger() {

    const {register,control,formState,handleSubmit,watch} = useForm({
        defaultValues : {
            username : '',
            email : '',
            passcode : '',
            phone : ''
        },
    })
const {errors} = formState
const Submitter = (data) => {
    console.log(data)
    document.getElementById('output').innerHTML = 
    `<div>
        <h1>Output</h1>
        <p>Name : ${data.username}</p>
        <p>Email : ${data.email}</p>
        <p>Number : ${data.phone}</p>
        <p>Password : ${data.passcode}</p>
    </div>`
}


    return(
        <>        
        <form noValidate id='myform' onSubmit={handleSubmit(Submitter)} className='text-white shadow-md'    >
            <label htmlFor='name' >Enter your name :</label>
        <input placeholder='username' id='name' type='text' {...register('username',{required : "enter username please" })} />
       {errors.username && <p id='alert' role='alert'>{errors.username.message}</p>}
        <label htmlFor='email' >Enter your email :</label>

        <input placeholder='email' id='email' type='email' {...register('email',{required :'Enter emial please' })} />

{errors.email && <p id='alert' role='alert'>{errors.email.message}</p>}
         <label htmlFor='number' >Enter your phone number :</label>

    <input placeholder='phone Number' id='number' type='number' {...register('phone',{required :'enter your phone number please'})} />
    {errors.phone && <p id='alert' role='alert'>{errors.phone.message}</p>}
    <label htmlFor='passcode' >Enter your password :</label>
    <input placeholder='password' id='passcode' type='password' {...register('passcode',{required : 'enter your password please' })} />
    {errors.passcode && <p id='alert' role='alert'>{errors.passcode.message}</p>}
        <button type='submit'>LogIn</button>
        </form>
        <DevTool control={control} />
<div id='output'>

</div>
        </>
    )
}