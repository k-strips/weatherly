import axios from "axios";
import { useState, useEffect } from "react";

const useAxiosFetch = (dataUrl) => {
  const [data, setData] = useState(null);
  const [url, setUrl] = useState(dataUrl);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAsync = async (params) => {
      setIsLoading(true);
      try {
        let response = await axios.request(url);
        setData(response.data);
      } catch (error) {
        setFetchError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAsync();
  }, [url]);

  return [{ data, fetchError, isLoading }, setUrl];
};

export default useAxiosFetch;
