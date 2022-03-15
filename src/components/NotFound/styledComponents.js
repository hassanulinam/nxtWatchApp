import styled from 'styled-components'

export const NotFoundRouteContainer = styled.div`
  background-color: ${props => props.bgColor};
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  left: 0;
  width: 100%;
  height: 100vh;
`

export const SideBarAndNotFoundContents = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
`

export const NotFoundCard = styled.div`
  position: absolute;
  top: 65px;
  left: 250px;
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 10% 15%;
  @media screen and (max-width: 767px) {
    justify-content: center;
    left: 0;
    margin: 50% 10%;
  }
`

export const NotFoundImg = styled.img`
  width: 250px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`

export const NotFoundHeading = styled.h1`
  margin-top: 20px;
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
  color: ${props => props.color};
  @media screen and (max-width: 767px) {
    font-size: 22px;
  }
`

export const NotFoundText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${props => props.color};
`
