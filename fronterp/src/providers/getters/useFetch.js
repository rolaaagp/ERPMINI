import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState();

  useEffect(() => {
    try {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((resParsedJson) => setData(resParsedJson))
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } catch (error) {
      console.error("Error in useFetch:", error);
    }
  }, [url]);

  return { data };
}
