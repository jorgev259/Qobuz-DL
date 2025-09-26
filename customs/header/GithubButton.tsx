import { FaGithub } from '@react-icons/all-files/fa/FaGithub'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

export default function GithubButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon'>
          <FaGithub />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <a href='https://github.com/QobuzDL/Qobuz-DL' target='_blank' rel='noopener noreferrer'>
            Qobuz-DL
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href='https://lavaforge.org/ChitoWarlock/Qobuz-DL' target='_blank' rel='noopener noreferrer'>
            Squid.WTF Fork
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
