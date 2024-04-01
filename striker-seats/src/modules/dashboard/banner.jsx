import "../../style/fixture/banner.css";
function Banner() {
  return (
    <div className="fixture banner d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-12 h-full">
            <div className="d-flex justify-content-center">
                <h2 className="title">UPCOMING MATCH</h2>
            </div>
            <div className="d-flex gap-2 gap-lg-4 justify-content-center mt-4 mb-4">
              <div className="team d-flex align-items-center">
                <img src="/teams/realmadrid.png" width={80}/>
                <p className="teamName mb-0">Real Madrid</p>
              </div>
              <div className="score">
                <p>—</p>
                <p>:</p>
                <p>—</p>
              </div>
              <div className="team d-flex align-items-center">
                <p className="teamName mb-0">FC BARCALONA</p>
                <img src="/teams/barcalona.png" width={80}/>
              </div>
            </div>
            <p className="text-center date">May 6, 2024 2:51 pm, Emirates Stadium</p>
            <p className="text-center time">2:51 pm</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
