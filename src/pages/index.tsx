import styles from './index.less';
import React, {
  useState,
  useEffect,
  useReducer,
  useRef,
  useImperativeHandle,
} from 'react';
import axios from 'axios';

export default function IndexPage() {
  const [city, setCity] = useState([]);
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
