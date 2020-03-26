import React from 'react';
import { useQuery } from '@apollo/client';

const useProjectQuery = (querySchema) => {
  const { loading, error, data } = useQuery(querySchema);

  if (loading) {
    return <div>等待中....不服你来打我啊....</div>;
  }

  if (error) {
    return <div>你丫有错误啊，你怕不是搞我</div>;
  }

  if (data) {
    console.log('---- query 得到了data = ', data);
    return <div>请求到了数据</div>;
  }
};

export default useProjectQuery;
