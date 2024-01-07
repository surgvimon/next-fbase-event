"use client";
import { Form, Input, Button, Col, Row, Alert, Space, Divider } from "antd";
import { LockOutlined, MailOutlined, PoweroffOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signInWithEmail } from "@/firestore/firebaseService";
import SocialLogin from "@/common/form/SocialLogin";

function Login() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const router = useRouter();
  const [loadings, setLoadings] = useState(false);
  const [error, setError] = useState();

  const onFinish = async (values:any) => {
    setLoadings(true);
    try {
      const isUser = await signInWithEmail(values);
      if(isUser) {
        setLoadings(false);
        router.push(`/profile/${isUser.user.uid}`);
      }
    } catch(error) {
      setLoadings(false);
    }
  };

  return (
    <Row>
      <Col span={8} offset={8}>
        <h1 style={{ paddingTop: "100px" }}>Sign-in</h1>
        {error &&
          <Alert
            message="Error Text"
            description={error}
            type="error"
            banner
          />
        }
        <Form
          form={form}
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          {/* email */}
          <Form.Item name="email" rules={[{ type: "email" }]}>
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          {/* password */}
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              loading={loadings}
              icon={<PoweroffOutlined />}
            >
              Login
            </Button>
            <br />
            Or{" "}
            <Link href="/signup">
              <span>Register now!</span>
            </Link>
          </Form.Item>

        </Form>
        <Divider style={{ borderWidth: 2, borderColor: '#d9d9d9' }}> OR </Divider>
        <SocialLogin/>
      </Col>
    </Row>
  );
}
export default Login
