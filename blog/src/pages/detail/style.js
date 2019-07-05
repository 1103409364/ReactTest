import styled from 'styled-components';

export const DetailWrapper = styled.div`
    width: 620px;
    margin: 0 auto;
    padding-top: 30px;
    &::after {
        content: '';
        clear: both;
        display: table;
        width: 0;
        height: 0;
        visibility: hidden;
    }
`
export const Header = styled.div`
    margin-top: 50px 0 20px 0;
    line-height: 44px;
    font-size: 34px;
    color: #333;
    font-weight: bold;
`
export const Content = styled.div`
    color: #2f2f2f;
    img {
        width: 100%;
    }
    p {
        margin: 25px 0;
        font-size: 16px;
        line-height: 30px;
    }
`