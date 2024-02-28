import React from 'react'
import { Link } from 'react-router-dom'
import { CgMenuLeft } from 'react-icons/cg'

const Header = () => {

    const openNav = () => {
        const navbar = document.querySelector(".navbar");
        const listItems = document.querySelectorAll(".list-item");

        navbar.classList.toggle("open");

        listItems.forEach(item => {
            item.addEventListener("click", () => {
                navbar.classList.remove('open')
            })
        });
    }

    return (
        <>
            <header className='header flex lg:flex-row items-center justify-between w-full'>
                <Link to="/">
                    <img src="./assets/shared/logo.svg" alt="space tourism logo" title='Space Tourism' />
                </Link>

                <nav className='navbar'>
                    <ul className='lg:flex lg:justify-end gap-6'>
                        <li className='list-item'>
                            <Link to='/' className='lg:text-white lg:flex lg:items-center'><span className='lg:text-4xl lg:font-bold mr-2'>00</span>Home</Link>
                        </li>
                        <li className='list-item'>
                            <Link to='/destination' className='lg:text-white lg:flex lg:items-center'><span className='lg:text-4xl lg:font-bold mr-2'>01</span>Destination</Link>
                        </li>
                        <li className='list-item'>
                            <Link to='/crew' className='lg:text-white lg:flex lg:items-center'><span className='lg:text-4xl lg:font-bold mr-2'>02</span>Crew</Link>
                        </li>
                        <li className='list-item'>
                            <Link to='/technology' className='lg:text-white lg:flex lg:items-center'><span className='lg:text-4xl lg:font-bold mr-2'>03</span>Technology</Link>
                        </li>
                    </ul>
                </nav>

                <div className='lg:hidden'>
                    <button onClick={openNav}>
                        <CgMenuLeft className='text-white text-4xl' />
                    </button>
                </div>

            </header>
        </>
    )
}

export default Header