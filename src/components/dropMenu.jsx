import React from 'react'

export default props =>
    <>
        <div></div>
        <div></div>
        <div></div>
    </>

if (!repo.title)
return (
    <>
        <form onSubmit={handleSubmit} >
            <input type="text" value={type} required onChange={ev => setType(ev.target.value)} />
            <input type="submit" value="Search"></input>
        </form>
    </>
)
return (
<>
    <form onSubmit={handleSubmit} >
        <input type="text" value={type} required onChange={ev => setType(ev.target.value)} />
        <input type="submit" value="Search"></input>
    </form>

    <h2 className='animeTitle'>{repo.title}</h2>
    <img alt='imagem' className='animeImage' src={repo.image}></img>
    <p className='animeSynopsis'>{repo.synopsis}</p>
</>
)
