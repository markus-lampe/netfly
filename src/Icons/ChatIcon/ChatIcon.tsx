import React from 'react'

interface IChatIcon {
  size: number
}

const ChatIcon = ({size = 40}: IChatIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    height={size}
    width={size}
  >
    <path d="M267-426.833h265.167V-450H267v23.167Zm0-121.667h426v-23.167H267v23.167Zm0-121.667h426v-23.166H267v23.166ZM133.667-182.5v-588.895q0-22.913 16.095-39.009 16.096-16.096 38.852-16.096h582.772q22.756 0 38.852 16.096 16.095 16.096 16.095 38.873v423.062q0 22.777-16.095 38.873-16.096 16.096-38.849 16.096H244.667l-111 111Zm101.166-134.167h536.334q12 0 22-10t10-22v-422.666q0-12-10-22t-22-10H188.833q-12 0-22 10t-10 22v533.667l78-79.001Zm-78 0v-486.666 486.666Z" />
  </svg>
)

export default ChatIcon
