import { socialLogin } from '@/firestore/firebaseService';
import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons'
import { Button, Col, Row } from 'antd'
import React from 'react'

export default function SocialLogin() {
  function handleSocialLogin(provider:any) {
    socialLogin(provider);
  }
  return (
    <>
    <Row gutter={[8, 8]}>
        <Col span={24}>
            <Button onClick={() =>handleSocialLogin('facebook')}  type="primary" style={{backgroundColor: '#196cb2'}} icon={<FacebookOutlined className='facebookIcons'/>} block>
            Login with Facebook
            </Button>
        </Col>
        <Col span={24}>
            <Button onClick={() =>handleSocialLogin('google')}  type="primary" style={{backgroundColor: '#cb3837'}} icon={<GoogleOutlined  className='googleIcons'/>} block>
            Login with Google
            </Button>
        </Col>
    </Row>

    </>
  )
}
