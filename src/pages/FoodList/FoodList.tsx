import { useFood } from '@/contexts'
import * as S from './FoodList.styles'
import { useState } from 'react'
import locale from '@/assets/locale.json'
import { Icon } from '@/components'
import { Taskbar } from './Taskbar/Taskbar'

export function FoodList() {
  const { foodList } = useFood()

  const [query, setQuery] = useState('')

  const filteredList = query
    ? foodList.filter(food => food.name.includes(query))
    : foodList

  return (
    <S.Container>
      <h2>Adicione ou exclua alimentos</h2>
      <Taskbar
        query={query}
        setQuery={setQuery}
      />
      <S.List>
        {filteredList[0] ? (
          filteredList.map(food => (
            <li key={food.id}>
              {food.name}{' '}
              <S.TrashButton
                title={`${locale.deleteButton} ${food.name}`}
                isNegative
              >
                <Icon name="delete" />
              </S.TrashButton>
            </li>
          ))
        ) : (
          <li>{locale.filteredListStatus}</li>
        )}
      </S.List>
    </S.Container>
  )
}
