/**
 * RESERVATIONS CONFIG — Mock data & time slots
 * Currently mock; will be driven by the Management System API.
 */

export interface ReservationFormData {
  date: string;
  time: string;
  guests: number;
  name: string;
  nameAr: string;
  phone: string;
  email?: string;
  notes?: string;
  branchId: string;
}

export const timeSlots: string[] = [
  '12:00 PM',
  '12:30 PM',
  '1:00 PM',
  '1:30 PM',
  '2:00 PM',
  '2:30 PM',
  '3:00 PM',
  '6:00 PM',
  '6:30 PM',
  '7:00 PM',
  '7:30 PM',
  '8:00 PM',
  '8:30 PM',
  '9:00 PM',
  '9:30 PM',
  '10:00 PM',
];

export const guestOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20];

export const emptyReservation: ReservationFormData = {
  date: '',
  time: '',
  guests: 2,
  name: '',
  nameAr: '',
  phone: '',
  email: '',
  notes: '',
  branchId: '',
};

/**
 * Mock reservation submission — replace with API call later.
 * Returns a promise that resolves with a confirmation reference.
 */
export async function submitReservation(
  data: ReservationFormData
): Promise<{ reference: string }> {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 900));
  // data is reserved for the future API payload.
  void data;
  const reference = `RES-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
  // In future: POST to /api/reservations
  return { reference };
}

export default {
  timeSlots,
  guestOptions,
  emptyReservation,
  submitReservation,
};
