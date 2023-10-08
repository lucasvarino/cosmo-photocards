import { fetchObjektsForOwner } from "@/lib/objekts";

const REGEX = /4x$/i;

const CONTRACTS = [
  "0xA4B37bE40F7b231Ee9574c4b16b7DDb7EAcDC99B", // tripleS
  "0x0fB69F54bA90f17578a59823E09e5a1f8F3FA200", // ARTMS
];

const collectionMap: Record<string, "physical" | "digital"> = {
  A: "physical",
  Z: "digital",
};

type Objekt = {
  frontImage: string;
  backImage: string;
  className: string;
  memberName: string;
  season: string;
  collection: string;
  type: "physical" | "digital";
  num: number;
  tokenId: number;
  acquiredAt: number;
  transferable: boolean;
  key: string;
};

export async function fetchObjekt(
  address: string,
  pageKey: string | null
): Promise<Objekt> {
  try {
    const response = await fetchObjektsForOwner({
      address,
      contracts: CONTRACTS,
      orderBy: 'transferTime',
      pageKey: pageKey ?? "",
    });
  }
}
