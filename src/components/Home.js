import { Fragment } from "react";
import useFetchData from "../Http/GetData";
import NewsCard from "./ui/NewCard";
import Title from './ui/Title'
import LoadingSpinner from "./ui/LoadingSpinner";

function Home() {
  const context=useFetchData('home');
  const loading = context.loading;

  return (
    <Fragment>
    {loading ? (
      <LoadingSpinner />
    ) : (
      <div>
        <Title data={context.initalData}/>
        <NewsCard contextData={context.initalData}/>
      </div>
      
    )}
  </Fragment>
  );
}

export default Home;
