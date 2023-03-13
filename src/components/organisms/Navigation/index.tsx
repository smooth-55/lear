

import SearchInput from "@/components/atoms/SearchInput"
import styled from "styled-components"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import NavItem from "@/components/atoms/NavItem";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import home from "../../../../public/home.svg";
import network from "../../../../public/my-networks.svg";
import jobs from "../../../../public/jobs.svg";
import message from "../../../../public/message.svg";
import bell from "../../../../public/notification.svg";


const StyledNav = styled.div`
    
    height: 3.2rem;
    display: flex;
    gap: 8rem;
    
`

const NavLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    .linked_in_logo:hover{
       cursor: pointer;
    }
    
`
const NavRight = styled.div`
    width: 39rem;
    display: flex;
    align-items: center;
    color: rgba(0,0,0,0.6);
    gap: 25px;
`

const Navigation = () => {
    return (
        <StyledNav>
            <NavLeft>
                <LinkedInIcon className="linked_in_logo" color="primary" style={{ height: "2.7rem", width: "2.7rem", backgroundColor: "#ffffff" }} />
                <SearchInput
                    placeholder={"Search"}
                />
            </NavLeft>

            <NavRight >
                <NavItem Icon={home} title={"Home"} />
                <NavItem Icon={network} title={"My Network"} />
                <NavItem Icon={jobs} title={"Jobs"} />
                <NavItem Icon={message} title={"Messaging"} />
                <NavItem Icon={bell} title={"Notifications"} />
                <NavItem Icon={AccountCircleIcon} title={"Me"} />
            </NavRight>

        </StyledNav >
    )
}

export default Navigation