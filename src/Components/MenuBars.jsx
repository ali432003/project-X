import {useState} from 'react'
import menuBars from '/assets/bar.png'
import crossImg from '/assets/cross.png'

const MenuBars = () => {

  const [cross ,setCross] = useState(false)
  let showCross = ()=>{
    setCross(cross => !cross);
  }

  return (
    <>
        <img src={cross ? crossImg  :menuBars} onClick={showCross} className='w-[1.5rem] drop-shadow-lg transition ease-in-out duration-200'/>
    </>
  )
}

export default MenuBars