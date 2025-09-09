const Card = (props) =>{
    return(
        <div>
            <input type="text" onChange={(e)=>props.setName(e.target.value)} />
            <p>{props.title} : {props.name}</p>
        </div>
    )
}
export default Card
//Passing Props as children and Function in React vite
//State Lifting in React vite 