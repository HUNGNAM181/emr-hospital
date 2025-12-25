export function normalizeRecordInput(input: any) {
  if (typeof input.date === "string") {
    input.date = new Date(input.date);
  }
  return input;
}
