const Footer = () => {
  return (
    <div className="Footer_component" style={style.footer}>
      <div style={{ paddingTop: "5px" }}>
        {" "}
        2022 &copy; All Rights Reserved | KreateWorld{" "}
      </div>
    </div>
  );
};

const style = {
  footer: {
    borderTop: "2px solid black",
    textAlign: "center",
    paddingBottom: ".5rem",
    position: "relative",
    bottom: "0",
  },
};

export default Footer;
