import { API_AUCTION_LISTINGS } from "../../api/constants";
import { doFetch } from "../../utilities/doFetch";
import { generateErrorMessage } from "../../utilities/errorMessage";

export async function placeBid(event, id, { _seller, _bids, amount } = {}) {
  event.preventDefault();
  const url = new URL(`${API_AUCTION_LISTINGS}/${id}/bids`);
  if (_seller) url.searchParams.append("_seller", "true");
  if (_bids) url.searchParams.append("_bids", "true");

  const bid = document.getElementById("bid-amount");

  const data = {
    amount,
  };

  try {
    const response = await doFetch(url, {
      method: "POST",
      body: data,
    });

    if (response) {
      alert("Bid placed!");
      location.reload();
    }
  } catch (error) {
    bid.classList.add("border", "border-salmonRed", "bg-red-50");
    const errorDetails = JSON.parse(error.message.split(". ")[1] || "{}");
    generateErrorMessage(errorDetails);
    console.error("There was a problem with the fetch operation:", error);
  }
}
