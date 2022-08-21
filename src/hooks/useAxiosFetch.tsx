import {useState, useEffect} from 'react';

const useAxiosFetch = (url: string) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const res = await fetch(url);
        const jsonRes = await res.json();
        setData(jsonRes);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {data, error, isLoading};
};

export default useAxiosFetch;
