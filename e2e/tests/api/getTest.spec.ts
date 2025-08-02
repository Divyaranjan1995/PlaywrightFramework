import { test } from "@playwright/test";

test("Get Request Test", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts/1",
  );
  const responseBody = await response.json();
  // Assertions can be added here to validate the response
  test.expect(response.status()).toBe(200);
  test.expect(responseBody).toHaveProperty("id", 1);
});
