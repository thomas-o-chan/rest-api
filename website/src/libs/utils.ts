import { View } from "../types";

export const viewNameIndex: Record<View, string> = {
  selectQuery: "Select Query Type",
  idSearch: "Search by Id",
  codewordSearch: "Search by Codeword",
};

export async function processResponse(response: Response) {
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return response.json();
  }
  return response.text();
}
