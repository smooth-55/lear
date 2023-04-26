import { Avatar } from 'antd';
import { FeedLeftContainerWrapper } from "./index.styled";
import styled from 'styled-components';
import { IconText } from '@/components/atoms/IconText';
import Premium from "../../../../../public/premium.svg";
import CustomDivider from '@/components/atoms/Divider';


const SmallText = styled.p`
    font-weight: 400;
    font-size: 12px;
    color:  rgba(0, 0, 0, 0.6);
    width: 100%;
`

const FreeItemWrapper = styled.div`
    width: 100%;
    padding: 0px 10px 0px 10px;
    position: relative;
    
`


const FeedLeftContainer = () => {
    return (
        <FeedLeftContainerWrapper>
            <div className="left__profile__top">
                <div className="cover__image">
                </div>
                <div className="profile">
                    <Avatar shape="circle"
                        size="large"
                        style={{
                            border: "2px solid #fefeff",
                            width: "5rem",
                            height: "5rem",
                        }}
                        src={"https://plus.unsplash.com/premium_photo-1677220229525-a3107cb60ad5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}
                    />
                    <div className="profile__basic">
                        <h4
                            style={{
                                fontWeight: "600",
                                fontSize: "16px",
                                color: " rgba(0, 0, 0, 0.9)",
                            }}
                        >Ashish Dhakal</h4>
                        <SmallText
                            style={{ textAlign: "center" }}
                        >Software Engineer | Go | Python | Django |</SmallText>
                    </div>
                    <CustomDivider />
                    <div className="pv" >

                        <div
                            className="profile__view"
                        >
                            <h6>
                                Who's viewed you profile
                            </h6>
                            <h6 className='action'>53</h6>
                        </div>
                        <div
                            className="profile__view"
                        >
                            <h6>
                                Impressions of your post
                            </h6>
                            <h6 className='action'>581</h6>
                        </div>
                    </div>
                    <CustomDivider />
                    <FreeItemWrapper>

                        <a
                            href='#'
                            style={{
                                color: "rgba(0, 0, 0, 0.6)",

                            }}
                        > <SmallText>Access exclusive tools & insights</SmallText> </a>

                        <IconText
                            Icon={Premium}
                            title={"Try premium for free"}

                        />
                    </FreeItemWrapper>
                    <CustomDivider />
                </div>

            </div>
            <div className="left__recent__bottom">

            </div>

        </FeedLeftContainerWrapper>

    )
}

export default FeedLeftContainer