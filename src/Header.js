import React from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from "@material-ui/core";
function Header() {
    return (
        <div className = "header">
            <div className="header__left">
                <img src="data:image/jpeg;base64,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" alt="" />
                <div className="header__input">
                    <SearchIcon/>
                    <input placeholder="Search Facebook" type="text"/>
                </div>
            </div>
            <div className="header__middle">
                <div className="header__option header__option--active">
                    <HomeIcon/>
                </div>
                <div className="header__option">
                    <FlagIcon/>
                </div>
                <div className="header__option">
                    <SubscriptionsIcon/>
                </div>
                <div className="header__option">
                    <StorefrontOutlinedIcon/>
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon/>
                </div>
                

            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar />
                    <h4>fkdlslds</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header;
