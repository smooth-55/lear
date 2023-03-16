import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import PointDown from "../../../../public/pointDown.svg";


type NavItemProps = {
    Icon: React.ElementType
    title?: string
    path?: string
    style?: object
}

const NavItemWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
:hover{
    cursor: pointer;
}
p{
    font-size: .8rem;
    width: 100%;
    text-align: center;
}
`
const NavItemPointingDownWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
:hover{
    cursor: pointer;
}

   
`
export const NavItem = (props: NavItemProps) => {
    const router = useRouter()
    const { Icon, title, style } = props
    return (
        <NavItemWrapper onClick={() => router.push("/")} style={style}>
            < Icon />
            <p>{title}</p>
        </NavItemWrapper >
    )
}
export const NavItemPointingDown = (props: NavItemProps) => {
    const router = useRouter()
    const { Icon, title, style } = props
    return (
        <NavItemPointingDownWrapper onClick={() => router.push("/")} style={style}>
            < Icon />
            <div style={{ display: "flex", gap: "2px" }} >
                <p style={{ fontSize: ".8rem" }}>{title} </p>
                <p><PointDown /></p>
            </div>
        </NavItemPointingDownWrapper >
    )
}

