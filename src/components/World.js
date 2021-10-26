import { Fragment } from "react";
import useFetchData from "../Http/GetData";
import LoadingSpinner from "./ui/LoadingSpinner";
import NewsCard from "./ui/NewCard";
function World() {
    const context=useFetchData('world');
    const loading = context.loading;
    return (
        <Fragment>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <NewsCard contextData={context.initalData}/>
        )}
      </Fragment>
    )
}

export default World
