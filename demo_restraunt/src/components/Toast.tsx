/**
 * TOAST — Minimal, elegant toast notifications (e.g. add-to-order).
 * Rendered at the top center; auto-dismisses.
 */
import { AnimatePresence, motion } from 'motion/react';
import { useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

interface ToastState {
  id: number;
  message: string;
}

interface ToastProps {
  toast: ToastState | null;
  onDismiss: () => void;
}

export default function Toast({ toast, onDismiss }: ToastProps) {
  const { lang } = useLanguage();

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(onDismiss, 2600);
    return () => clearTimeout(timer);
  }, [toast, onDismiss]);

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-24 z-[110] flex justify-center px-4"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: -16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 380, damping: 28 }}
            className="pointer-events-auto flex items-center gap-3 rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-cinematic"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-success/20 text-success">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="h-3.5 w-3.5"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
