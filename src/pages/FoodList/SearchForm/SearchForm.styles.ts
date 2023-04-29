import { FormContainer } from '@/components'
import styled from 'styled-components'

export const SearchFormContainer = styled(FormContainer)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding: 0 0.5rem;

  input[type='text'] {
    flex: 1;
  }
`
