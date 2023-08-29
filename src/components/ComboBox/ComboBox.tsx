import { Food } from '@/entities/food'
import {
  KeyboardEvent,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { SearchInput } from './SearchInput/SearchInput'
import { ListBox } from './ListBox/ListBox'
import { Option } from './Option/Option'
import * as S from './ComboBox.styles'
import { DisplayInput } from './Display/Display'
import locale from '@/assets/locale.json'
import { NewItemModal } from './NewItemModal/NewItemModal'

interface ComboBoxContextData {
  activeListItem: string
  popupExpanded: boolean
  setPopupExpanded: (value: boolean) => void
  getRefMap: (node: HTMLLIElement | null, food: Food) => void
  handleKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
  setHovered: (e: string | undefined) => void
}

interface ComboBoxProps {
  title: string
  list: Food[]
  displayValue: Food | undefined
  selectedValue: (e: Food) => void
}

export const ComboBoxContext = createContext({} as ComboBoxContextData)

export function ComboBox({
  title,
  list,
  displayValue,
  selectedValue,
}: ComboBoxProps) {
  const ListItemsRef = useRef<Map<number, HTMLLIElement> | null>(null)
  const displayRef = useRef<HTMLDivElement | null>(null)
  const searchInputRef = useRef<HTMLInputElement | null>(null)

  const [activeListItem, setActiveListItem] = useState('')
  const [popupExpanded, setPopupExpanded] = useState(false)
  const [keyboardCursor, setKeyboardCursor] = useState(0)
  const [hovered, setHovered] = useState<string | undefined>(undefined)
  const [query, setQuery] = useState<string>('')

  const filteredList =
    query === ''
      ? list
      : list.filter(food => {
          return food.name.toLowerCase().includes(query.toLowerCase())
        })

  useEffect(() => {
    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [])

  useEffect(() => {
    if (filteredList.length && hovered) {
      setKeyboardCursor(
        filteredList.findIndex(food => food.id === Number(hovered)),
      )
      setActiveListItem(hovered)
    }
  }, [hovered])

  useEffect(() => {
    if (popupExpanded) {
      searchInputRef.current?.focus()
      if (!displayValue && list[0] !== undefined) {
        scrollListToId(0, true)
        setKeyboardCursor(0)
        setActiveListItem(String(filteredList[0].id))
      }
    } else {
      setQuery('')
    }
  }, [popupExpanded, displayValue])

  function handleClick(e: globalThis.MouseEvent) {
    const target = e.target as HTMLElement
    if (displayRef.current?.contains(target)) {
      setPopupExpanded(prev => !prev)
    } else if (searchInputRef.current?.contains(target)) {
      setPopupExpanded(true)
    } else {
      setPopupExpanded(false)
    }
  }

  function getMap() {
    if (!ListItemsRef.current) {
      // Initialize the Map on first usage.
      ListItemsRef.current = new Map()
    }
    return ListItemsRef.current
  }

  function getRefMap(node: HTMLLIElement | null, food: Food) {
    const map = getMap()
    if (node) {
      map.set(food.id, node)
    } else {
      map.delete(food.id)
    }
  }

  function scrollListToId(num: number, id?: true) {
    const map = getMap()
    const position = id ? num : num + keyboardCursor
    map.get(filteredList[position].id)?.scrollIntoView({
      behavior: 'auto',
      block: 'nearest',
      inline: 'center',
    })
  }

  function handleKeyPress(e: KeyboardEvent<HTMLInputElement>) {
    if (e.shiftKey && e.code === 'Tab') {
      setPopupExpanded(false)
      displayRef.current?.focus()
    }
    switch (e.code) {
      case 'Escape':
        setPopupExpanded(false)
        displayRef.current?.focus()
        break
      case 'NumpadEnter':
      case 'Enter':
        e.preventDefault()
        selectedValue(filteredList[keyboardCursor])
        setPopupExpanded(false)
        displayRef.current?.focus()
        break
      case 'ArrowUp':
        if (keyboardCursor > 0) {
          setKeyboardCursor(keyboardCursor => keyboardCursor - 1)
          setActiveListItem(String(filteredList[keyboardCursor - 1].id))
          scrollListToId(-1)
        }
        break
      case 'ArrowDown':
        if (keyboardCursor < filteredList.length - 1) {
          setKeyboardCursor(keyboardCursor => keyboardCursor + 1)
          setActiveListItem(String(filteredList[keyboardCursor + 1].id))
          scrollListToId(1)
        }
        break
      default:
        break
    }
  }

  return (
    <ComboBoxContext.Provider
      value={{
        activeListItem,
        popupExpanded,
        setPopupExpanded,
        getRefMap,
        handleKeyPress,
        setHovered,
      }}
    >
      <S.Container>
        <S.Title
          id={`combo-box-label-${title}`}
          htmlFor={title}
        >
          {title}
        </S.Title>
        <DisplayInput
          id={title}
          displayRef={displayRef}
          displayValue={displayValue?.name}
        />
        <S.Popup isExpanded={popupExpanded}>
          <S.Row>
            <SearchInput
              refNode={searchInputRef}
              id={title}
              query={query}
              setQuery={setQuery}
            />
            <NewItemModal
              id={title}
              name={query}
              displayRef={displayRef}
              newSelectedValue={selectedValue}
            />
          </S.Row>
          <ListBox id={title}>
            {filteredList.map((food, i) => {
              return (
                <Option
                  selected={food.id === displayValue?.id}
                  setSelected={selectedValue}
                  active={i === keyboardCursor}
                  key={food.id}
                  food={food}
                />
              )
            })}
          </ListBox>
          <S.FilterStatus hidden={!!filteredList.length}>
            {locale.filteredListStatus}
          </S.FilterStatus>
        </S.Popup>
      </S.Container>
    </ComboBoxContext.Provider>
  )
}

export function useComboBox() {
  return useContext(ComboBoxContext)
}
