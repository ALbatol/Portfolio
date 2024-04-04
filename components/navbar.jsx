"use client";
import SideNave from "./sideNave"
import { useState } from "react";
const SideNavArray = [
    { id: '#Skills',
      name: 'Skills'
    }, 
    { id: '#Work_Experience',
      name: 'Work Experience'
    }, 
    {  id: '#Certificates',
      name: 'Certificates'
    },
    {  id: '#Education',
      name: 'Education'
    },
    {  id: '#Contact',
      name: 'Contact'
    }
  ]
const Navbar = ()=> {
    const [openSideNav, setopenSideNav] = useState(false)
    return(
        <>
              {/* nav fir big screens */}
      <div className="float-right md:flex flex-row-reverse hidden min-w-[20%] gap-x-2">

<nav className=" px-[2%] pt-20 space-y-4"> 
{SideNavArray.map((i)=> <>
  {SideNave(i.name, i.id)}
</>
)}
</nav>
<div
className=" inline-block h-[220px] mt-16 min-h-[1em] w-0.5 self-stretch bg-primary dark:bg-white/10"></div>
</div>
{/* nav for small screans  */}
<div className="px-[2%] pt-20 float-right md:hidden flex flex-col items-end" >
  <div className=" " onClick={()=>setopenSideNav((prev) => !prev)}>
<svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
    <path stroke="#96031A" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
</svg>
  </div>


<nav className={`${openSideNav? 'space-y-4 translate-x-0 pb-4' : 'translate-x-full pl-9 overflow-clip'} ease-in-out duration-300`}> 
{SideNavArray.map((i)=> 
<>
{openSideNav? 
<>
{SideNave(i.name, i.id)}
</> : null}
</>
)}
</nav>

</div>
</>
)
}

export default Navbar;