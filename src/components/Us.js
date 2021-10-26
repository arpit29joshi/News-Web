import useFetchData from "../Http/GetData";
import NewsCard from "./ui/NewCard";

function Us() {
  const context = useFetchData("us");
  return (
    <div>
      <NewsCard contextData={context.initalData} />
    </div>
  );
}

export default Us;
