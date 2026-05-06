type hobbyList =
  | 'skydiving'
  | 'singing'
  | 'fishing'
  | 'videogaming'
  | 'working out'
  | 'traveling'
  | 'reading'
  | 'studying'
  | 'learning languages'
  | 'taking photos'
  | 'dancing'
  | 'other';
export interface User {
  name: string;
  surname: string;
  password: string;
  confirmPassword: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  postalCode: string;
  birthDate: Date | string;
  sex: 'male' | 'female' | 'other';
  hobbies: hobbyList[];
  personality: string;
  isConfirmRules: boolean;
}
