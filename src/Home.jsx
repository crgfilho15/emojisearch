import React, {useEffect, useState} from 'react'
import EmojiData from './Emoji.json'
import './Home.css'

export default function Home() {
    const [search, setSearch] = useState('')
    const [data, setData] = useState([])

    useEffect( () => {
        const newData = EmojiData.filter(emoji => emoji.title.toLowerCase().includes(search.toLowerCase())).slice(0, 20)
        setData(newData)
    },[search])

  return (
      <div>
        <div className='title'>
            <img src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png" width="32" height="32" alt=""/>
            <h1 className='spacing'>Emoji Search</h1>
            <img src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png" width="32" height="32" alt=""/>
        </div>

        <div className='containerInput'>
            <input className='input' type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)} ></input>
        </div>

        {data.map(emoji => <div>
            <div class="card">
                <div class="card-body align" onClick={() => navigator.clipboard.writeText(emoji.symbol)} >
                    {emoji.symbol} {emoji.title}
                    <div>
                        <span class="span">Click to copy emoji</span>
                    </div>
                </div>
                
            </div>
        </div>)}

    </div>
  )
}
