type hobbyList =
  | 'skydiving'
  | 'singing'
  | 'bearDrinking'
  | 'fishing'
  | 'videogaming'
  | 'working out'
  | 'traveling'
  | 'reading'
  | 'studying'
  | ' learning lenguages'
  | 'other'
  | 'taking photos'
  | 'dansing';
export interface User {
  name: string;
  surname: string;
  password: string;
  confirmPassword: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  postalCode: number;
  birthDate: Date;
  sex: 'male' | 'female';
  hobbies: hobbyList[];
  personality: string;
  isConfirmRules: boolean;
}
