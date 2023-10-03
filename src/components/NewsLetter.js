import React from 'react'
import Circle from '../assets/Ellipse 1.png'

const NewsLetter = () => {
    function validateEmail() {
        var emailInput = document.getElementById('email');
        var email = emailInput.value;
  
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
          alert("Please enter a valid email address.");
          return false; // Prevent form submission
        }
  
        return true; // Allow form submission
      }
  return (
    <div className="newsletter">
        <div className="topnl">
            <div className="leftnl">
                <span>Newsletter</span>
                <span>Get news about articles and updates  <br />in your inbox.</span>
            </div>
            <div className="rightnl">
                <form >
                <input type="text"  placeholder='NAME'/><hr />
                <input type="email" id='email' placeholder='EMAIL'/><hr />
                <input type="text"  placeholder='MESSAGE'/><hr />
                </form>
            </div>
        </div>
        <div className="botnl" >
            <span>GET <br />IN TOUCH</span>
            <img src={Circle} alt="circle" id='circle' onClick={validateEmail}/>
            <span onClick={validateEmail} >SEND</span>
        </div>
        <div className="footer">
            <span>Copyright 2022 All Right Reserved By SG</span>
        </div>
    </div>
  )
}

export default NewsLetter