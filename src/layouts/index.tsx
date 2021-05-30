import React, {
  useState,
  useEffect,
  useReducer,
  useRef,
  useImperativeHandle,
} from 'react';
import axios from 'axios';
import { Button } from 'antd';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import SentryRRWeb from '@sentry/rrweb';
import { history } from 'umi';
import './index.less';

export default function IndexPage(props) {
  const [city, setCity] = useState([]);
  const { children } = props;
  const changeEmitEvent = () => {};

  return (
    <div className={`layout-container`}>
      {/*<h1>我是layout</h1>*/}
      {children}
    </div>
  );
}
