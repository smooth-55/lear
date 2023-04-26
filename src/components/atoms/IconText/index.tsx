import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

type IconTextProps = {
    Icon: React.ElementType
    title?: string
    path?: string
    style?: object
    isLink?: boolean

}


const IconTextWrapper = styled.div`
    display: flex;
    font-size: 12px;
    align-items: center;
    color: rgba(0, 0, 0, 0.8);
`
export const IconText = (props: IconTextProps) => {
    const router = useRouter()
    const { Icon, title, style } = props
    return (
        <IconTextWrapper onClick={() => router.push("/")} style={style}>
            < Icon />
            <p>{title}</p>
        </IconTextWrapper >
    )
}

