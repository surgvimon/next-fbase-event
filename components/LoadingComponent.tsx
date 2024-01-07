import { Spin } from 'antd';
import React from 'react'

export default function LoadingComponent({inverted = true, content = 'Loading..'}) {
  return (
    <>
      <Spin spinning={inverted} tip="Loading.." fullscreen />
    </>
  )
}
