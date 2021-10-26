import { useEffect } from "react";
import { useState } from "react";
function useFetchData(type){
  const  [initalData,setData]=useState([]);
  const  [loading,setLoading]=useState(true);
  async function fetchData() {
    const response = await fetch(
      `https://api.nytimes.com/svc/topstories/v2/${type}.json?api-key=9fw5bZorW3brppppfa95DpFlAAKfIQkE`
    );
    if (!response.ok) {
      setLoading(false);
      return;
    }
    const responseData = await response.json();
    const resultList = await responseData.results;
    setData(resultList);
    setLoading(false);
  }
  useEffect(() => {
    fetchData();

  }, []);
  return {initalData,loading};

}
export default useFetchData;












