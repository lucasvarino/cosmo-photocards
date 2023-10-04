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

export async function fetchObjektsForOwner({
  address,
  contracts,
  orderBy,
  pageKey,
}: ObjektRequest): Promise<ObjektResponse> {
  const ALCHEMY_KEY = process.env.ALCHEMY_KEY;
  const endpoint = `curl 'https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY}/getNFTs/`;
  const params = new URLSearchParams({
    owner: address,
    withMetadata: "true",
    pageSize: "100",
  });

  contracts.forEach((contract) =>
    params.append("contractAddresses[]", contract)
  );

  if (orderBy) {
    params.append("orderBy", orderBy);
  }

  if (pageKey) {
    params.append("pageKey", pageKey);
  }

  try {
    const response = await fetch(endpoint + "?" + params.toString(), {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });

    const data = await response.json();
    return {
      ownedNfts: data.ownedNfts ?? [],
      pageKey: data.pageKey ?? undefined,
      totalCount: parseInt(data.totalCount),
    };
  } catch (err) {
    throw new Error("Unable to fetch objekts");
  }
}
