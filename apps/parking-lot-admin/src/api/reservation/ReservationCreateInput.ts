export type ReservationCreateInput = {
  date?: Date | null;
  endDate?: Date | null;
  endTime?: string | null;
  spotId?: string | null;
  startTime?: string | null;
  vehicleId?: string | null;
};
