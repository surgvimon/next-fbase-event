'use client'
import { updateUserPassword } from '@/firestore/firebaseService'
import { PoweroffOutlined } from '@ant-design/icons'
import { Alert, Button, Card, Col, Form, Input, Row } from 'antd'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export default function AccountForm() {
    const [loading, setLoading] = useState(false);
    const { currentUser } = useSelector((state:any) => state.auth);
    const [form] = Form.useForm();
    const initialValues = {
      title: '',
      category: '',
    }
    const handleFormSubmit = async (values:any) => {
      setLoading(true);
      try {
        await updateUserPassword(values);
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false);
        form.resetFields();
      }
    };
    return (
        <>
          {currentUser.providerId === 'password' &&
          <Form 
            form={form}
            initialValues={initialValues}
            layout="vertical" 
            onFinish={handleFormSubmit}
            name="dependencies"
            autoComplete="off"
            style={{ maxWidth: 600 }}
          >
            {/* <Alert message=" Try modify `Password2` and then modify `Password`" type="info" showIcon /> */}
            <Form.Item label="Password" name="password" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name="password2"
              dependencies={['password']}
              rules={[
                {
                  required: true,
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The new password that you entered do not match!'));
                  },
                }),
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                icon={<PoweroffOutlined />}
                loading={loading}
              >
                Update password
              </Button>
            </Form.Item>
          </Form>
          }
          {currentUser.providerId === 'facebook.com' &&
            <Row>
              <Col>
                <p>Pleas visit Facebook to update your account.</p>
                <Button
                  type="primary"
                  htmlType="button"
                  href="https://facebook.com/"
                  target='_bank'
                  className="login-form-button"
                  icon={<PoweroffOutlined />}
                  // loading={loadings[1]}
                  style={{backgroundColor: '#196cb2'}}
                >
                  Go to Facebook
                </Button>
              </Col>
            </Row>
          }
          {currentUser.providerId === 'google.com' &&
            <Row>
              <Col>
                <p>Pleas visit Facebook to update your account.</p>
                <Button
                  type="primary"
                  htmlType="button"
                  href="https://facebook.com/"
                  target='_bank'
                  className="login-form-button"
                  icon={<PoweroffOutlined />}
                  // loading={loadings[1]}
                  style={{backgroundColor: '#cb3837'}}
                >
                  Go to Facebook
                </Button>
              </Col>
            </Row>
          } 
        </>
    )
}
