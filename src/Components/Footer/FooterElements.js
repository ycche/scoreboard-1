import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer `
  color: #fff;

`

export const FooterWrapper = styled.div  `
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;

`

export const BottomP = styled.p `
  color: #000;
  font-size: 12.5px;
`


export const LinksContainer = styled.div `
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px){
    padding-top:32px;
  }
`

export const LinksWrapper = styled.div `
  display: flex;

  @media screen and (max-width: 820px){
    flex-direction: column;
  }
`

export const LinkItems =styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #000;

  @media screen and (max-width: 420px){
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`

export const LinkH1 = styled.h1 `
  font-size: 14px;
  margin-bottom: 16px;

`

export const LinkItem = styled(Link)`
  color: #000;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover{
    color: #01bf71;
    transition: 0.3s ease-in-out;
  }
`
export const BottomBar=  styled.div `
  max-width: 1000px;
  width: 100%
`
export const BottomBarWrapper = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 40px auto 0 auto;


`

export const BottomLogo = styled(Link)`
  width: 100%;
  color: #000;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`

export const BottomIconsWrapper = styled.div `
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;
`
export const Icon = styled.a `
  justify-self:start;
  margin-left: 20px;
  text-decoration: none;
  font-size: 2rem;
  cursor: pointer;
  color: #000;

  &:hover{
    transition: all 0.2s ease-in-out;
    color: #01bf71
  }
`
