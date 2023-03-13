import Navigation from "@/components/organisms/Navigation"
import styled from "styled-components"



const HomeWrapper = styled.div`
    height: 100vh;
    background-color: #f2f3ef;

    .navigation{
      padding: 0px 0px 0px -100px;
      width: 100%;
      display: flex;
      justify-content: center;
      background-color: #ffffff;
    }

  
`


const Home = () => {

  return (
    <HomeWrapper>
      <div className="navigation">
        <Navigation />
      </div>
    </HomeWrapper>
  )
}

export default Home