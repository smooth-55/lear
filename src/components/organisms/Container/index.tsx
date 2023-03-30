import FeedContent from "@/components/molecules/FeedContainer/Feed"
import FeedLeftContainer from "@/components/molecules/FeedContainer/Left"
import FeedRightContainer from "@/components/molecules/FeedContainer/Right"
import styled from "styled-components"


const ContainerWrapper = styled.div`
    height: 500vh;
    margin-left: 5rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 22px;

`
const FeedContainer = () => {
    return (
        <ContainerWrapper>
            <FeedLeftContainer />
            <FeedContent />
            <FeedRightContainer />
        </ContainerWrapper>
    )
}

export default FeedContainer