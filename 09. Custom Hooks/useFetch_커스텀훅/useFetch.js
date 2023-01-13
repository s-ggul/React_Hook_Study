import { useEffect, useState } from "react";

export function useFetch(baseUrl, initialType) {
  const [data, setData] = useState(null);

  const fetchUrl = (type) => {
    fetch(baseUrl + "/" + type)
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  useEffect(() => {
    fetchUrl(initialType);
  }, []); // 빈 배열이라 초기 렌더링에서만 실행

  return {
    data,
    fetchUrl,
  };
}
