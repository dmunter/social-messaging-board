const initState ={
    projects:[
        {id: '1', author: 'Drew',title: 'A discussion on USD', content: 'some content....', Date: 'Today' },
        {id: '2', author: 'Ross',title: 'A discussion on plants', content: 'some content....', Date: 'Today'},
        {id: '3', author: 'Kotlon',title: 'A discussion on energy', content: 'some content....', Date: 'Today'},
    ]
}


//reducer takes in the state and the action creator

const projectReducer = (state = initState, action) =>{
    
    switch(action.type){
        case "CREATE_POST":
            console.log(action.project.content)
            return(state, {
                key: 123,
                content: action.project.content, 
                title: action.project.content
            })
        case "CREATE_PROJECT_ERROR":
            console.log(action.error)
        
        default:
            return state
            
    }
  
}



export default projectReducer