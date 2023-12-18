import { json } from "@sveltejs/kit";

export const config = {
  runtime: "edge",
};

export function GET() {
  const number = Math.floor(Math.random() * 6) + 1;

  return json(number);
}
