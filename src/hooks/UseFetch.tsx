import { useState, useEffect, useCallback, ReactNode } from "react";

function useFetch(query: string, page: any) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState<Array<ReactNode>>([]);

  const sendQuery = useCallback(async (q: string) => {
    try {
      await setLoading(true);
      await setError(false);
      /* const res = await axios.get("");
      await setList((prev) => [...prev, ...res.data]); */
      let a = new Array<ReactNode>();
      for (let i = 0; i < 15; i++) {
        a.push("qqq");
      }
      await setList((prev) => [...prev, ...a]);
      setLoading(false);
    } catch (err: any) {
      setError(err);
    }
  }, []);

  useEffect(() => {
    sendQuery(query);
  }, [query, sendQuery, page]);

  return { loading, error, list };
}

export default useFetch;
