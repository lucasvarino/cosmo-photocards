type ObjektRequest = {
  address: string;
  contracts: string[];
  orderBy: "transferTime";
  pageKey: string;
};

type ObjektResponse = {
  ownedNfts: RawObjekt[];
  pageKey: string;
  totalCount: number;
};

type RawObjekt = {
  acquiredAt: {
    blockTimestamp: string;
    blockNumber: number;
  };
  tokenId: string;
  raw: {
    metadata:
      | undefined
      | {
          name: string;
          description: string;
          objekt: {
            backgroundColor: string;
            comoAmount: number;
            frontImage: string;
            tokenId: string;
            accentColor: string;
            transferable: boolean;
            textColor: string;
            backImage: string;
            tokenAddress: string;
            objektNo: number;
            artists: string[];
            member: string;
            season: string;
            collectionNo: string;
            thumbnailImage: string;
            collectionId: string;
            class: string;
            transferableByDefault: boolean;
          };
        };
  };
};

const ADDRESSES = [
  "0xA4B37bE40F7b231Ee9574c4b16b7DDb7EAcDC99B", // tripleS
  "0x0fB69F54bA90f17578a59823E09e5a1f8F3FA200", // ARTMS
];
