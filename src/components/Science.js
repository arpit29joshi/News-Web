import useFetchData from "../Http/GetData";
import NewsCard from "./ui/NewCard";

function Science() {
  const context = useFetchData("science");
  return (
    <div>
      <NewsCard contextData={context.initalData} />
    </div>
  );
}

export default Science;
