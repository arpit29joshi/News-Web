import "./Title.css";
function Title(props) {
  const firstItem = props.data[0];
  const secondItem = props.data[1];
  const thirdItem = props.data[2];
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-lg-8 ">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
            data-interval="5000"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src={firstItem.multimedia[0].url.toString()}
                  alt="First slide"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h2>{firstItem.title}</h2>
                  <h5>{firstItem.abstract}</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={secondItem.multimedia[0].url.toString()}
                  alt="Second slide"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h2>{secondItem.title}</h2>
                  <h5>{secondItem.abstract}</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={thirdItem.multimedia[0].url.toString()}
                  alt="Third slide"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h2>{thirdItem.title}</h2>
                  <h5>{thirdItem.abstract}</h5>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card cardcolor">
            <div className="card-header">
              <h2>Latest News</h2>
            </div>
            <ul className="list-group list-group-flush">
              {props.data.map((e) => {
                return (
                  <div>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-8">
                          <h5>{e.title}</h5>
                          <h6 className="author">{e.byline}</h6>
                        </div>
                        <div className="col-4">
                          <img
                            src={e.multimedia[0].url.toString()}
                            alt={e.multimedia[0].url.toString()}
                            className="imgheight"
                          />
                        </div>
                      </div>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;
