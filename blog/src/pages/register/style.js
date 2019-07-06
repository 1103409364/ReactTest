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
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -200px;
    margin-top: -200px;
    box-sizing: border-box;
    padding: 50px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
`
export const LoginTitle = styled.h4`
    width: 142px;
    margin: 0 auto 30px auto;
    padding: 10px;
    font-weight: 400;
    color: #969696;
    span {
        padding: 10px;
        cursor: pointer;
        font-size: 18px;
    };
    overflow: hidden;
`
export const SignIn = styled.span`
    font-weight: 700;
    border-bottom: 2px solid #fff;
    float: left;
    color: #969696;
    margin-right: 30px;
`
export const SignUp = styled.span`
    font-weight: 700;
    color: #ea6f5a;
    border-bottom: 2px solid #ea6f5a;
    float: left;
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