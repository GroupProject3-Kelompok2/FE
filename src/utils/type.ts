export interface PostLogin {
  email?: string;
  password?: string;
}

export interface PostRegis extends PostLogin {
  phone?: string;
  fullname?: string;
}

export interface getUsers extends PostRegis {
  profile_picture?: string;
  role?: string;
}

export interface DetailHomeType {
  homestay_id?: string;
  name?: string;
  description?: string;
  address?: string;
  price?: number;
  total_reviews?: number;
  average_rating?: number;
  homestay_pictures?: HomestayPicture[];
  reviews?: Review[];
}

interface Review {
  review?: string;
  rating?: number;
}

interface HomestayPicture {
  homestay_picture?: string;
}

export interface DataReserveType {
  homestay_id?: string;
  checkin_date?: string;
  checkout_date?: string;
}

export interface reservType {
  checkin_date: string;
  checkout_date: string;
  homestay_name: string;
  homestay_price: number;
  amount: number;
}

export interface ConfirmType {
  category?: string;
  price?: number;
  quantitiy?: number;
  gross_amount?: number;
  check_in_date?: string;
  check_out_date?: string;
  payment_status?: string;
}

export interface ReadResevType {
  reservation_id?: string;
  homestay_name?: string;
  checkin_date?: string;
  checkout_date?: string;
  homestay_price?: number;
  duration?: number;
  amount?: number;
  bank_account?: string;
  va_number?: string;
  status?: string;
}
