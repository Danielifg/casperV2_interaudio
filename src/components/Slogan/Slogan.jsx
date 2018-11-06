import React, { Component } from "react";
import Link from "gatsby-link";
import "./Slogan.css";

class Slogan extends Component {
  render() {
    const { logo, url, title } = this.props;
    if (logo) {
      return (
        <Link className="blog-slogan" to={url || "/"}>
          {/* style={{ boxShadow: "none" }}> */}
          <img src={logo} alt={title} />
        </Link>
      );
    }
    return null;
  }
}

export default Slogan;
