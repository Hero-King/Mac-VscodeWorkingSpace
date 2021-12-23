import React from 'react'

function Section(props) {
  return <section style={{marginTop: 60, overflow: "auto"}}>
    {props.children}
  </section>
}
export default Section
