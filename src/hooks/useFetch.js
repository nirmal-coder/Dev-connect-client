import { useEffect, useState } from "react";

const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setErrorMsg] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url, options);
      if (response.ok) {
        const data = await response.json();
        setData(data);
        setErrorMsg("");
      } else {
        throw new Error("Response was not ok!");
      }
    } catch (error) {
      setErrorMsg(error.name);
    }
  };

  useEffect(async () => {
    fetchData();
  }, [url]);

  return { data, loading, error, reFetch: useFetch };
};

export default useFetch;
