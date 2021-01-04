import React from "react";
import './Site-header.css'
import { Button } from "react-bootstrap";

interface IHeaderProps {
    isLoggedIn: boolean;
    logoutHandler: Function
}

function SiteHeader({isLoggedIn, logoutHandler}: IHeaderProps) {
    const imageSource = 'https://media-exp1.licdn.com/dms/image/C4D0BAQFRSFBqokB5qw/company-logo_100_100/0/1519935265252?e=1617235200&v=beta&t=bTgu80niTcSiR-hMQngWAT5_PJHGEn1zjX7gDqlt6Rc'

    return (
        <div className='site-header'>
            <img src={imageSource} className="circle"/>
            <h4>Corona Statistics</h4>
            {isLoggedIn ?
                <div className='user-avatar'>
                    <Button variant="info" onClick={() => logoutHandler(false)}>Logout</Button>
                </div> : null
            }
        </div>
    )
}

export default SiteHeader;
