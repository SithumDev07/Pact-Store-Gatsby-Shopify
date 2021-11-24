import * as React from "react"

function SvgShape(props) {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 119 32"
      {...props}
    >
      <path
        d="M8.7 32c5.8 0 9.4-3.4 9.4-7.5 0-4.7-2.5-6.9-6.9-10.4-5.4-4.4-5.9-5.6-5.9-7 0-1.8 1.1-2.8 3.8-2.8 2.1 0 4.3 1.2 6.1 2.5l1.7-4.2A11.89 11.89 0 009 0C3.9 0 .5 2.9.5 7.1s2.1 6.1 7.2 10.3c4.5 3.7 5.7 4.7 5.7 7.2 0 1.8-1.5 3.1-4.7 3.1-2.5 0-5-1.6-6.8-3.2L0 28.7A12.39 12.39 0 008.7 32zM85 .3h-5.7v31.5h5v-9.1h.8c7.8 0 12.6-5.4 12.6-11.4C97.7 4 92.6.3 85 .3zM119 5V.3h-15.4v31.5H119v-4.6h-10.4v-9.1h9.4v-4.6h-9.4V5zM84.3 18.2V4.7h.7c4 0 7.7 1.4 7.7 6.6s-3.6 7-7.7 7h-.7zM65 22.1h-7.5l3.8-11.9zm-26.6-8.6h-9.9V.3h-5v31.5h5V18.2h9.9v13.6h5V.3h-5zm29.7 18.3h5L62.6.3h-2.4L49.7 31.8h4.7l1.7-5.2h10.4z"
        fill="#b3b3b3"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgShape
