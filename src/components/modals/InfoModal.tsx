import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {  
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-700 dark:text-gray-100">
        This is a <em>special</em> adaptation of the famous word guessing game designed to get you ready and excited each day 
        before the <br></br>
        <a href="https://sbcannualmeeting.net" className="underline font-bold" target="_blank" rel="noreferrer">
          SBC 2022 Annual Meeting in Anaheim</a>.</p> 
          <p className="text-sm text-gray-700 dark:text-gray-100" style={{ margin: '10px 0px' }}>All of the words in this game are related to the categories of 
        church culture, SBC polity and entities, Bible books, annual meeting lingo, or California tourism.</p>
        <hr style={{ margin: '10px 0px' }}></hr>
        <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the word in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="C" status="correct" />
        <Cell value="R" />
        <Cell value="E" />
        <Cell value="S" />
        <Cell value="T" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter C is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="A" />
        <Cell value="B" />
        <Cell value="I" status="present" />
        <Cell value="D" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter I is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="V" />
        <Cell value="A" />
        <Cell value="G" />
        <Cell value="U" status="absent" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter U is not in the word in any spot.
      </p>
    </BaseModal>
  )
}
