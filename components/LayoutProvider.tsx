"use client"
import { ConfigProvider } from 'antd'
import th_TH from 'antd/locale/th_TH'
import React from 'react'
import ScrollToTop from './ScrollToTop'
import { useSelector } from 'react-redux'

const LayoutProvider = ({ children } : {children: React.ReactNode}) => {
    const { theme } = useSelector((state:any) => state.themes);

    return (
    <html lang="en">
        <head>
            <link rel="stylesheet" href={`../css/${theme}.css`}/>
        </head>
        <body>
            <ScrollToTop/>
            <ConfigProvider locale={th_TH}>{ children }</ConfigProvider>
        </body>
    </html>
  )
}

export default LayoutProvider
