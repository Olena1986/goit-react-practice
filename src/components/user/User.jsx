export function User({ user: { name, email,id },deleteUser }) {
    
    return (
        <>
            <p>Name:{name}</p>
            <p>Email:{email}</p>
            <button onClick={()=>deleteUser(id)}>Delete</button>
        </>
    )
}