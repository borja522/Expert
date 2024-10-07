import './Aplicacion.css'
import Aplicacion from './Aplicacion.js'
import SlamMix from './Assets/img/SlamMix.jpeg'
import { useState } from "react";
import { BsArrowLeftShort, BsSearch, BsChevronDown } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";


import './App.css';
import './index.css';

function App() {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setsubmenuOpen] = useState(false);
  const Menus = [
    { title: "Dashboard" },
    { title: "Pages" },
    { title: "Media", spacing: true },
    {
      title: "Projects",
      submenu: true,
      submenuItems: [
        { title: "Submenu 1" },
        { title: "Submenu 2" },
        { title: "Submenu 3" },
      ],
    },
    { title: "Analytics" },
    { title: "Inbox" },
    { title: "Profile", Spacing: true },
    { title: "Settings" },
    { title: "Logout" },
  ];

  return (
    <div className='flex'>
      <div className={'bg-dark-purple h-screen top-20 p-5 pt-8 ${open ? "w-75" ; "w-20"} duration-300 relative'}>
        <BsArrowLeftShort className={'bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 borderborder-dark-purple cursor-pointer ${!open && "rotate-180"}'} onClick={() =>setOpen(!open)} />
      
        <div className="inline-flex">
          <AiFillEnvironment className={'bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${!open && "rotate-[360deg]"'} />
          <h1 className={'text-white origin-left font-medium text-2xl duration-300 ${!open && scale-0}'}>Tailwind</h1>
        </div>

        <div className={'flex items-center rounded-md bg.light-white mt-6 ${!open ? "px-2.5" : "px-4"} py-2'}>
        <BsSearch className={'text-white text-lg block float-left cursor-pointer ${!open &&  "mr-2"}'} />

          <input type={"search"} placeholder="Search" className={'text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"}'}></input>
        </div>

        <ul className="pt-2">
          {Menus.map((menu, index) => {
            <>
              <li key={index} className={'text-grey-300 text-sm- flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.spacing ? "mt-9" : "mt-2"} mt-2'}>
                <span className="text-2xl block float-left">
                  <RiDashboardFill />
                </span>
                <span className={'text-base font-medium flex-1 duration-200 ${!open && "hidden"}'}>{menu.title}</span>
                {menu.submenu && (
                  <BsChevronDown className="" onClick={ () => setsubmenuOpen(!submenuOpen ) } />
                )}
              </li>

              {menu.submenu && (
                <ul>
                  {menu.submenuItems.map((submenuItem, index) => (
                    <li key={index} className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-light-white rounded-md">
                      {submenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          })}
        </ul>

      </div>

      <div className="App">
        <header>

          <Aplicacion />
          <div className="logo">
            <img src={SlamMix} className="logo"></img>
          </div>

        </header>
      </div>
    </div>
  );
}

export default App;
