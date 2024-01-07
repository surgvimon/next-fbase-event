'use client'
import React, { useState } from 'react'
import { Button, Col, Form, Input} from 'antd'
import { PoweroffOutlined } from '@ant-design/icons';
import { updateUserProfile } from '@/firestore/firestoreService';

export default function ProfileForm({profile}:any) {
    const [form] = Form.useForm();
    const [loadings, setLoadings] = useState(false);
    const initialValues = {
        displayName: profile.displayName,
        description: profile.description || '',
    };
    const handleFormSubmit = async (values:any) => { 
        setLoadings(true);
        try {
            await updateUserProfile(values);
        } catch (error) {
            console.log(error)
        } finally {
            setLoadings(false);
        }
    };
  return (
    <>
        <Form 
        form={form}
        initialValues={initialValues}
        layout="vertical" 
        onFinish={handleFormSubmit}
      >
        <Form.Item  
          name="displayName"
          rules={[{ required: true, message: 'Enter DisplayName!' }]}
        >
          <Input type='text' placeholder='Display Name' />
        </Form.Item>
        <Form.Item 
          name='description' 
          rules={[{ required: true, message: 'Enter Description!' }]}
        >
            <Input.TextArea placeholder='Description' />
        </Form.Item>
        <Form.Item >
            <Button
                type="primary"
                htmlType="submit"
                icon={<PoweroffOutlined />}
                loading={loadings}
              >
                Submit
            </Button>

        </Form.Item>


      </Form>

    </>
  )
}
