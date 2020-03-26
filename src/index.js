import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';

// 导入自定义路由
import ProjectRoutes from './Router';

// 配置apollo的请求配置
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://127.0.0.1:7001/graphql'
  })
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ProjectRoutes />
  </ApolloProvider>,
  document.getElementById('root')
);

// </React.StrictMode>

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service wworkers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
