import styled from 'styled-components';

export const LoginWrapper = styled.div`
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: #eee;
`
export const LoginBox = styled.div`
    box-sizing: border-box;
    width: 400px;
    margin: 60px auto;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
`
export const Input = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
    padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
    border-radius: 4px;
    background-color: hsla(0,0%,71%,.1);
`
export const Button = styled.div`
    margin-top: 20px;
    padding: 12px 18px;
    font-size: 18px;
    border-radius: 25px;
    color: #fff;
    background: #3194d0;
    cursor: pointer;
    text-align: center;
`