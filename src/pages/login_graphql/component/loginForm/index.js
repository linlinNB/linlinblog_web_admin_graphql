// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './index.less';

// 测试利用react-hooks写法创建表单
const LoginProjectForm = (props) => {
  // // 从props中获取Form.Item的装饰器
  // const { getFieldDecorator } = props.form;

  useEffect(() => {}, []);

  const handleSubmit = (values) => {
    console.log('---- 表单通过了提交 = ', values);
    // eslint-disable-next-line react/prop-types
    props.onSubmit(values);
    // e.preventDefault();
    // // console.log('----- 触发了handleSubmit操作，表单收集上来数据 = ', e);
    // // 表单校验部分
    // const { validateFields } = props.form;
    // validateFields((err, values) => {
    //   if (!err) {
    //     // console.log('---- 通过表单校验---- ', values);
    //     props.onSubmit(values);
    //   } else {
    //     // console.log('---- 没有通过表单校验 ---- ', err, values);
    //   }
    // });
  };

  const FormItemConfig = {
    wrapperCol: { span: 18, offset: 3 }
  };

  return (
    <div className={styles.loginFormContent}>
      <Form onFinish={handleSubmit}>
        <Form.Item {...FormItemConfig} name="username" rules={[{ required: true, message: '请输入手机号' }]}>
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="用户名"
          />
        </Form.Item>
        <Form.Item
          {...FormItemConfig}
          className={{ color: '#FFF' }}
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="password"
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary" className={styles.loginGroupBtn} />
        </Form.Item>
      </Form>
    </div>
  );
};

LoginProjectForm.defaultProps = {
  onSubmit: PropTypes.func
};

export default LoginProjectForm;
