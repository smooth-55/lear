import styled from "styled-components"


const ContainerWrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items:center;

`
const FeedContainer = () => {
    return (
        <ContainerWrapper>
            <h2>Feed page</h2>
        </ContainerWrapper>
    )
}

export default FeedContainer