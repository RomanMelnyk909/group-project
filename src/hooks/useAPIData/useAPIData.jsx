import {
  BASE_URL,
  GET_METHOD,
  QUERY_HEADERS,
} from "../../constants/query-constatnts";

const useAPIData = async ({
  endpoint,
  method,
  queryData,
  setData,
  setQueryOptions,
  setFetching,
  setError,
}) => {
  const url = `${BASE_URL}${endpoint}`;
  let data;
  let queryOptions;
  let error;
  let fetching;

  setFetching && setFetching(true);

  await fetch(url, {
    method: method || GET_METHOD,
    headers: QUERY_HEADERS,
    body: queryData ? JSON.stringify(queryData) : null,
  })
    .then((resp) => {
      const { status, statusText } = resp;
      setQueryOptions && setQueryOptions({ status, statusText });
      return resp.json();
    })
    .then((resp) => {
      setData && setData(resp);
      setFetching && setFetching(false);
    })
    .catch((err) => {
      setError && setError(err);
      setFetching(false);
    });

  return { data, fetching, error, queryOptions };
};

export default useAPIData;
