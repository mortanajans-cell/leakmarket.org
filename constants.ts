import { Database, Zap, Lock, Globe, Shield, Landmark, UserCheck, Radio, Server, Briefcase } from 'lucide-react';
import { NavItem, StatItem, FeatureItem, GalleryImage, ReferenceItem, DataCategory } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'SİSTEM', href: '#system' },
  { label: 'KATALOG', href: '#catalog' },
  { label: 'KANITLAR', href: '#evidence' },
  { label: 'REFERANSLAR', href: '#references' },
  { label: 'ERİŞİM', href: '#access' },
];

export const STATS: StatItem[] = [
  { label: 'VERİ KAPSAMI', value: '+60 ÜLKE', subValue: 'US, CN, RU, IR, TR...', color: 'blue' },
  { label: 'TOPLAM ARŞİV', value: '440 TB', color: 'green' },
  { label: 'ÜYELER', value: '8 / 10', subValue: 'SON 2 KONTENJAN', color: 'red' },
];

export const FEATURES: FeatureItem[] = [
  {
    title: 'Anında Teslimat',
    description: 'Blockchain onayı alındığı anda FTP/Cloud erişim bilgileri otomatik olarak iletilir.',
    icon: Zap,
  },
  {
    title: 'Global İstihbarat',
    description: 'Amerika, Çin, Rusya ve İran dahil olmak üzere 60\'tan fazla ülkenin kritik altyapı verileri.',
    icon: Globe,
  },
  {
    title: 'Gizli Bulut',
    description: 'Log tutmayan (No-Logs), %99.9 uptime garantili offshore bulletproof sunucular.',
    icon: Server,
  },
  {
    title: 'Sınırlı Erişim',
    description: 'Güvenlik ve hızı korumak adına sistem sadece 10 aktif üyeye hizmet verir.',
    icon: Lock,
  },
];

export const DATA_CATEGORIES: DataCategory[] = [
  {
    title: 'DEVLET & ASKERİ',
    icon: Shield,
    color: 'text-red-500',
    items: [
      'Askeri Envanter & Personel Verileri',
      'Elçilik Yazışmaları & Diplomatik Kayıtlar',
      'Bakanlık & Kamu Kurum Sızıntıları',
      'Vatandaşlık & Mernis Veritabanları',
      'Gizli Servis & İstihbarat Raporları'
    ]
  },
  {
    title: 'FİNANS & KRİPTO',
    icon: Landmark,
    color: 'text-yellow-500',
    items: [
      'Forex & Borsa Yatırımcı Listeleri',
      'Kripto Borsa Kullanıcı Dump (KYC)',
      'Global Bankacılık Verileri',
      'Kredi Kartı & Finansal Raporlar',
      'High Net Worth (Zengin) Birey Listeleri'
    ]
  },
  {
    title: 'KURUMSAL & TİCARİ',
    icon: Briefcase,
    color: 'text-blue-500',
    items: [
      'APT Gruplarından Company Leaks',
      'Özel Sektör Şirket Veritabanları',
      'Potansiyel Müşteri (Lead) Listeleri',
      'Tüketici Davranış Verileri',
      'Hastane & Sağlık Sektörü Kayıtları'
    ]
  },
  {
    title: 'İLETİŞİM & KİMLİK',
    icon: UserCheck,
    color: 'text-cyber-green',
    items: [
      'Pasaport & Ehliyet Taramaları',
      'GSM Operatör & Numara Verileri',
      'Sosyal Medya & Email Combo List',
      'Private Kaynaklar & Özel Arşivler',
      'Biyometrik Veri Örnekleri'
    ]
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, url: 'https://picsum.photos/seed/leak1/800/600', title: 'SQL_DUMP_MILITARY_US', size: '450 GB', date: '2023-11-02' },
  { id: 2, url: 'https://picsum.photos/seed/leak2/800/600', title: 'PASSPORT_SCANS_EU_ASIA', size: '120 GB', date: '2023-10-25' },
  { id: 3, url: 'https://picsum.photos/seed/leak3/800/600', title: 'FOREX_TRADER_LEADS_VIP', size: '85 GB', date: '2023-12-01' },
  { id: 4, url: 'https://picsum.photos/seed/leak4/800/600', title: 'MINISTRY_OF_DEFENSE_EMAILS', size: '1.2 TB', date: '2023-09-15' },
  { id: 5, url: 'https://picsum.photos/seed/leak5/800/600', title: 'CRYPTO_EXCHANGE_DB_FULL', size: '8 TB', date: '2023-11-20' },
  { id: 6, url: 'https://picsum.photos/seed/leak6/800/600', title: 'HOSPITAL_PATIENT_RECORDS', size: '220 GB', date: '2023-12-10' },
];

export const REFERENCES: ReferenceItem[] = [
  {
    user: 'ghost_protocol',
    date: '2 Saat Önce',
    comment: 'Erişim anahtarı ödemeden 10 dakika sonra geldi. Arşiv beklediğimden çok daha kapsamlı.',
    amount: '$5,000',
    status: 'VERIFIED',
    proofId: 'TX-99283'
  },
  {
    user: 'null_pointer',
    date: 'Dün',
    comment: 'Kurumsal veri klasörleri tam aradığım gibi. İndirme hızları saniyede 1GB üzerine çıkıyor.',
    amount: '$5,000',
    status: 'VERIFIED',
    proofId: 'TX-11029'
  },
  {
    user: 'red_team_leader',
    date: '3 Gün Önce',
    comment: 'Fiyatın hakkını veriyor. Piyasadaki en temiz data seti. Support ekibi çok ilgili.',
    amount: '$15,000',
    status: 'VERIFIED',
    proofId: 'TX-44021'
  },
  {
    user: 'anon_trader',
    date: '1 Hafta Önce',
    comment: 'SQL dumpları sorunsuz import edildi. Teşekkürler Leak Market.',
    amount: '$15,000',
    status: 'VERIFIED',
    proofId: 'TX-88331'
  }
];