export type Reservation = {
  createdAt: Date;
  date: Date | null;
  endDate: Date | null;
  endTime: string | null;
  id: string;
  spotId: string | null;
  startTime: string | null;
  updatedAt: Date;
  vehicleId: string | null;
};
