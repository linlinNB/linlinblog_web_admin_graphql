import React from 'react';
// 导入页面schema
import { CREATE_USER } from '../../schema/login';
import { useMutation } from '@apollo/client';
// import useProjectQuery from '../../component/useProjectQuery';

import LoginProjectForm from './component/loginForm';

import styles from './index.less';

const loginPage = () => {
  // const { loading, error, data } = useQuery(GET_USERS);
  // const { loading, error, data } = useProjectQuery(GET_USERS);
  const [addUserTest, addResult] = useMutation(CREATE_USER);

  const handleLoginSubmit = (values) => {
    addUserTest({
      variables: {
        username: values.username,
        password: values.password
      }
    });
  };

  return (
    <div className={styles.loginPageContent}>
      <div className={styles.loginGroupContent}>
        <div className={styles.companyTitle}>博客后台管理系统</div>
        <div className={styles.loginGroupTitle}>登录</div>
        <div>
          <LoginProjectForm
            onSubmit={handleLoginSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default loginPage;
