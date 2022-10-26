import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import "./MainPart.css";
import flag from "../images/flag.jpg";
import notification from "../images/notification.png";
import user from "../images/user.jpg";
import { MdOutlineDashboard } from "react-icons/md";
import { FcSettings } from "react-icons/fc";

const Header = () => {
    return (
        <div className='header'>
            <h3>Dashboard</h3>

            <div>
                <AiOutlineSearch />
                <img src={flag} alt="" width={22} />
                <MdOutlineDashboard />
                <img src={notification} alt="" width={22} />
                <FcSettings />
                <img src={user} alt="" width={20} />
            </div>
        </div>
    )
}

export default Header
