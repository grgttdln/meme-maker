import React from 'react'
import './Meme.css'

export default function Meme() {

    const [allMemeImages, setAllMemeImages] = React.useState([])
    
    React.useEffect(function() {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(datas => setAllMemeImages(datas.data.memes))
    }, [])

    const [memeImage, setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1g8my4.jpg"
    })


    function getMeme() {
        var randomPicture = allMemeImages[Math.floor(Math.random()*allMemeImages.length)]
        setMemeImage(function(prev) {
            return {
                ...prev,
                randomImage: randomPicture.url
            }
        })
    }


    function handleMemeChange(event) {
        const {name, value} = event.target
        setMemeImage(prevData => {
            return ({
                ...prevData,
                [name]: value
            })
        })
    }

    return (
    <>
        <main>
            <div className='meme--container'>
                <div className='meme--form'>
                    <input
                        type="text"
                        placeholder="Top Text"

                        name="topText"
                        value={
                                memeImage.topText.length <= 18
                                ?
                                    memeImage.topText
                                :
                                    ''
                              }
                        onChange={handleMemeChange}
                    />
                    <input
                        type="text"
                        placeholder="Bottom Text"

                        name="bottomText"
                        value={
                            memeImage.bottomText.length <= 18
                            ?
                                memeImage.bottomText
                            :
                                ''
                              }
                        onChange={handleMemeChange}
                    />
                </div>
                <div className='meme--form'>
                    <button onClick={getMeme}>Get a New Meme Image</button>
                </div>
            </div>

            
            <div className='meme--image-container'>
                <h2 className='meme--text top'>{memeImage.topText}</h2>
                <img className='meme--image' src={memeImage.randomImage} />
                <h2 className='meme--text bottom'>{memeImage.bottomText}</h2>
            </div>
        </main>
    </>
    )
}
