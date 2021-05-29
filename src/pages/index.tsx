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

import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import SentryRRWeb from '@sentry/rrweb';

Sentry.init({
  dsn:
    'https://981843871d71497385a832b825f4c5b0@o749530.ingest.sentry.io/5791400',
  integrations: [
    new Integrations.BrowserTracing(),
    new SentryRRWeb({
      // ...options
    }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

export default function IndexPage() {
  const [city, setCity] = useState([]);
  const changeEmitEvent = () => {
    methodDoesNotExist();
  };
  useEffect(() => {
    axios.get('/api/tags').then(function (response) {
      console.log(response);
      setCity(response.data.list);
    });
    axios.get('/api/person').then(function (response) {
      console.log(response);
    });
  }, []);
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Button>点击</Button>
      <button onClick={changeEmitEvent}>Break the world</button>
      {city.map((item, index) => {
        return (
          <div key={index} style={{ borderBottom: '1px solid #f5f5f5' }}>
            {item.name}
          </div>
        );
      })}
    </div>
  );
}
