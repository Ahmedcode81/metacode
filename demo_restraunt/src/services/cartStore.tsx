/**
 * CART STORE — API-ready order state
 * Manages the customer's order. In the future, checkout will
 * submit this to the Management System API.
 */
import {
  createContext,
  useContext,
  useMemo,
  useState,
  useCallback,
  type ReactNode,
} from 'react';
import { Product } from '../config/menu';

export interface CartLineItem {
  /** Unique key combining product + selected modifiers. */
  key: string;
  product: Product;
  quantity: number;
  selectedModifiers: Record<string, string[]>;
  unitPrice: number;
}

interface CartContextValue {
  items: CartLineItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (
    product: Product,
    quantity: number,
    modifiers: Record<string, string[]>
  ) => void;
  removeItem: (key: string) => void;
  updateQuantity: (key: string, quantity: number) => void;
  clearCart: () => void;
  count: number;
  total: number;
}

const CartContext = createContext<CartContextValue | null>(null);

/** Compute the unit price including modifier surcharges. */
function computeUnitPrice(
  product: Product,
  modifiers: Record<string, string[]>
): number {
  let price = product.price;
  for (const modId of Object.keys(modifiers)) {
    const modifier = product.modifiers.find((m) => m.id === modId);
    if (!modifier) continue;
    for (const optId of modifiers[modId]) {
      const opt = modifier.options.find((o) => o.id === optId);
      if (opt) price += opt.price;
    }
  }
  return price;
}

function buildKey(
  productId: string,
  modifiers: Record<string, string[]>
): string {
  const sorted = Object.keys(modifiers)
    .sort()
    .map((k) => `${k}:${[...modifiers[k]].sort().join(',')}`)
    .join('|');
  return `${productId}__${sorted}`;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartLineItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback(
    (
      product: Product,
      quantity: number,
      modifiers: Record<string, string[]>
    ) => {
      const key = buildKey(product.id, modifiers);
      const unitPrice = computeUnitPrice(product, modifiers);
      setItems((prev) => {
        const existing = prev.find((i) => i.key === key);
        if (existing) {
          return prev.map((i) =>
            i.key === key ? { ...i, quantity: i.quantity + quantity } : i
          );
        }
        return [
          ...prev,
          { key, product, quantity, selectedModifiers: modifiers, unitPrice },
        ];
      });
      setIsOpen(false);
    },
    []
  );

  const removeItem = useCallback((key: string) => {
    setItems((prev) => prev.filter((i) => i.key !== key));
  }, []);

  const updateQuantity = useCallback((key: string, quantity: number) => {
    setItems((prev) =>
      prev
        .map((i) => (i.key === key ? { ...i, quantity } : i))
        .filter((i) => i.quantity > 0)
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const count = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  );
  const total = useMemo(
    () => items.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      isOpen,
      openCart,
      closeCart,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      count,
      total,
    }),
    [
      items,
      isOpen,
      openCart,
      closeCart,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      count,
      total,
    ]
  );

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used within CartProvider');
  }
  return ctx;
}
