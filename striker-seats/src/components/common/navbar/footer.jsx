import "../../../style/common/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="text-white footer-wrapper">
        <div className="logo">
          <img
            src="/assets/logo.png"
            className="img-fluid"
            width={100}
            height={100}
            alt="mobile hamburger Menu"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          mollitia placeat, sint corrupti dicta perspiciatis quas quae eius,
          dolorum obcaecati maxime ex dolore nobis, maiores libero enim aliquam?
          Vel quas corrupti dignissimos culpa placeat facilis officiis,
          recusandae, earum voluptas itaque sunt at natus dolor nemo distinctio
          aut, autem similique. Vero?
        </p>
      </div>
      <div className="copy-right">
        <p>
          All Rights Reserved by <span>Brother Sufyan</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
