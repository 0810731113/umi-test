import styles from './index.less';
import React, {
  useState,
  useEffect,
  useReducer,
  useRef,
  useImperativeHandle,
} from 'react';
import axios from 'axios';
import { Button } from 'antd';
import { history } from 'umi';

export default function Index() {
  const [city, setCity] = useState([]);
  const changeEmitEvent = () => {};
  useEffect(() => {
    axios.get('/api/tags').then(function (response) {
      console.log(response);
      setCity(response.data.list);
    });
    axios.get('/api/person').then(function (response) {
      console.log(response);
    });
  }, []);
  const goIndex = () => {
    history.push(`/`);
  };

  return (
    <div>
      <h1>我是登录页</h1>
      <Button onClick={goIndex}>返回首页</Button>
    </div>
  );
}
