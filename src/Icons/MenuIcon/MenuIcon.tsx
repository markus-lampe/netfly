import React from 'react'

interface IMenuIcon {
  size: number
}

const MenuIcon = ({ size = 40 }: IMenuIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    height={ size }
    width={ size }
  >
    <path d="M173.667-279.333V-302.5h612.666v23.167H173.667Zm0-189.167v-23.167h612.666v23.167H173.667Zm0-189.167v-23.166h612.666v23.166H173.667Z"/>
  </svg>
)

export default MenuIcon
