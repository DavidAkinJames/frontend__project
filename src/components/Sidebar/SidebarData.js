import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
export const SidebarData = [
    {
        title: "Overview",
        icon: <AiIcons.AiFillGold/>,
        link: '/overview'
    },
    {
        title: "Homepage",
        icon: <AiIcons.AiFillHome/>,
        link: '/'
    },
    {
        title: "Photography",
        icon: <FaIcons.FaPhotoVideo/>,
        link: '/photography'
    },
    {
        title: "Paintings",
        icon: <FaIcons.FaPaintRoller/>,
        link: '/paintings'
    },
    {
        title: "Sound",
        icon: <AiIcons.AiOutlineAudio/>,
        link: '/sound'
    },
    {
        title: "Frames",
        icon: <AiIcons.AiOutlineBorder/>,
        link: '/frames'
    },
    {
        title: "Voiceover",
        icon: <AiIcons.AiOutlineAudio/>,
        link: '/voiceover'
    },
    {
        title: "About Us",
        icon: <FaIcons.FaPeopleCarry/>,
        link: '/about us'
    },
    {
        title: "Contact Us",
        icon: <FaIcons.FaPhone/>,
        link: "/contact us"
    },
    {
        title: "Pricing",
        icon: <FaIcons.FaMoneyBillAlt />,
        link: "/pricing"
    }
]