import styled from "styled-components"


const FeedRightContainerWrapper = styled.div`
    height: 150vh;
    width: 19rem;
    display: flex;
    flex-direction: column;
    gap: 15px;
    .about__feed{
            border:1px solid blue;
            height: 35vh;
            width: 100%;
        }
        .right__bottom{
            border:1px solid green;
            height: 50vh;
            width: 100%;
            position: sticky;
            top: 5rem;
        }
`
const FeedRightContainer = () => {
    return (
        <FeedRightContainerWrapper>
            <div className="about__feed">


            </div>
            <div className="right__bottom">

            </div>
        </FeedRightContainerWrapper>
    )
}

export default FeedRightContainer