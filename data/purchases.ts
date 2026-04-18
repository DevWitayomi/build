export type PurchaseItem = {
  name: string;
  country: string;
  flag: string;
};

// DEMO_PURCHASES: Placeholder demo data for UI preview only.
// Replace this with real checkout events from your payment provider or API.
export const DEMO_PURCHASES: PurchaseItem[] = [
  { name: 'Amaka', country: 'Nigeria', flag: '🇳🇬' },
  { name: 'Tobi', country: 'Ghana', flag: '🇬🇭' },
  { name: 'Sarah', country: 'Kenya', flag: '🇰🇪' },
  { name: 'Mia', country: 'United Kingdom', flag: '🇬🇧' },
  { name: 'David', country: 'South Africa', flag: '🇿🇦' }
];
