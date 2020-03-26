import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import LoginProjectPage from './pages/login';
// import GlobalProjectLayout from './layout/globalProjectLayout';
import PageLoading from './component/loading';
// 导入apollo的测试页面
import LoginProjectApolloPage from './pages/login_graphql';

/**
 * 作用: 全局路由统计
 * @returns {*}
 */
const projectRoutes = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {});

  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoading />}>
        <Routes>
          {/* <Route path="/project" render={() => <GlobalProjectLayout />} /> */}
          <Route path="/login" element={<LoginProjectApolloPage />} />
          {/* <Route path="/login/apollo" exact element={LoginProjectApolloPage} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default projectRoutes;
