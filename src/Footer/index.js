import React from 'react'
import styled from 'styled-components'

const Footer = styled.header`
  border-top: 1px solid rgba(72, 72, 72, 0.2);
  margin-top: 64px;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default () => {
  return (
    <Footer>
      <Content>

      </Content>
    </Footer>
  )
}