import { useState } from "react"  

export const Anecdotas = (props)=>{
    const total = props.anecdotes.length
    const votesInit = Array(total).fill(0)

    const [selected, setSelected] = useState(0)
    const [votesList,setvotesList] = useState(votesInit)
    const [maxVote, setMaxVote] = useState(null)

    const nextAnecdote = ()=>{
        setSelected(Math.floor(Math.random()*10%total))
    }
    const updateVotes = (votes)=>{
        const newArray = votesList.map( (item, index)=>
            index == selected?votes:item    
        )
        setvotesList(newArray)
        showMaxVote()
    }
    const showMaxVote = ()=>{
        const max = Math.max(...votesList)
        const indexMax = votesList.findIndex( value=>value===max)

        const newMaxVote = {
            message: props.anecdotes[indexMax],
            votes: max
        }
        setMaxVote(newMaxVote)
    }
    return(
    <>
        <h1>Anecdotas</h1>
        <p>{props.anecdotes[selected]}</p>
        <button onClick={()=>{nextAnecdote()}}>Siguiente anecdota</button>  
        <button onClick={()=>{ updateVotes(votesList[selected] + 1) }}>Votar</button>
        <h3>Numero total de votos: {votesList[selected]}</h3> 
        {   maxVote
            ?<div>
                <h3>Anecdota mas votada</h3>
                <p>{maxVote.message}<strong>numero de votos {maxVote.votes}</strong></p>
            </div>
            :<p>Aun no hay votos :(</p>
        }
    </>
)}
//<p>{props.anecdotes[selected]}</p>