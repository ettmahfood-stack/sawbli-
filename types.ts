
export enum SubscriptionStatus {
  ACTIVE = 'ACTIVE',
  PENDING = 'PENDING',
  EXPIRED = 'EXPIRED'
}

export interface Region {
  id: string;
  name: string;
}

export interface City {
  id: string;
  name: string;
  regionId: string;
}

export interface ServiceType {
  id: string;
  name: string;
}

export interface Artisan {
  id: string;
  name: string;
  email?: string;
  phone: string;
  serviceTypeId: string;
  cityId: string;
  regionId: string;
  description: string;
  photoUrl?: string;
  approxPrice?: string;
  status: SubscriptionStatus;
  expiryDate: string;
  createdAt: string;
  rating: number; // 0 to 5
  reviewsCount: number;
  notificationPreferences: {
    email: boolean;
    sms: boolean;
  };
}

export interface PaymentRecord {
  id: string;
  artisanId: string;
  amount: number;
  months: number;
  method: 'CARD' | 'TRANSFER' | 'CASH';
  proofUrl?: string;
  status: 'PENDING' | 'CONFIRMED' | 'REJECTED';
  date: string;
}

export interface NotificationLog {
  id: string;
  artisanId: string;
  type: 'EMAIL' | 'SMS';
  trigger: '7_DAYS' | '2_DAYS' | 'EXPIRED';
  sentAt: string;
}
