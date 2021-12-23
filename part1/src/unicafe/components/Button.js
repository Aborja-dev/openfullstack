export const Button = ({label, state})=>{
    const [value, valueHandler] = state
    return (
        <>
            <button onClick={()=>{valueHandler(value+1)}}>{label}</button>
        </>
    )
}

