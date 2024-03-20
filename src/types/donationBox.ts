type DonationBox = {
  id: number;
  name: string;
  url: string;
  boxDescription: string;
  boxTitle: string;
  amount: number;
  color: BoxColor;
};

type BoxColor = 'blue' | 'orange' | 'green' | 'yellow' | 'pink' | 'violet';

export type { DonationBox, BoxColor };
