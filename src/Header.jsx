import './Header.css'

export default function Header() {
  return (
    <>
        <header className='header--container'>
            <img src='/images/troll-face.png' />
            <div className='header--title'>Meme Maker</div>
            <div className='header--subtitle'>Made with Vite React</div>
        </header>
    </>
  )
}

