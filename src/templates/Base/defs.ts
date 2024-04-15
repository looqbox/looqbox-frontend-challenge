import { RadioValue } from 'components/ui/RadioInput/defs'
import { Routing } from 'global/routes/Routing'

export interface BaseTemplateProps {
  children: React.ReactNode
  searchValue: string
  username: string
  selectedSortingValue: RadioValue
  onCheckSorting: (value: RadioValue) => void
  onChangeSearch: (value: string) => void
  onClearSearch: () => void
  screenName: keyof typeof Routing
}
