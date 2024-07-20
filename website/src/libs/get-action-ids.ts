import fetchOptions from "./fetch-options";
import { processResponse } from "./utils";

// TODO pair up the response formats using something like zod. Needs a TS server
export default async function getActionIds(codeword: string) {
  try {
    const response = await fetch(
      `http://localhost:3000/codeword/${codeword}`,
      fetchOptions,
    );
    const content = await processResponse(response);
    if (content === 'codeword not found') {
      // no results
      return '';
    }
    return content;
  } catch(e) {
    console.log(e);
    return '';
  }
}
