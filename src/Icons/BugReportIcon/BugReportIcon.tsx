import React from 'react'

interface IBugReportIcon {
  size: number
}

const BugReportIcon = ({ size = 40 }: IBugReportIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    height={ size }
    width={ size }
  >
    <path d="M480.062-202Q546-202 592.5-248.615 639-295.231 639-361.244v-158.243Q639-585.5 592.438-632t-112.5-46.5Q414-678.5 367.5-631.885 321-585.269 321-519.256v158.243Q321-295 367.562-248.5t112.5 46.5ZM417-348h126v-25.5H417v25.5Zm0-159h126v-25.5H417v25.5Zm63 66.5Zm.056 264q-50.056 0-91.806-24.75T321-269H217v-25.5h91q-11-32-11.75-65.833-.75-33.834-.75-67.167H217V-453h78.481q0-34.5-.24-68.25Q295-555 308-586.5h-91V-612h103.778Q336-639 359.25-659.25t52.25-32.472L337.5-765l16-16.5 83.75 83.5q21.244-6 42.997-6t43.115 6l85.138-83.5 16 16.5-73.5 73.278q29 12.222 51 32.472T639.222-612H743v25.5h-91q13 31.5 12.75 65.333-.25 33.834-.25 68.167H743v25.5h-78.5q0 33.5-.75 67.25T652-294.5h91v25.5H639q-25.5 43-67.194 67.75t-91.75 24.75Z"/>
  </svg>
)

export default BugReportIcon