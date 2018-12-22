import React from "react";
import classNames from "classnames";
import "./MainHeader.css";

class MainHeader extends React.Component {
  render() {
    const { children,cover } = this.props;

    const classes = classNames("main-header", this.props.className, {
      "no-cover": !cover
    });

    const getStyle = () => {
        return { backgroundImage: `url("${'https://res.cloudinary.com/danielifgdev/image/upload/v1545487767/wedding_img.jpg'}")` };
    };

    return (
      <header className={classes} style={getStyle()}>
        {children}
      </header>
    );
  }
}

export default MainHeader;
