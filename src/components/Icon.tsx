import styled from 'styled-components'

interface IconProps {
  align?: string
  bgColor?: string
  name?: string
  color?: string
  size?: number
  title?: string
}

const GoogleIcon = styled.span<IconProps>`
  &.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 200, 'opsz' 48;
  }

  font-size: ${props => props.size}px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  vertical-align: ${props => props.align || 'middle'};
`

export function Icon({ align, bgColor, color, size, name, title }: IconProps) {
  return (
    <GoogleIcon
      align={align}
      bgColor={bgColor}
      color={color}
      size={size}
      title={title}
      className="material-symbols-outlined"
    >
      {name}
    </GoogleIcon>
  )
}
