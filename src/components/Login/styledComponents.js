import styled from 'styled-components'

export const LoginResponsiveContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginForm = styled.form`
  font-family: 'Roboto';
  box-shadow: 0 8px 40px rgba(7, 7, 7, 0.3);
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fefeff;
  border-radius: 8px;

  @media screen {
    padding: 60px 48px 48px 48px;
  }
`

export const WebsiteLogoImg = styled.img`
  height: 48px;
`

export const Label = styled.label`
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #262626;
  margin-bottom: 8px;
  margin-top: 24px;
`

export const Input = styled.input`
  width: 312px;
  background: #eeeeee;
  border-radius: 2px;
  border: none;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #262626;
  padding: 8px 16px;

  @media screen and (min-width: 768px) {
    width: 360px;
  }
`

export const SubmitBtn = styled.button`
  width: 312px;
  height: 40px;
  background: #4094ef;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  margin-top: 8px;

  @media screen and (min-width: 768px) {
    width: 360px;
    margin-top: 16px;
  }
`

export const ErrMsg = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #ef4444;
`
