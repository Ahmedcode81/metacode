/**
 * RESTAURANT DATA CONTEXT — Single data access point for all
 * restaurant-specific content.
 *
 * The UI consumes data ONLY through this hook (which fetches via
 * the API service layer). To connect the Management System later,
 * only the bodies of `services/api.ts` need to change — the UI
 * here remains untouched.
 */
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  fetchRestaurantConfig,
  fetchMenuCategories,
  fetchBranches,
  fetchOffers,
  fetchReservationOptions,
  type ReservationOptions,
} from './api';
import type { RestaurantConfig } from '../config/restaurant';
import type { MenuCategory } from '../config/menu';
import type { Branch } from '../config/branches';
import type { Offer } from '../config/offers';

interface RestaurantData {
  config: RestaurantConfig | null;
  menu: MenuCategory[];
  branches: Branch[];
  offers: Offer[];
  reservationOptions: ReservationOptions | null;
}

const RestaurantDataContext = createContext<RestaurantData | null>(null);

export function RestaurantDataProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [config, setConfig] = useState<RestaurantConfig | null>(null);
  const [menu, setMenu] = useState<MenuCategory[]>([]);
  const [branches, setBranches] = useState<Branch[]>([]);
  const [offers, setOffers] = useState<Offer[]>([]);
  const [reservationOptions, setReservationOptions] =
    useState<ReservationOptions | null>(null);

  useEffect(() => {
    let active = true;
    (async () => {
      const [cfg, categories, branchList, activeOffers, options] =
        await Promise.all([
          fetchRestaurantConfig(),
          fetchMenuCategories(),
          fetchBranches(),
          fetchOffers(),
          fetchReservationOptions(),
        ]);
      if (!active) return;
      setConfig(cfg);
      setMenu(categories);
      setBranches(branchList);
      setOffers(activeOffers);
      setReservationOptions(options);
    })();
    return () => {
      active = false;
    };
  }, []);

  const value = useMemo(
    () => ({ config, menu, branches, offers, reservationOptions }),
    [config, menu, branches, offers, reservationOptions]
  );

  return (
    <RestaurantDataContext.Provider value={value}>
      {children}
    </RestaurantDataContext.Provider>
  );
}

export function useRestaurantData(): RestaurantData {
  const ctx = useContext(RestaurantDataContext);
  if (!ctx) {
    throw new Error(
      'useRestaurantData must be used within RestaurantDataProvider'
    );
  }
  return ctx;
}

export default RestaurantDataContext;
