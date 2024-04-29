import { useState } from 'react';
import styled from 'styled-components';

import ColorButton from './ColorButton';

const ChipContainer = styled.div`
  width: 100%;
  /* display: grid;
  gap: 9px 6px;
  grid-template-columns: repeat(2, auto);
  grid-auto-flow: row dense;
  justify-content: flex-start; */
`;
export type Chip = {
  key: string;
  color: string;
  children: React.ReactNode;
};

type ChipsProps = {
  onSelect?: (chip: Chip) => void;
  chips: Chip[];
  registerProps?: any;
};
function Chips(props: ChipsProps) {
  const { chips, onSelect, registerProps } = props;

  const [selectedChip, setSelectedChip] = useState<Chip | null>(null);

  const onSelectChip = (chip: Chip) => {
    setSelectedChip(chip);
    if (onSelect) {
      onSelect(chip);
    }
  };

  return (
    <ChipContainer {...registerProps}>
      {chips.map((chip) => (
        <ColorButton
          type="button"
          key={chip.key}
          $chipColor={chip.color}
          $unSelected={selectedChip !== null && selectedChip?.key !== chip.key}
          onClick={() => onSelectChip(chip)}
        >
          {chip.children}
        </ColorButton>
      ))}
    </ChipContainer>
  );
}

export default Chips;
