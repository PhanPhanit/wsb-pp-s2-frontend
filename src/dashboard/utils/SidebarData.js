import React from 'react';
import {
    FaThList,
    FaListUl,
    FaUserAlt,
    FaUserFriends
} from 'react-icons/fa';
import {BsFillJournalBookmarkFill} from 'react-icons/bs';
import {MdDeliveryDining} from 'react-icons/md';

export const SidebarData = [
    {
        id: 1,
        text: "Dashboard",
        path: "",
        icon: <FaThList className="icon" />
    },
    {
        id: 2,
        text: "Category",
        path: "category",
        icon: <FaListUl className="icon" />
    },
    {
        id: 3,
        text: "Books",
        path: "book",
        icon: <BsFillJournalBookmarkFill className="icon" />
    },
    {
        id: 4,
        text: "Orders",
        path: "order",
        icon: <MdDeliveryDining className="icon" />
    },
    {
        id: 5,
        text: "Profile",
        path: "profile",
        icon: <FaUserAlt className="icon" />
    },
    {
        id: 6,
        text: "Users",
        path: "user",
        icon: <FaUserFriends className="icon" />
    }
];