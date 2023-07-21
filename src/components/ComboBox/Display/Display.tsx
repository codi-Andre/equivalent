import { MutableRefObject } from 'react'
import { useComboBox } from '../ComboBox'
import { Icon } from '../../Icon'
import * as S from './Display.styles'
import locale from '@/assets/locale.json'

interface DisplayProps {
  id: string
  displayRef: MutableRefObject<HTMLDivElement | null>
  displayValue: string | undefined
}

export function DisplayInput({ id, displayRef, displayValue }: DisplayProps) {
  const { activeListItem, popupExpanded, setPopupExpanded } = useComboBox()

  return (
    <S.Display
      aria-autocomplete="list"
      aria-controls={`list-box--${id}`}
      aria-expanded={popupExpanded}
      aria-activedescendant={popupExpanded ? activeListItem : ''}
      popupExpanded={popupExpanded}
      tabIndex={0}
      ref={displayRef}
      role="combobox"
      aria-labelledby={`combo-box-label-${id}`}
      onKeyDown={e => {
        if (
          e.code === 'NumpadEnter' ||
          e.code === 'Enter' ||
          e.code === 'Space' ||
          e.code === 'ArrowDown'
        ) {
          e.preventDefault()
          setPopupExpanded(true)
        }
      }}
    >
      {displayValue || locale.chooseOption}
      <S.Button
        type="button"
        aria-label="food"
        tabIndex={-1}
        aria-controls={`list-box--${id}`}
        aria-expanded={popupExpanded}
      >
        <Icon name={popupExpanded ? 'expand_less' : 'expand_more'} />
      </S.Button>
    </S.Display>
  )
}
