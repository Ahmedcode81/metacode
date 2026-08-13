/**
 * RESERVATION — Multi-step booking experience with smooth
 * animated transitions between steps.
 */
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import { createReservation, fetchReservationOptions, type ReservationFormData } from '../services/api';
import { useRestaurantData } from '../services/RestaurantDataContext';

type Step = 'date' | 'time' | 'guests' | 'details' | 'confirm';

export default function Reservation() {
  const { t, lang } = useLanguage();
  const { branches } = useRestaurantData();
  const [step, setStep] = useState<Step>('date');
  const [options, setOptions] = useState<Awaited<ReturnType<typeof fetchReservationOptions>> | null>(null);
  const [form, setForm] = useState<ReservationFormData>({} as ReservationFormData);
  const [reference, setReference] = useState<string>('');
  const [submitting, setSubmitting] = useState(false);

  // Load reservation options
  useEffect(() => {
    fetchReservationOptions().then((data) => {
      setOptions(data);
      setForm(data.emptyForm);
    });
  }, []);

  const steps: Step[] = ['date', 'time', 'guests', 'details', 'confirm'];
  const stepIndex = steps.indexOf(step);

  const next = () => {
    const idx = steps.indexOf(step);
    if (idx < steps.length - 1) setStep(steps[idx + 1]);
  };
  const back = () => {
    const idx = steps.indexOf(step);
    if (idx > 0) setStep(steps[idx - 1]);
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    const res = await createReservation(form);
    setReference(res.reference);
    setSubmitting(false);
    setStep('confirm');
  };

  const today = new Date().toISOString().split('T')[0];

  if (!options) {
    return (
      <section id="reservation" className="py-20">
        <div className="container-rest mx-auto">
          <div className="flex items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="reservation" className="py-20">
      <div className="container-rest mx-auto">
        <div className="mb-12 text-center">
          <span className="section-eyebrow">{t('reserve')}</span>
          <h2 className="section-title mt-3">{t('reservationTitle')}</h2>
          <p className="section-sub mx-auto">{t('reservationSubtitle')}</p>
        </div>

        <div className="mx-auto max-w-3xl">
          {/* Progress indicator */}
          <div className="mb-10 flex items-center justify-between">
            {steps.map((s, i) => (
              <div key={s} className="flex flex-1 items-center">
                <button
                  onClick={() => i < stepIndex && setStep(s)}
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all ${
                    i <= stepIndex
                      ? 'bg-primary-gradient text-white shadow-primary'
                      : 'border border-borderline text-muted'
                  }`}
                >
                  {i < stepIndex ? '✓' : i + 1}
                </button>
                {i < steps.length - 1 && (
                  <div
                    className={`mx-2 h-0.5 flex-1 rounded-full transition-colors ${
                      i < stepIndex ? 'bg-primary' : 'bg-borderline'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-cardlg border border-borderline bg-white p-6 shadow-card sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                {/* DATE */}
                {step === 'date' && (
                  <div>
                    <h3 className="mb-6 text-center font-heading text-2xl font-bold text-secondary">
                      {t('stepDate')}
                    </h3>
                    <input
                      type="date"
                      min={today}
                      value={form.date}
                      onChange={(e) =>
                        setForm({ ...form, date: e.target.value })
                      }
                      className="mx-auto block w-full max-w-sm rounded-card border border-borderline px-4 py-3 text-center text-lg outline-none transition-colors focus:border-primary"
                    />
                    <div className="mt-8 flex justify-end">
                      <button
                        onClick={next}
                        disabled={!form.date}
                        className="rounded-full bg-primary-gradient px-8 py-3 text-sm font-semibold text-white shadow-primary transition-transform hover:scale-[1.02] disabled:opacity-50"
                      >
                        {t('continue')}
                      </button>
                    </div>
                  </div>
                )}

                {/* TIME */}
                {step === 'time' && (
                  <div>
                    <h3 className="mb-6 text-center font-heading text-2xl font-bold text-secondary">
                      {t('stepTime')}
                    </h3>
                    <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                      {options?.timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setForm({ ...form, time })}
                          className={`rounded-full border px-3 py-2 text-sm font-medium transition-all ${
                            form.time === time
                              ? 'border-primary bg-primary/5 text-primary'
                              : 'border-borderline text-foreground hover:border-primary/40'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                    <div className="mt-8 flex justify-between">
                      <button
                        onClick={back}
                        className="rounded-full border border-borderline px-6 py-3 text-sm font-semibold text-muted"
                      >
                        {t('back')}
                      </button>
                      <button
                        onClick={next}
                        disabled={!form.time}
                        className="rounded-full bg-primary-gradient px-8 py-3 text-sm font-semibold text-white shadow-primary transition-transform hover:scale-[1.02] disabled:opacity-50"
                      >
                        {t('continue')}
                      </button>
                    </div>
                  </div>
                )}

                {/* GUESTS */}
                {step === 'guests' && (
                  <div>
                    <h3 className="mb-6 text-center font-heading text-2xl font-bold text-secondary">
                      {t('stepGuests')}
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                      {options?.guestOptions.map((g) => (
                        <button
                          key={g}
                          onClick={() => setForm({ ...form, guests: g })}
                          className={`h-16 w-16 rounded-full border text-xl font-bold transition-all ${
                            form.guests === g
                              ? 'border-primary bg-primary-gradient text-white shadow-primary'
                              : 'border-borderline text-foreground hover:border-primary/40'
                          }`}
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                    <div className="mt-8 flex justify-between">
                      <button
                        onClick={back}
                        className="rounded-full border border-borderline px-6 py-3 text-sm font-semibold text-muted"
                      >
                        {t('back')}
                      </button>
                      <button
                        onClick={next}
                        className="rounded-full bg-primary-gradient px-8 py-3 text-sm font-semibold text-white shadow-primary transition-transform hover:scale-[1.02]"
                      >
                        {t('continue')}
                      </button>
                    </div>
                  </div>
                )}

                {/* DETAILS */}
                {step === 'details' && (
                  <div>
                    <h3 className="mb-6 text-center font-heading text-2xl font-bold text-secondary">
                      {t('stepDetails')}
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <select
                        value={form.branchId}
                        onChange={(e) =>
                          setForm({ ...form, branchId: e.target.value })
                        }
                        className="rounded-card border border-borderline px-4 py-3 outline-none transition-colors focus:border-primary"
                      >
                        <option value="">{t('selectBranch')}</option>
                        {branches?.map((b) => (
                          <option key={b.id} value={b.id}>
                            {lang === 'ar' ? b.nameAr : b.name}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        placeholder={t('phone')}
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        className="rounded-card border border-borderline px-4 py-3 outline-none transition-colors focus:border-primary"
                      />
                      <input
                        type="text"
                        placeholder={t('name')}
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className="rounded-card border border-borderline px-4 py-3 outline-none transition-colors focus:border-primary"
                      />
                      <input
                        type="email"
                        placeholder={t('email')}
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="rounded-card border border-borderline px-4 py-3 outline-none transition-colors focus:border-primary"
                      />
                      <textarea
                        placeholder={t('notes')}
                        value={form.notes}
                        onChange={(e) =>
                          setForm({ ...form, notes: e.target.value })
                        }
                        rows={3}
                        className="rounded-card border border-borderline px-4 py-3 outline-none transition-colors focus:border-primary sm:col-span-2"
                      />
                    </div>
                    <div className="mt-8 flex justify-between">
                      <button
                        onClick={back}
                        className="rounded-full border border-borderline px-6 py-3 text-sm font-semibold text-muted"
                      >
                        {t('back')}
                      </button>
                      <button
                        onClick={next}
                        disabled={!form.name || !form.phone || !form.branchId}
                        className="rounded-full bg-primary-gradient px-8 py-3 text-sm font-semibold text-white shadow-primary transition-transform hover:scale-[1.02] disabled:opacity-50"
                      >
                        {t('continue')}
                      </button>
                    </div>
                  </div>
                )}

                {/* CONFIRM */}
                {step === 'confirm' && (
                  <div className="text-center">
                    {reference ? (
                      <div className="py-6">
                        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-success/10">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-10 w-10 text-success"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </div>
                        <h3 className="font-heading text-2xl font-bold text-secondary">
                          {t('reservationConfirmed')}
                        </h3>
                        <p className="mt-2 text-muted">
                          {t('reservationReference')}:{' '}
                          <span className="font-bold text-primary">
                            {reference}
                          </span>
                        </p>
                        <p className="mt-4 text-sm text-muted">
                          {form.date} · {form.time} · {form.guests}{' '}
                          {t('guests')}
                        </p>
                      </div>
                    ) : (
                      <div className="py-10">
                        <h3 className="font-heading text-2xl font-bold text-secondary">
                          {t('confirmDetails')}
                        </h3>
                        <dl className="mx-auto mt-6 max-w-sm space-y-3 text-left">
                          {[
                            [t('date'), form.date],
                            [t('time'), form.time],
                            [t('guests'), String(form.guests)],
                            [t('name'), form.name],
                            [t('phone'), form.phone],
                          ].map(([label, value]) => (
                            <div
                              key={label}
                              className="flex justify-between border-b border-borderline pb-2"
                            >
                              <dt className="text-muted">{label}</dt>
                              <dd className="font-semibold text-secondary">
                                {value}
                              </dd>
                            </div>
                          ))}
                        </dl>
                        <div className="mt-8 flex justify-center gap-3">
                          <button
                            onClick={back}
                            className="rounded-full border border-borderline px-6 py-3 text-sm font-semibold text-muted"
                          >
                            {t('back')}
                          </button>
                          <button
                            onClick={handleSubmit}
                            disabled={submitting}
                            className="rounded-full bg-primary-gradient px-8 py-3 text-sm font-semibold text-white shadow-primary transition-transform hover:scale-[1.02] disabled:opacity-60"
                          >
                            {submitting
                              ? t('submitting')
                              : t('confirmReservation')}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
