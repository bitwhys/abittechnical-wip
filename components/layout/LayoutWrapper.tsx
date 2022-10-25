import React from 'react'
import Header from '../Header'

export type LayoutWrapperProps = {
  children: any
}

const LayoutWrapper = ({children}: LayoutWrapperProps) => {
  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}

export default LayoutWrapper
