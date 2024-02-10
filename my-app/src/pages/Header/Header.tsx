import React, { useState,useMemo, useEffect  } from 'react'
import '@/styles/DishContainer.module.css'
import { Link } from 'react-router-dom'
import Backet from '@/assets/backet.svg'
import Search from '@/assets/search.svg'
import Menu from '@/assets/menu.svg'
import Logo from '@/assets/simpleLogo.svg'
import '@/styles/Header.styles.css'
import { useAppSelector } from '@/Hooks/redux/redux'

const Header = React.memo(() => {

    const name = 'Кафе Logo'

    const {dishes} = useAppSelector(state => state.backetReducer)
    const [dish,setDish] = useState(0)

    useEffect(()=> {
        if(dishes.length === undefined) dishes.length = 0;
        setDish(dishes.length)
    },[dishes])
    

console.log(dishes)

    return (
        <div className='header'>
        <div className="header-buttons">

                <div className="header-buttons-menu">
                    <Menu color={"white"} width={28} height={28}/>
                </div>

                <div className="header-buttons-search">
                    <Search color={"white"} width={40} height={40}/>
                </div>

                <Link to={'/'}> 
                    <div className="header-buttons-member-name">
                        <Logo color={"white"} width={40} height={40}/>
                    </div>
                </Link>

                <Link to={'/backet'}> 
                    <div className="header-buttons-backet-button">
                        <Backet color={"white"} width={40} height={40}/>
                        {dishes.length ? <span className="header-buttons-backet-count">{dish}</span>
                        : <></>}
                    </div>
                </Link>
        </div>
        </div>
    )
})

export default Header
