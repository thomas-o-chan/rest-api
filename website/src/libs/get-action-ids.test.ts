import getActionIds from "./get-action-ids";

// TODO move into a util
// Mocks the fetch global (not complete).
global.fetch = jest.fn((path: string) => {
  const responses: Record<string, string[]> = {
    [`http://localhost:3000/codeword/validCodeword`]: ["action1", "action2"],
  };
  return Promise.resolve({
    json: () => Promise.resolve(responses[path] || "codeword not found"),
    headers: {
      get: () => responses[path] ? "application/json" : "text/plain",
    },
  });
  // not good practice, but in this case TS is actually getting in our way for testing
}) as any;

describe("getActionIds", () => {
  it("returns the actions for a given codeword", async () => {
    expect(await getActionIds("validCodeword")).toEqual(["action1", "action2"]);
  });
  // this is not the direct requirement, but it's how the function determines how to handle the response
  it('returns an empty a string if the content type is not JSON', async () => {
    expect(await getActionIds("invalidCodeword")).toEqual("");
  });
  // TODO test cases where non-JSON is returned but we can still use it. Needs implementation
});
