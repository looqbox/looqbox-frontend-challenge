import { Routing } from 'global/routes/Routing'

export interface UserDropdownProps {
  username: string
  screenName: keyof typeof Routing
}
