import Projectsummary from './Projectsummary'
import { Link } from 'react-router-dom'
const ProjectList=({props})=>{
    // console.log(props)
    // let sortedProps= props.sort((p1, p2) => {
    //    // console.log(p1.Date.seconds)
    //     return (p1.Date.seconds - p2.Date.seconds) ;
    // })

    //console.log(sortedProps)

    return(
        <>
        <div className="project-list section">
        {
           props.map((project)=>                
                    <div>
                        {/* {console.log(project)} */}
                        <Link to = {'/project/'+ project.id} key ={project.id}  >
                            <Projectsummary project = {project}  />   
                        </Link>
                    </div>                     
                    )
        }
        </div>

        </>
    )
}
export default ProjectList