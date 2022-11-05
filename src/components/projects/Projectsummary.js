import { Link } from "react-router-dom"
import '../dashboard/dashboardstyles.css'
const moment = require('moment')

function Projectsummary({project}){
    //console.log(project.Date)
    //const AuthorInitials =   project.AuthorFirstName == undefined ? 'AA' : `${project.AuthorFirstName[0]}${project.AuthorLastName[0]}`
    let day = ''
    let post = {
        subject: project.subject,
        AuthorInitials: 'AA',
        author: 'Sample'
    }
    //console.log(project)

    if(project.authorFirstName){   
        //console.log((new Date() / 1000) -project.Date.seconds)   

        //const formatDate = Math.round((new Date() / 1000) - project.Date.seconds)
        day = moment(project.Date.toDate()).startOf('minute').fromNow()
        //console.log(project)
        post ={
            subject: project.subject,
            initials: project.authorInitials,
            author: project.authorFirstName || post.author
        }
        
    }


    return(
       
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{post.subject}</span>
                <p><span>by {post.author} </span></p>
                <p className="grey-text">Sent {day}</p> 
                <div className="btn-floating halfway-fab waves-light  translate grey darken-2"><div className="initials">{post.initials}</div></div>
            </div>
        </div>  
      
    )
}

export default Projectsummary