
import { Region, City, ServiceType } from './types';

export const REGIONS: Region[] = [
  { id: '1', name: 'طنجة - تطوان - الحسيمة' },
  { id: '2', name: 'الشرق' },
  { id: '3', name: 'فاس - مكناس' },
  { id: '4', name: 'الرباط - سلا - القنيطرة' },
  { id: '5', name: 'بني ملال - خنيفرة' },
  { id: '6', name: 'الدار البيضاء - سطات' },
  { id: '7', name: 'مراكش - آسفي' },
  { id: '8', name: 'درعة - تافيلالت' },
  { id: '9', name: 'سوس - ماسة' },
  { id: '10', name: 'كلميم - واد نون' },
  { id: '11', name: 'العيون - الساقية الحمراء' },
  { id: '12', name: 'الداخلة - وادي الذهب' }
];

export const CITIES: City[] = [
  { id: 'c1', regionId: '1', name: 'طنجة' },
  { id: 'c2', regionId: '1', name: 'تطوان' },
  { id: 'c30', regionId: '4', name: 'الرباط' },
  { id: 'c31', regionId: '4', name: 'سلا' },
  { id: 'c50', regionId: '6', name: 'الدار البيضاء' },
  { id: 'c60', regionId: '7', name: 'مراكش' },
  { id: 'c80', regionId: '9', name: 'أكادير' },
  { id: 'c100', regionId: '11', name: 'العيون' },
  { id: 'c110', regionId: '12', name: 'الداخلة' }
];

export interface ExtendedServiceType extends ServiceType {
  imageUrl: string;
}

export const INITIAL_SERVICES: ExtendedServiceType[] = [
  { id: 's1', name: 'نجار', imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=600' },
  { id: 's2', name: 'كهربائي (تريسيان)', imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600' },
  { id: 's3', name: 'سباك (بلومبي)', imageUrl: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=600' },
  { id: 's4', name: 'صباغ', imageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600' },
  { id: 's5', name: 'بناء', imageUrl: 'https://images.unsplash.com/photo-1541933032313-2d103362140a?auto=format&fit=crop&q=80&w=600' },
  { id: 's6', name: 'حداد / سودور', imageUrl: 'https://images.unsplash.com/photo-1530124566582-ab05d444493a?auto=format&fit=crop&q=80&w=600' },
  { id: 's7', name: 'ميكانيكي', imageUrl: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=600' },
  { id: 's9', name: 'أشغال الألمنيوم', imageUrl: 'https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?auto=format&fit=crop&q=80&w=600' },
  { id: 's10', name: 'جباص', imageUrl: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=600' },
  { id: 's12', name: 'ديكور المنازل', imageUrl: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=600' },
  { id: 's13', name: 'شغالة / منظف منازل', imageUrl: 'https://images.unsplash.com/photo-1581578731522-aa76329c0f05?auto=format&fit=crop&q=80&w=600' },
  { id: 's16', name: 'بستنة', imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=600' }
];

export const SUBSCRIPTION_PLANS = [
  { months: 1, price: 30 },
  { months: 3, price: 90 },
  { months: 12, price: 360 }
];

export const MOROCCAN_PAYMENT_CHANNELS = [
  { id: 'card', name: 'بطاقة بنكية', type: 'ELECTRONIC' },
  { id: 'wafacash', name: 'Wafacash / Cash Plus', type: 'AGENCY' },
  { id: 'bank', name: 'تحويل بنكي (CIH, BMCE...)', type: 'BANK' }
];
