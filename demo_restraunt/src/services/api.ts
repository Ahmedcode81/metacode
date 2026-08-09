/**
 * ============================================================
 * API / SERVICE ABSTRACTION
 * ============================================================
 * Today: returns mock data (from /config).
 * Later: swap these bodies to call the Restaurant Management
 * System REST API. The UI imports ONLY from this module, so it
 * will not need to be rewritten when the backend arrives.
 * ============================================================
 */
import restaurantConfig from '../config/restaurant';
import menu, { MenuCategory, Product } from '../config/menu';
import branches, { Branch } from '../config/branches';
import offers, { Offer } from '../config/offers';
import {
  timeSlots,
  guestOptions,
  emptyReservation,
  submitReservation,
  type ReservationFormData,
} from '../config/reservations';

/** Simulate network latency for mock data. */
function delay<T>(data: T, ms = 120): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(data), ms));
}

/* -------------------- Restaurant -------------------- */
export async function fetchRestaurantConfig() {
  // Later: GET /api/restaurant/:slug
  return delay(restaurantConfig);
}

/* -------------------- Menu -------------------- */
export async function fetchMenuCategories(): Promise<MenuCategory[]> {
  // Later: GET /api/menu/categories
  return delay(menu);
}

export async function fetchProductsByCategory(
  categoryId: string
): Promise<Product[]> {
  // Later: GET /api/menu/categories/:id/products
  const category = menu.find((c) => c.id === categoryId);
  return delay(category ? category.products : []);
}

export async function fetchFeaturedProducts(): Promise<Product[]> {
  // Later: GET /api/menu/featured
  const featured = menu.flatMap((c) => c.products).filter((p) => p.featured);
  return delay(featured);
}

export async function fetchProductById(id: string): Promise<Product | null> {
  const all = menu.flatMap((c) => c.products);
  const product = all.find((p) => p.id === id);
  return delay(product ?? null);
}

/* -------------------- Branches -------------------- */
export async function fetchBranches(): Promise<Branch[]> {
  // Later: GET /api/branches
  return delay(branches);
}

/* -------------------- Offers -------------------- */
export async function fetchOffers(): Promise<Offer[]> {
  // Later: GET /api/offers?active=true
  return delay(offers.filter((o) => o.active));
}

/* -------------------- Reservations -------------------- */
export interface ReservationOptions {
  timeSlots: string[];
  guestOptions: number[];
  emptyForm: ReservationFormData;
}

export type { ReservationFormData };

export async function fetchReservationOptions(): Promise<ReservationOptions> {
  // Later: GET /api/reservations/options
  return delay({
    timeSlots,
    guestOptions,
    emptyForm: { ...emptyReservation },
  });
}

export async function createReservation(
  data: ReservationFormData
): Promise<{ reference: string }> {
  // Later: POST /api/reservations
  return submitReservation(data);
}

/* -------------------- Contact -------------------- */
export const contactChannels = {
  phone: restaurantConfig.contact.phone,
  whatsapp: restaurantConfig.contact.whatsapp,
  email: restaurantConfig.contact.email,
  address: restaurantConfig.contact.address,
  addressAr: restaurantConfig.contact.addressAr,
  social: restaurantConfig.social,
};

export default {
  fetchRestaurantConfig,
  fetchMenuCategories,
  fetchProductsByCategory,
  fetchFeaturedProducts,
  fetchProductById,
  fetchBranches,
  fetchOffers,
  fetchReservationOptions,
  createReservation,
  contactChannels,
};
