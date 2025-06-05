// tests/findCurrentBid.test.js
import { describe, it, expect } from "vitest";
import { findCurrentBid } from "./currentBid";

describe("findCurrentBid", () => {
  it("returns default bid when there are no bids", () => {
    const listing = { bids: [] };
    const result = findCurrentBid(listing);

    expect(result.amount).toBe(0);
    expect(result.bidder.name).toBe("No bids yet");
  });

  it("returns highest bid from the list", () => {
    const listing = {
      bids: [
        { amount: 100, bidder: { name: "Alice" } },
        { amount: 250, bidder: { name: "Bob" } },
        { amount: 180, bidder: { name: "Charlie" } },
      ],
    };

    const result = findCurrentBid(listing);

    expect(result.amount).toBe(250);
    expect(result.bidder.name).toBe("Bob");
  });

  it("handles undefined bids gracefully", () => {
    const listing = {};
    const result = findCurrentBid(listing);

    expect(result.amount).toBe(0);
    expect(result.bidder.name).toBe("No bids yet");
  });
});
