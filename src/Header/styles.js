import styled from "styled-components";

export const HeaderComponent = styled.header`
    width: 100%;
    position: fixed;
    height: 70px;
    top: 0;
    left: 0;
    z-index: 9999;
    background-color: #5c9ecf;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    & img{
        max-width: 100px;
        margin-left: 100px;
        margin-right: 10px;
        background-color: rgb(238, 238, 238);
        padding: 20px 5px;
    }
`