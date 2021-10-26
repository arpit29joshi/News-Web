import { Fragment } from "react"
import NewsCard from "./NewCard"

function Card(props) {
    const context = props.contextData;

    return (
        <Fragment>
            {context.map(v=>{
                return <NewsCard fullUrl={v.url}
                title={v.title}
                desc={v.abstract}
                by={v.byline}
                imgUrl={v.multimedia[0].url}/>
            })}
        </Fragment>
    )
}

export default Card
