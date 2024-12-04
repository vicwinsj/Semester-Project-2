export async function accountError(data) {
  let errorMessage = "Unknown error occurred";

  if (data.errors && Array.isArray(data.errors)) {
    errorMessage = data.errors.map((err) => err.message + ".").join("\n");
  } else if (data.error && data.error.message) {
    errorMessage = data.error.message + ".";
  }
  throw new Error(errorMessage);
}
