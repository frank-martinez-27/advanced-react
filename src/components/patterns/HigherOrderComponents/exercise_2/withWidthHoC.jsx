import React from 'react'
import useWidth from '../../CustomHooks/exercise/useWidth';

// const withWidthHoC = (MyComponent) => {
//   const width = useWidth();
//   return (
//     <MyComponent
//       { ...this.props }
//       width={ width }
//     />
//   )
// }

const withWidthHoC = (MyComponent) => {
  const wrapper = () => {
    const width = useWidth();
    return (
      <MyComponent
        { ...this.props }
        width={ width }
      />
    )
  }
  return wrapper
}


export default withWidthHoC
