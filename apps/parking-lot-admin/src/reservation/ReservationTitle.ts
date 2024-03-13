import { Reservation as TReservation } from "../api/reservation/Reservation";

export const RESERVATION_TITLE_FIELD = "endTime";

export const ReservationTitle = (record: TReservation): string => {
  return record.endTime?.toString() || String(record.id);
};
