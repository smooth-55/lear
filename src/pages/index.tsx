import FeedContainer from "@/components/organisms/Container"
import Navigation from "@/components/organisms/Navigation"
import styled from "styled-components"


const HomeWrapper = styled.div`
    background-color: #f2f3ef;
`

const Home = () => {

  return (
    <HomeWrapper>
      <Navigation />
      <FeedContainer />
    </HomeWrapper>
  )
}

export default Home