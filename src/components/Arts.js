import useFetchData from "../Http/GetData";
import NewsCard from "./ui/NewCard";

function Arts() {
  const context = useFetchData("arts");
  return (
    <div>
      <NewsCard  contextData={context.initalData}/>
    </div>
  );
}

export default Arts;
