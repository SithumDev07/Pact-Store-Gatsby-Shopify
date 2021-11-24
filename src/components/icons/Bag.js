import * as React from "react"

function SvgBag(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="bag_svg__h-6 bag_svg__w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      />
    </svg>
  )
}

export default SvgBag
