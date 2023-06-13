import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import './NewAccountButton.css'

const NewAccountButton = ({setIsOpen}) => {
  return (
    <button className='new-account-button' onClick={() => setIsOpen(true)}>
      <AiOutlinePlus size={18} className='icon' />
      <p>Yeni Hesap Ekle</p>
    </button>
  )
}

export default NewAccountButton