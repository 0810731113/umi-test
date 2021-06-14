import React, {
  useState,
  useEffect,
  useReducer,
  useRef,
  useImperativeHandle,
} from 'react';
import axios from 'axios';
import { Button } from 'antd';
// import * as Sentry from '@sentry/react';
// import { Integrations } from '@sentry/tracing';
// import SentryRRWeb from '@sentry/rrweb';
import { history } from 'umi';
import './index.less';
import classnames from 'classnames';

// Sentry.init({
//   dsn:
//     'https://981843871d71497385a832b825f4c5b0@o749530.ingest.sentry.io/5791400',
//   integrations: [
//     new Integrations.BrowserTracing(),
//     new SentryRRWeb({
//       // ...options
//     }),
//   ],
//
//   // Set tracesSampleRate to 1.0 to capture 100%
//   // of transactions for performance monitoring.
//   // We recommend adjusting this value in production
//   tracesSampleRate: 1.0,
//   release: '0.0.1',
//   beforeSend(event, hint) {
//     // Check if it is an exception, and if so, show the report dialog
//     if (event.exception) {
//       Sentry.showReportDialog({ eventId: event.event_id ,lang: 'zn'});
//     }
//     return event;
//   },
// });
//
// Sentry.setUser({ email: "431397516@qq.com" ,username:'Libo'});

export default function IndexPage(props) {
  const { children } = props;
  const [city, setCity] = useState([]);
  const changeEmitEvent = () => {};
  const [publicPath, setPublicPath] = useState('/');
  useEffect(() => {
    history.listen((location, action) => {
      console.log(location);
      console.log(action);
      setPublicPath(location.pathname);
    });
    return () => {};
  }, []);
  const goLogin = () => {
    history.push(`/login`);
  };

  const goMicro = (path) => {
    history.push(path);
  };

  return (
    <div className={`main-container`}>
      <div className={'header-bar'}>
        <div className={`menu-list`}>
          <span className={'logo'} onClick={() => goMicro('/')}>
            有巢系统
          </span>
          <span
            className={classnames('menu-item', {
              active: /vue3/.test(publicPath),
            })}
            onClick={() => goMicro('/vue3/')}
          >
            vue项目
          </span>
          <span
            className={classnames('menu-item', {
              active: /react16/.test(publicPath),
            })}
            onClick={() => goMicro('/react16/')}
          >
            react项目
          </span>
          <span
            className={classnames('menu-item', {
              active: /angular9/.test(publicPath),
            })}
            onClick={() => goMicro('/angular9/')}
          >
            angular项目
          </span>
        </div>
        <Button onClick={goLogin}>去登录页</Button>
      </div>
      <div className={'child-container'}>{children}</div>
    </div>
  );
}
