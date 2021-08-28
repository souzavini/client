import * as S from './styles'

export type RibbonColors = 'primary' | 'secondary'
export type RibbonSizes = 'normal' | 'small'

export type RibbonProps = {
  children: React.ReactNode
  color?: RibbonColors
  size?: RibbonSizes
}

const Ribbon = ({ children, color = 'primary', size = 'normal' }: RibbonProps) => (
  <S.Wrapper color={color} size={size}>
    <h1>{children}</h1>
  </S.Wrapper>
)

export default Ribbon