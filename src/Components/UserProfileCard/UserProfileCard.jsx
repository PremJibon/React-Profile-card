import React from 'react'
import "./UserProfileCard.css"
import proflie_icon from '../Assets/p.jpg'

const UserProfileCard = ()=>{
  return(
    <div className='upc'>
      <div className="gradient"></div>
      <div className="profile-down">
        <img src={proflie_icon} alt=''/>
        <div className="profile-title">Prem Jibon</div>
        <div className="profile-description">   
        I'm Prem, a proficient programmer with expertise in JavaScript and Python. Through hands-on experience, I've honed my skills in developing web applications, automation tools, and more. I thrive on crafting elegant code that brings ideas to life and solves real-world problems.        </div>
        <div className="profile-button"><a href="https://www.facebook.com/prem.jibon.7/">Contact Me</a></div>
      </div>
    </div>
  )
}
export default UserProfileCard