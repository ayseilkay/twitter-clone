import React from 'react'

function SideLink({name,Icon,onMenuItemClick,active}) {
    const isActive = active === name; //active name e esit ise true döner.
  return (
    <div>
        <li className='group' onClick={()=> onMenuItemClick(name)}>
            <a href={name.toLowerCase()} className='cursor-pointer block text-xl mb-2 pointer-events-none'>
                <div className='inline-block '>
                    <div className={` flex items-center group-hover:bg-primary-light group-hover:text-primary-base rounded-full pl-3 pr-8 py-3
                    ${isActive ? 'text-primary-base' : ''  }
                    `
                }>
                        <Icon/>
                        <span className='ml-4 font-bold'> {name}</span>
                    </div>
                </div>
            </a>
        </li>
    </div>
  )
}

export default SideLink

// pointer event none 'a' etiketinde sayfanın yenilenmesini engeller.