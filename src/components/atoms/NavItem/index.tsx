import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

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
const NavItem = (props: NavItemProps) => {
    const router = useRouter()
    const { Icon, title, style } = props
    return (
        <NavItemWrapper onClick={() => router.push("/")} style={style}>
            < Icon />
            <p>{title}</p>
        </NavItemWrapper >
    )
}

export default NavItem