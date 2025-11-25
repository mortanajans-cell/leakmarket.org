import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  label: string;
  value: string;
  subValue?: string;
  color: 'green' | 'red' | 'blue';
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface GalleryImage {
  id: number;
  url: string;
  title: string;
  size: string;
  date: string;
}

export interface ReferenceItem {
  user: string;
  date: string;
  comment: string;
  amount: string;
  status: 'VERIFIED' | 'PENDING';
  proofId: string;
}

export interface DataCategory {
  title: string;
  items: string[];
  icon: React.ComponentType<any>;
  color: string;
}

export type Language = 'TR' | 'EN' | 'ES' | 'RU' | 'AR';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}