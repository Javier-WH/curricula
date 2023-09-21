import "./links.css"
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/PhoneEnabled';
import LocationIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Links(){

    return <div id="link-container">

        <div className="link-element">
            <MailIcon />
            <a href="https://mail.google.com"> FranciscoJavierR@gmail.com</a>
        </div>

        <div className="link-element">
            <PhoneIcon/>
            <a href="a">(058) 0414-2946675</a>
        </div>

        <div className="link-element">
            <LocationIcon/>
            <a href="a">Caracas, Venezuela</a>
        </div>

        <div className="link-element">
            <LinkedInIcon/>
            <a href="https://www.linkedin.com/in/francisco-javier-rodríguez-hernández-3463b621b/">Linkedin</a>
        </div>

        <div className="link-element">
            <GitHubIcon/>
            <a href="https://github.com/Javier-WH">GitHub</a>
        </div>
     
    </div>
}