import React from 'react';
import { ProSidebarProvider, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineCalendarToday } from "react-icons/md";
import { RiWechat2Line } from "react-icons/ri";
import { FcLike } from "react-icons/fc";
import { FcManager } from "react-icons/fc";
import { AiOutlineInbox } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiFillAppstore } from "react-icons/ai";
import { AiFillFolderOpen } from "react-icons/ai";
import { AiTwotoneEdit } from "react-icons/ai";
import "./Sidebar.css"

const SideBar = () => {
  // const { collapseSidebar } = useProSidebar();

  return (
    <div className='sidebar'>
      <ProSidebarProvider>
        <Menu>
          <h4>Menu</h4>
          <SubMenu icon={<MdOutlineDashboard />} label="Dashboards" defaultOpen="true">
            <MenuItem className='sub-menu-item'> Ecommerce </MenuItem>
            <MenuItem className='sub-menu-item'> Sass </MenuItem>
            <MenuItem className='sub-menu-item'> Crypto </MenuItem>
          </SubMenu>

          <h4>Application</h4>
          <MenuItem icon={<MdOutlineCalendarToday />}> Calendar </MenuItem>
          <MenuItem icon={<RiWechat2Line />} suffix={<FcLike />}> Chat </MenuItem>
          <MenuItem icon={<AiOutlineInbox />}> File Manager </MenuItem>

          <SubMenu icon={<MdOutlineDashboard />} label="ECommerce">
            <MenuItem className='sub-menu-item'> Ecommerce </MenuItem>
            <MenuItem className='sub-menu-item'> Sass </MenuItem>
            <MenuItem className='sub-menu-item'> Crypto </MenuItem>
          </SubMenu>

          <SubMenu icon={<MdOutlineDashboard />} label="Email">
            <MenuItem className='sub-menu-item'> Ecommerce </MenuItem>
            <MenuItem className='sub-menu-item'> Sass </MenuItem>
            <MenuItem className='sub-menu-item'> Crypto </MenuItem>
          </SubMenu>

          <SubMenu icon={<MdOutlineDashboard />} label="Invoices">
            <MenuItem className='sub-menu-item'> Ecommerce </MenuItem>
            <MenuItem className='sub-menu-item'> Sass </MenuItem>
            <MenuItem className='sub-menu-item'> Crypto </MenuItem>
          </SubMenu>

          <SubMenu icon={<MdOutlineDashboard />} label="Projects">
            <MenuItem className='sub-menu-item'> Ecommerce </MenuItem>
            <MenuItem className='sub-menu-item'> Sass </MenuItem>
            <MenuItem className='sub-menu-item'> Crypto </MenuItem>
          </SubMenu>

          <SubMenu icon={<MdOutlineDashboard />} label="Contacts">
            <MenuItem className='sub-menu-item'> Ecommerce </MenuItem>
            <MenuItem className='sub-menu-item'> Sass </MenuItem>
            <MenuItem className='sub-menu-item'> Crypto </MenuItem>
          </SubMenu>

          <h4>Layouts</h4>
          <h4>Pages</h4>

          <MenuItem icon={<AiOutlineUserAdd />} suffix={<FcManager />}>Authentication</MenuItem>

          <SubMenu icon={<AiFillAppstore />} label="Utility">
            <MenuItem className='sub-menu-item'> Ecommerce </MenuItem>
            <MenuItem className='sub-menu-item'> Sass </MenuItem>
            <MenuItem className='sub-menu-item'> Crypto </MenuItem>
          </SubMenu>

          <h4>Components</h4>

          <SubMenu icon={<AiFillFolderOpen />} label="UI Elements">
            <MenuItem className='sub-menu-item'> Ecommerce </MenuItem>
            <MenuItem className='sub-menu-item'> Sass </MenuItem>
            <MenuItem className='sub-menu-item'> Crypto </MenuItem>
          </SubMenu>

          <SubMenu icon={<AiTwotoneEdit />} label="Forms">
            <MenuItem className='sub-menu-item'> Ecommerce </MenuItem>
            <MenuItem className='sub-menu-item'> Sass </MenuItem>
            <MenuItem className='sub-menu-item'> Crypto </MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebarProvider>
      {/* <main>
          <button onClick={() => collapseSidebar()}>Collapse</button>
        </main> */}
    </div>
  );
}

export default SideBar
