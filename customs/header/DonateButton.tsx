import { FaCircleDollarToSlot } from 'react-icons/fa6'
import { Button } from '../../components/ui/button'

export default function DonateButton() {
  return (
    <a
      href='https://console.calibour.com/donate/6c4ad0b2-1d4a-4e8e-8e7a-3d048025af54'
      target='_blank'
      rel='noopener noreferrer'
    >
      <Button variant='outline' size='icon'>
        <FaCircleDollarToSlot />
      </Button>
    </a>
  )
}
