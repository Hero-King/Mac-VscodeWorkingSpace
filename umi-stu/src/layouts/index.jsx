import React from 'react'
import Header from '@/components/header/header'
import Section from '@/components/section/index'

export default (props) => {
  console.log(props)
  return <>
  <Header/>
  <Section>
    {props.children}
  </Section>
  </>
}
