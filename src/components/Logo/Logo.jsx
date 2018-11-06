import React, { Component } from "react";
import Link from "gatsby-link";
import "./Logo.css";

class Logo extends Component {
  render() {
    const { logo, url, title } = this.props;
    if (logo) {
      return (
        <Link className="blog-logo" to={url || "/"}>
          {/* style={{ boxShadow: "none" }}> */}
          <img src={logo} alt={title} />
        </Link>
      );
    }
    return null;
  }
}

export default Logo;
