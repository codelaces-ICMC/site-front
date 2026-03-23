import React, { useEffect, useRef, useState } from 'react'
import { Container } from './style'

interface Option {
  eventId: number
  eventName: string
}

interface DropdownProps {
  options: Option[]
  onSelect: (value: number) => void
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<Option | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  const handleSelectOption = (option: Option) => {
    setSelectedOption(option)
    onSelect(option.eventId)
    closeDropdown()
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const closeDropdown = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      const target = e.target as Node
      if (!ref.current?.contains(target) && isOpen) {
        closeDropdown()
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isOpen])

  return (
    <Container className={`dropdown relative`} ref={ref}>
      <button
        type='button'
        className='dropdown-toggle'
        onClick={toggleDropdown}
      >
        {selectedOption
          ? selectedOption.eventName
          : 'Clique aqui para escolher uma opção'}
      </button>
      {isOpen && (
        <ul className={`dropdown-menu`}>
          {options.map(option => (
            <li
              key={option.eventId}
              onClick={() => {
                handleSelectOption(option)
              }}
            >
              {option.eventName}
            </li>
          ))}
        </ul>
      )}
    </Container>
  )
}

export default Dropdown
