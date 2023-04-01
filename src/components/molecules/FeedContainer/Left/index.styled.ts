import styled from "styled-components";

export const FeedLeftContainerWrapper = styled.div`
        width: 17rem;
        display: flex;
        flex-direction: column;
        gap: 10px;
        .left__profile__top{
            height: 35vh;
            border-radius: 12px;
            background-color: #fefeff;
            .cover__image{
                height: 3.2rem;
                border-radius: 12px 12px 0px 0px;
                background: url("https://images.unsplash.com/photo-1564419434663-c49967363849?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80")
            }

        }
        .left__recent__bottom{
            height: 50vh;
            width: 100%;
            position: sticky;
            top: 5rem;
            border-radius: 12px;
            background-color: #fefeff;
            
        }
        .profile {
            margin-top:  -2rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .profile__basic{
            margin-top:1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            gap: 3px;
        }
        .pv{
           width : 100%;
           display: flex;
           flex-direction:column;
           gap: 1rem;
           font-size: 1.1rem;
        }
         .profile__view{
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content:space-between;
            padding: 0px 10px 0px 10px;
            color: rgba(0, 0, 0, 0.75);
            font-size: 18px;
            
            :hover{
                cursor: pointer;

            }

        }
        .action {
            color: #0a66c2;
        }

`
