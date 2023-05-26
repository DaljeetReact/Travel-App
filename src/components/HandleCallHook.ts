import { useState, useEffect } from 'react';
import axios from 'axios';

const HandleCallHook = (url:string,options:any) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  options = {options,url}
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.request(options);
        setData(response.data);
        setLoading(false);
      } catch (error:any) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [options]);

  return { data, error, loading };
};

export default HandleCallHook;
