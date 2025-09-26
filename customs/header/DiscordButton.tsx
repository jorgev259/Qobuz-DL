import { FaDiscord } from '@react-icons/all-files/fa/FaDiscord'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

export default function DiscordButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon'>
          <FaDiscord />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <a href='https://discord.com/invite/mWQ6bCfkfA' target='_blank' rel='noopener noreferrer'>
            Qobuz-DL
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href='https://discord.gg/invite/GN7GnntyQ2' target='_blank' rel='noopener noreferrer'>
            Squid.WTF
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
