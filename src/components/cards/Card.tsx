import * as S from './Card.styles'

export interface CardProps {
  title: string
  countNumber: number
  icon: any
}
export const Card = (props: CardProps) => {
  const { title, countNumber, icon } = props
  return (
    <S.Card>
      {icon && <S.IconWrap>{icon}</S.IconWrap>}
      <div>
        <S.CardTitle>{title}</S.CardTitle>
        <S.CountNumber>{countNumber}</S.CountNumber>
      </div>
    </S.Card>
  )
}
