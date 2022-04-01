import React from 'react'


const ChirpCard = ({userid, content, _created, handleDeleteChirp, id, handleUpdateChirp}) => {
    return (
        <>
            <h3>{userid}</h3>
            <p>{content}</p>
            <p>{_created}</p>

            <button onClick={() => handleUpdateChirp(id, content)}>Update</button>
            <button onClick={() => handleDeleteChirp(id)}>Delete</button>
            
            
        </>
    )
}

export default ChirpCard;