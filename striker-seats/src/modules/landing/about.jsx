import "../../style/landing/about.css";
function About() {
  return (
    <div className="container about-us mt-4">
      <div className="row align-items-center justify-center">
        <div className="col-lg-6">
            <div className="default-section">
          <h2 className="default-heading">About us</h2>
          <div className="mt-4 mb-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur iure ratione quos deleniti asperiores amet eius, vel culpa sequi laborum. Odit, incidunt dolorum libero molestias ipsa error dolorem eum. Iure, ex animi? Minus facilis vero ut odit ullam nulla sequi non, iusto, magnam sunt consequuntur molestiae perspiciatis alias? Quam tempora alias itaque quae sint ut eaque cum aliquam minus voluptate repellendus hic, ab ducimus quasi officiis nemo, ea soluta facilis non fuga recusandae quis! Nisi nostrum nemo, eos iusto sint provident consectetur amet distinctio officiis porro atque cumque aspernatur dicta repellat sed, velit deleniti repellendus? Dolor sunt quam perferendis nesciunt.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perspiciatis dicta facere magni libero delectus quisquam ex ullam
            numquam possimus esse.
          </p>
            </div>
          <button className="default-button mt-4">Purchase Now</button>
          </div>
        </div>
        <div className="col-lg-6">
        <img src="/assets/landing/soccerplayer.webp" alt="soccer player" className="img-fluid" width="100%" height="auto"/>
        </div>
      </div>
    </div>
  );
}

export default About;
