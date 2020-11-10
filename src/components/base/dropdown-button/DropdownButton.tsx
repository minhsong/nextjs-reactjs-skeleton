import { useRef, useState } from 'react'
import useOutSideClick from '../../../hooks/useOutSideClick'
import * as S from './DropdownButton.styles'

export interface DropdownButtonProps {
  label?: any
  children?: any
  Button?: any
  buttonClass?: string
}

export const DropdownButton = (props: DropdownButtonProps) => {
  const { label, children, buttonClass, ...otherProps } = props
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef(null)
  useOutSideClick(wrapperRef, () => setOpen(false))
  return (
    <S.DropdownWrapper ref={wrapperRef}>
      <button
        className={buttonClass}
        onClick={() => setOpen(!open)}
        {...otherProps}
      >
        {label}
      </button>
      {open && children}
    </S.DropdownWrapper>
  )
}

export default DropdownButton
