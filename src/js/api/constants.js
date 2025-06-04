const isGitHubPages = location.hostname.includes("github.io");

export const BASE_URL = isGitHubPages ? "/Semester-Project-2/" : "/";

export const API_KEY = import.meta.env.VITE_API_KEY;

export const API_BASE = "https://v2.api.noroff.dev";

export const API_AUTH = `${API_BASE}/auth`;

export const API_AUTH_LOGIN = `${API_AUTH}/login`;

export const API_AUTH_REGISTER = `${API_AUTH}/register`;

export const API_AUTH_KEY = `${API_AUTH}/create-api-key`;

export const API_AUCTION = `${API_BASE}/auction`;

export const API_AUCTION_LISTINGS = `${API_AUCTION}/listings`;

export const API_AUCTION_PROFILES = `${API_AUCTION}/profiles`;
