import React from "react";

export const SMALL = 1;
export const MEDIUM = 2;
export const LARGE = 3;

const largeWidth = 992,
  mediumWidth = 768;

const getWindowWidth = () => {
  let innerWidth = 0;
  let width;
  if (window) innerWidth = window.innerWidth;

  if (innerWidth >= largeWidth) {
    width = LARGE;
  } else if (innerWidth >= mediumWidth) {
    width = MEDIUM;
  } else {
    // innerWidth < 768
    width = SMALL;
  }

  return width;
}

const useWidth = () => {
  const [width, setWidth] = React.useState(getWindowWidth());


  // const handleResize =  React.useCallback(()=>{
  //   const currentWidth = getWindowWidth();
  //   if (currentWidth !== width) setWidth(currentWidth);
  // },[getWindowWidth, setWidth, width])



  React.useEffect(()=>{
    if (typeof window === "undefined") return undefined;
    const handleResize = () => {
      const currentWidth = getWindowWidth();
      setWidth(currentWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  },[]);

  return width;
}
// class WithWidth extends React.Component {
//   constructor() {
//     super();
//     this.state = { width: this.windowWidth() };
//   }

//   componentDidMount() {
//     if (typeof window !== "undefined") {
//       window.addEventListener("resize", this.handleResize);
//       this.handleResize();
//     }
//   }

//   componentWillUnmount() {
//     if (typeof window !== "undefined")
//       window.removeEventListener("resize", this.handleResize);
//   }

//   handleResize = () => {
//     let width = this.windowWidth();
//     if (width !== this.state.width) this.setState({ width });
//   };

//   windowWidth() {
//     let innerWidth = 0;
//     let width;
//     if (window) innerWidth = window.innerWidth;

//     if (innerWidth >= largeWidth) {
//       width = LARGE;
//     } else if (innerWidth >= mediumWidth) {
//       width = MEDIUM;
//     } else {
//       // innerWidth < 768
//       width = SMALL;
//     }

//     return width;
//   }

//   render() {
//     return this.state.width;
//   }
// }

export default useWidth;
