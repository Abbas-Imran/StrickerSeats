import "../../style/fixture/fixture.css";

function Fixture() {
  return (
    <div className="container fixtures">
      <div className="row">
        <div className="col-12">
          <div className="fixture-card d-flex justify-content-between align-items-center mb-3">
            <div className="left-fixture d-flex gap-4">
              <div className="d-flex gap-2 align-items-center">
                <img src="/teams/realmadrid.png" width={80} />
                <img src="/teams/barcalona.png" width={80} />
              </div>
              <div className="fixture-content">
                <h2 className="teams">Barcalona VS Real Madrid</h2>
                <p className="league">Premier League</p>
                <p className="date">Thu 04 Apr 2024 | Stamford Bridge  | 8:15 pm</p>
                <p className="description">Dates/Times are shown in UK time and are subject to change</p>
              </div>
            </div>
            <div>
              <button>Buy Now</button>
            </div>
          </div>
          <div className="fixture-card d-flex justify-content-between align-items-center mb-3">
            <div className="left-fixture d-flex gap-4">
              <div className="d-flex gap-2 align-items-center">
                <img src="/teams/realmadrid.png" width={80} />
                <img src="/teams/barcalona.png" width={80} />
              </div>
              <div className="fixture-content">
                <h2 className="teams">Barcalona VS Real Madrid</h2>
                <p className="league">Premier League</p>
                <p className="date">Thu 04 Apr 2024 | Stamford Bridge  | 8:15 pm</p>
                <p className="description">Dates/Times are shown in UK time and are subject to change</p>
              </div>
            </div>
            <div>
              <button>Buy Now</button>
            </div>
          </div>
          <div className="fixture-card d-flex justify-content-between align-items-center mb-3">
            <div className="left-fixture d-flex gap-4">
              <div className="d-flex gap-2 align-items-center">
                <img src="/teams/realmadrid.png" width={80} />
                <img src="/teams/barcalona.png" width={80} />
              </div>
              <div className="fixture-content">
                <h2 className="teams">Barcalona VS Real Madrid</h2>
                <p className="league">Premier League</p>
                <p className="date">Thu 04 Apr 2024 | Stamford Bridge  | 8:15 pm</p>
                <p className="description">Dates/Times are shown in UK time and are subject to change</p>
              </div>
            </div>
            <div>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fixture;
