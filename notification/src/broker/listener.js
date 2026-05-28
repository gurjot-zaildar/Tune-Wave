import { subscribeToQueue } from "./rabbit.js";
import sendEmail from '../utils/email.js';

function startListener(){

    subscribeToQueue("user_created", async(msg)=>{
        
        const {email , role, fullname:{ firstName,lastName}}= msg;

        const template=`
         <h1>Welcome to TUNE-WAVE</h1>
            <p>Dear ${firstName} ${lastName},</p>
            <p>Thank you for registering with TUNE-WAVE. We are excited to have you on board!</p>
            <p>Your role is: ${role}</p>
            <p>We hope you enjoy our services.</p>
            <br/>
            <p>Best regards,</p>
            <p>TUNE-WAVE Team</p>
        `

        await sendEmail(email,"Welcome to TUNE-WAVE", "Thank you for registering with TUNE-WAVE.", template)

    })

}

export default startListener;