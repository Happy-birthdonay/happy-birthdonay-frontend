type DonationBox = {
  boxId: number;
  name: string;
  url: string;
  boxTitle: string;
  boxDescription: string;
  amount: number;
  color: string;
  isDonated: boolean;
  certImgUrl: null;
  certCreatedAt: null;
  userId: number;
  createdAt: string;
  openDate: string;
  messageCount: number;
};

type BoxColor = 'blue' | 'orange' | 'green' | 'yellow' | 'pink' | 'violet';

export type { DonationBox, BoxColor };
