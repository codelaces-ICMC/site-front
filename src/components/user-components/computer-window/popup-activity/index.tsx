import { Container } from './style'
import * as React from 'react'
import { Popover } from '@base-ui-components/react/popover'
import InfoFilled from '../../../../assets/icons/general/InfoFilled.svg'

export default function PopupActivity() {
  return (
    <Container>
      <Popover.Root>
        <Popover.Trigger>
          <img src={InfoFilled} alt='Informações sobre a atividade' />
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Positioner>
            <Popover.Popup className='popup-activity'>
              <Popover.Description>
                You are all caught up. Good job!
              </Popover.Description>
            </Popover.Popup>
          </Popover.Positioner>
        </Popover.Portal>
      </Popover.Root>
    </Container>
  )
}
