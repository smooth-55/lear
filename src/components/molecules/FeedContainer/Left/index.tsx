import styled from "styled-components"


const FeedLeftContainerWrapper = styled.div`
        height: 150vh;
        width: 17rem;
        display: flex;
        flex-direction: column;
        gap: 10px;
        .left__profile__top{
            border:1px solid blue;
            height: 35vh;
            width: 100%;
        }
        .left__recent__bottom{
            border:1px solid green;
            height: 50vh;
            width: 100%;
            position: sticky;
            top: 5rem;
        }

`

const FeedLeftContainer = () => {
    return (
        <FeedLeftContainerWrapper>
            <div className="left__profile__top">


            </div>
            <div className="left__recent__bottom">

            </div>

        </FeedLeftContainerWrapper>

    )
}

export default FeedLeftContainer