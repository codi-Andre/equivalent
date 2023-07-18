import { MutableRefObject } from 'react'
import { useComboBox } from '../ComboBox'
import * as S from './SearchInput.styles'

interface InputProps {
  id: string
  query: string
  refNode: MutableRefObject<HTMLInputElement | null>
  setQuery: (e: string) => void
}

export function SearchInput({ refNode, id, query, setQuery }: InputProps) {
  const { activeListItem, popupExpanded, handleKeyPress } = useComboBox()
  return (
    <S.SearchInput
      tabIndex={popupExpanded ? 0 : -1}
      id={id}
      type="text"
      role="combobox"
      aria-autocomplete="list"
      autoComplete="off"
      autoCapitalize="off"
      aria-controls={`list-box--${id}`}
      aria-expanded={popupExpanded}
      aria-activedescendant={popupExpanded ? activeListItem : ''}
      value={query}
      onChange={e => setQuery(e.target.value)}
      onKeyDown={e => handleKeyPress(e)}
      ref={refNode}
    />
  )
}
