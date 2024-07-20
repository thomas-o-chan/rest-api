import fetchOptions from "./fetch-options";
import { processResponse } from "./utils";

// TODO pair up the response formats using something like zod. Needs a TS server
export default async function getCodeword(id: string) {
  try {
    const response = await fetch(
      `http://localhost:3000/action/${id}`,
      fetchOptions,
    );
    const content = await processResponse(response);
    if (content.length === 0) {
      // no results
      return '';
    }
    return content;
  } catch(e) {
    console.log(e);
    return '';
  }
}
