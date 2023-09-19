import { FC } from 'react'
import './Menu.scss'

/**
 * Represents a menu element.
 *
 * @typedef {Object} MenuElement
 * @property {string} name - The name of the menu element.
 * @property {string} action - The action associated with the menu element.
 */
export interface MenuElements{
    name: string
    icon?: string
    action : ()=>void
}

/**
 * The props for the Menu component.
 *
 * @typedef {Object} MenuProps
 * @property {MenuElement[]} menuElements - An array of menu elements to display in the menu.
 */
export interface MenuProps {
    menuElements?: MenuElements[]
}


/**
 * A functional component for rendering a menu.
 *
 * @param {MenuProps} props - The props for the Menu component.
 * @returns {JSX.Element} The rendered Menu component.
 */

const Menu : FC<MenuProps> = ({menuElements = []}) => {
  return (
    
    <div className="container">
      {menuElements.map((element, index) => {
        return (
          <div 
          className='element' 
          key={index} 
          onClick={()=>{element.action()}}
          attr-icon={element.icon}
          >
            {element.name}
          </div>
        )
      })}
    </div>
  )
}

export default Menu;