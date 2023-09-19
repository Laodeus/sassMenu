import { FC } from 'react'
import './App.scss'
import Menu, { MenuElements } from './components/Menu'


const menuElements : MenuElements[] = [
  {
    name: 'Home',
    icon: '⌂',
    action: ()=>{console.log('home')}
  },
  {
    name: 'About',
    icon: 'ℹ',
    action: ()=>{console.log('about')}
  },
  {
    name: 'Contact',
    icon: '✉️',
    action: ()=>{console.log('contact')}
  },
  
]


const App : FC = () =>  {
  return (
   <>
    <Menu menuElements={menuElements}/>
   </>
  )
}

export default App
