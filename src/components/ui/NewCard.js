import './NewCard.css';
function NewsCard(props) {
  const context = props.contextData;
  return (
    <div className="container-fluid">
      <div className="row">
          {context.map((v) => {
            return (
        <div className="col-lg-3 col-md-6 col-sm-12" >

              <div className="card">
                <img
                  className="card-img-top cardImg"
                  src={v.multimedia[0].url}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title cardTitle">{v.title}</h5>
                  <p className="card-text">{v.abstract}</p>
                  <p className="card-text">
                    <small className="text-muted">{v.byline}</small>
                  </p>
                  <a href={v.url} target="_blank"    class="btn btn-primary">Full article</a>

                </div>
                
              </div>
              
      </div>

            );
          })}
        </div>
        
    </div>
  );
}

export default NewsCard;
