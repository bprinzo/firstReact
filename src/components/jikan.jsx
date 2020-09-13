import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default props => {
    const [repo, setRepo] = useState([
        { image: '', title: '', synopsis: '' }
    ]);
    const [type, setType] = useState('');

    const handleSubmit = (ev) => {
        ev.preventDefault();
        setRepo({ image: '', title: type, synopsis: '' })
    }
    




    useEffect(() => {
        if(repo.title)
            (async () => {
                const res = await axios.get('https://api.jikan.moe/v3/search/anime?q=' + repo.title + '')
                    .then(function (response) {
                        axios.get('https://api.jikan.moe/v3/anime/' + response.data.results[0].mal_id + '')
                            .then(function (response) {
                                setRepo({ image: response.data.image_url, title: response.data.title, synopsis: response.data.synopsis })
                                console.log(response)                                
                            })
                            .catch(function (error) {
                                console.log(error);
                            })
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            })();
    }, [repo.title]);


    if (!repo.title)
        return (
            <>
                <h1>Anime Search: </h1>
                <form onSubmit={handleSubmit} >
                    <input type="text" value={type} required onChange={ev => setType(ev.target.value) } />
                    <input type="submit" value="Search"></input>
                </form>
            </>
        )
    return (
        <>
            <h1>Search: </h1>
            <form onSubmit={handleSubmit} >
                <input type="text" value={type} required onChange={ev => setType(ev.target.value)} />
                <input type="submit" value="Search"></input>
            </form>

            <h2 className='animeTitle'>{repo.title}</h2>
            <img alt='imagem' className='animeImage' src={repo.image}></img>
            <p className='animeSynopsis'>{repo.synopsis}</p>
        </>
    )


};