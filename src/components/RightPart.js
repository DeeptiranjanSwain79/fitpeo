import React from 'react'
import user from "../images/user.jpg";
import userBackground from "../images/user-background.png";
import { MdHelpOutline } from "react-icons/md";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./RightPart.css"

const RightPart = () => {
  const percentage = 76;
  return (
    <div className='rightpart'>
      <div className="images">
        <img src={userBackground} alt="" />
        <img src={user} alt="" />
      </div>

      <div className="rightpart-1">
        <h5>Jennifer Walter</h5>
        <h6>Product Designer</h6>
      </div>

      <div className="rightpart-2">
        <div>
          <p>1,269</p>
          <span>Products</span>
        </div>
        <div>
          <p>5.2k</p>
          <span>Followers</span>
        </div>
      </div>

      <div className="rightpart-3">
        <p>Earning</p>
        <MdHelpOutline />
      </div>

      <div className="rightpart-4">
      <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>

      <div className="rightpart-5">
        <h3>&#36;50,000</h3>
        <p>Earning of this month</p>
        <h6><span>+2.85&#37;</span> From previous period</h6>
      </div>

      <div className="rightpart-6">
        <h3>Recent Activities</h3>
        <p>No recent activities</p>
      </div>
    </div>
  )
}

export default RightPart
