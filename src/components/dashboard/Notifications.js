import { compose } from "redux"
import { connect } from "react-redux"
import { firestoreConnect } from "react-redux-firebase"
import moment, { normalizeUnits } from "moment"

const Notifications=({props})=>{
   // const {notification} = props
    console.log(props)
    return(
        <div className="project-list section">
                <div className="card z-depth-0 project-summary">
                    <div className="card-title center z-depth-0 section">Notifications</div>
                  {
                    props && props.map((widget)=>{
                        return <Widget widget = {widget} />
                    })
                  }
                </div>
            </div>
    )
}

const Widget=({widget})=>{
    return(
        <>
        
        <div class="divider"></div>
        <div className="card-content grey-text text-darken-3 ">
            <span className="red-text">{widget.user + " "}</span>
            <span>{widget.content}</span>
            <p className="grey-text">{moment(widget.time.toDate()).calendar() }</p>
        </div>
        </>
    )
}




export default Notifications