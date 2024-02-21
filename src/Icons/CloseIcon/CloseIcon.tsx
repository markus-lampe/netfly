import React from 'react'

interface ICloseIcon {
  size: number
}

const CloseIcon = ({ size = 40 }: ICloseIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    height={size}
    width={size}
  >
    <path d="M255.167-238.333 238.5-255.167 463.167-480 238.5-704.833l16.667-16.834L480-496.833l224.833-224.834 16.667 16.834L496.833-480 721.5-255.167l-16.667 16.834L480-463.167 255.167-238.333Z" />
  </svg>
)

export default CloseIcon
