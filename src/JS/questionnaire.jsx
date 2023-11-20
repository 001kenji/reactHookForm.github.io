import React from "react";
import {useForm} from 'react-hook-form'
import { DevTool } from "@hookform/devtools";
import '../App.css'
export default Questionnaire 
function Questionnaire() {
    const output =   document.getElementById('myOutout')
    const {register,control,handleSubmit, formState} = useForm({
        defaultValues : {
            self : '',
            qualifications : '',
            lastJob : '',
            CurrentRole : '',
            experience : '',
            careerPath : '',
            WorkReason : '',
            weaknesses : '',
            availability : '',
            questions : '',
            quiz1 : '',
            quiz2 : '',
            quiz3 : '',
            quiz4 : ''
        },
        mode : 'onTouched'
    })
const {errors,isDirty} = formState

const Submitter = (data) => {
    console.log(data)
  const output =   document.getElementById('myOutout')
  output.innerHTML = 
 ` <div id='outputInnerDiv'>
 <h1>SERVEY YOUR QUESTIONNAIRE</h1>
    <p><span>Self Description :</span> ${data.self}</p>
    <p><span>Qualifications :</span> ${data.qualifications}</p>
    <p><span>Last Job status :</span> ${data.lastJob}</p>
    <p><span>Current Role :</span> ${data.CurrentRole}</p>
    <p><span>Experience : </span>${data.experience}</p>
    <p><span>Career Path :</span> ${data.careerPath}</p>
    <p><span>Employment reason :</span> ${data.WorkReason}</p>
    <p><span>Weaknesses :</span> ${data.weaknesses}</p>
    <p><span>Availability :</span> ${data.availability}</p>
    <p><span>Questions :</span> ${data.questions}</p>
    <p><span>Quiz 1 :</span> ${data.quiz1}</p>
    <p><span>Quiz 2 :</span> ${data.quiz2}</p>
    <p><span>Quiz 3 :</span> ${data.quiz3}</p>
    <p><span>Quiz 4 :</span> ${data.quiz4}</p>
  </div>`
}



    return(
        <>
        <div id='omega'>
        <p>fill out the Questionnaire bellow for our interview</p>
        <form id="questionnaireForm" onSubmit={handleSubmit(Submitter)}>
            <label htmlFor="self">How would you describe yourlsef ?</label>
        <input {...register('self',{required : 'Cant describe yourlself 😊 . Go home'})} type="text"  id="self"  />
        {errors.self && <p>{errors.self?.message}</p>}

        <label htmlFor="qualifications">What kind of qualifications do you have ?</label>
        <input {...register('qualifications',{required : 'Cant describe qualifications 😁 . mama mia !!!'})} type="text"  id="qualifications"  />
        {errors.qualifications && <p>{errors.qualifications?.message}</p>}

        <label htmlFor="lastJob">Why did you leave your last job ?</label>
        <select {...register('lastJob',{required : 'Please select something ..'})} type="text"  id="lastJob"  >
        <option disabled selected value=''>select</option>
            <option value='Laid off'>I was laid off</option>
            <option value='I resigned'>I resigned</option>
            <option value='better job'>I wanted to focus on finding a better job</option>
            <option value='I quited'>I Quited</option>
        </select>
        {errors.lastJob && <p>{errors.lastJob?.message}</p>}

        <label htmlFor="CurrentRole">What do you do in our current role ?</label>
        <input {...register('CurrentRole',{required : 'You can also guez 😆 '})} type="text"  id="CurrentRole"  />
        
        {errors.CurrentRole && <p>{errors.CurrentRole?.message}</p>}

        <label htmlFor="experience">What relevent experience do you have?</label>
        <select {...register('experience',{required : 'Please select something .. .   we dont want nerds🥹'})} type="text"  id="experience"  >
        <option disabled selected value=''>select</option>
            <option value='Expericed'>I have worked as Sale Representative for several years</option>
            <option value='organizational skills'>I have good ogranizational skills</option>
            <option value='complaints Experience'>I have experience in dealing with complaints for over five years</option>
            <option value='Extreamly jocker'>I dont have any idea</option>
        </select>
        {errors.experience && <p>{errors.experience?.message}</p>}

        <label htmlFor="careerPath">What is your career path ?</label>
        <input {...register('careerPath',{required : 'You can also guez😳 '})} type="text"  id="careerPath"  />
        
        {errors.careerPath && <p>{errors.careerPath?.message}</p>}

        <label htmlFor="WorkReason">Why would you like to work for use?</label>
        <select {...register('WorkReason',{required : 'Please select something .. .   we dont want nerds😳'})} type="text"  id="WorkReason"  >
        <option disabled selected value=''>select</option>
            <option value='practice'>I would like to put into practice</option>
            <option value='Exost'>I would like to make use of the experience I have gained in the past ten years</option>
            <option value='Growth'>I believe your company will allow me to grow both professionall and personally</option>
            <option value='Extreamly jocker'>I dont have any idea</option>
        </select>
        {errors.WorkReason && <p>{errors.WorkReason?.message}</p>}

        <label htmlFor="weaknesses">What are your weaknesses/ negative traits?</label>
        <select {...register('weaknesses',{required : 'No one is perfect'})} type="text"  id="weaknesses"  >
        <option disabled selected value=''>select</option>
            <option value='hard on one self'>I am too hard on myself</option>
            <option value='need of learning'>I might need to learn to be more flexible</option>
            <option value='details focuser'>I occcasionally focus on details instead of bigger picture</option>
            <option value='Mr/ Mrs Perfect'>I dont have any weaknesses</option>
        </select>
        {errors.weaknesses && <p>{errors.weaknesses?.message}</p>}


        <label htmlFor="availability">When can you commence employment with us?</label>
        <select {...register('availability',{required : 'Dont make things hard again here .  😠`'})} type="text"  id="availability"  >
        <option disabled selected value=''>select</option>
            <option value='January'>I will be available for work in january, next year</option>
            <option value='Immediate'>I can start immediately</option>
            <option value='week notice'>I have to give three weeks' notice to my current employer</option>
            <option value='Mr/ Mrs Perfect'>Am always on vacation😁 </option>
        </select>
        {errors.availability && <p>{errors.availability?.message}</p>}

        <label htmlFor="questions">Do you have any questions?</label>
        <select id="questions" {...register('questions',{required : false })}  >
        <option disabled selected value=''>select</option>
            <option value='Curiosity personnel'>What would be the fist project</option>
            <option value='income'>How are you paying ?</option>
            <option value='benefist questions'>Are there any benefits your company offers its employees ?</option>
            <option value='serious'>How soon can I start 😁 </option>
        </select>
        {errors.questions && <p>{errors.questions?.message}</p>}
    
        <span>Answer the following questions to earn points</span>
        <label htmlFor="quiz1">How much space would a 30 Cup shelf require if a 12 shell cupboard requires 18 ft. of wall space?</label>
        <input {...register('quiz1',{required : 'You can also guez 😁 '})} type="text"  id="quiz1"  />
        {/* A 30 Cup shell requires 45 ft. of wall */}
        {errors.quiz1 && <p>{errors.quiz1?.message}</p>}

        <label htmlFor="quiz2">In a small company, the average salary of three employees is $1000 per week. If one employee earns $1100 and other earns $500, how much will the third employee earn?</label>
        <input {...register('quiz2',{required : 'You can also guez 😁 '})} type="text"  id="quiz2"  />
                {/* Formula to calculate this,

        (e1+e2+e3) /3 = $ 1000

        1100+500+e3 = 1000 x 3

        1600+e3 = 3000

        e3 = 3000-1600

        = 1400

        The third employee will earn $1400*/}

        {errors.quiz2 && <p>{errors.quiz2?.message}</p>}

        
        <label htmlFor="quiz3">Which of the following is not a vector quantity?</label>
        <select id="quiz3" {...register('quiz3',{required : 'You can also guez 😁 ' })}  >
        <option disabled selected value=''>select</option>
            <option value='Weight'>Weight</option>
            <option value='Nuclear spin'>Nuclear spin</option>
            <option value='Momentum'>Momontum</option>
            <option value='Potential energy'>Potential energy</option>
        </select>
        {/* PE */}
        {errors.quiz3 && <p>{errors.quiz3?.message}</p>}
    

        <label htmlFor="quiz4">The x-component of a force of 50N is 30N, then what will be the y-component of the same applied force ?</label>
        <input {...register('quiz4',{required : 'You can also guez 😁 '})} type="text"  id="quiz4"  />
        {/* 40 N*/}
        {errors.quiz4 && <p>{errors.quiz4?.message}</p>}


        <button id="submitBtn" type="submit" >Submit</button>
        </form>
        <DevTool control={control} />
        <div id="myOutout">
             </div>
             <div id="BtnDiv">
             <button id="hide" onClick={() => output.style.visibility = 'hidden'}>Hide</button>
            <button id="Show" onClick={() => output.style.visibility = 'visible'}>Show</button>
                </div>
        </div>
        </>
    )
}
