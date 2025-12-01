
import React from 'react';

export type Language = 'en' | 'fr';

export interface Testimonial {
  id: number;
  name: string;
  text: {
    en: string;
    fr: string;
  };
  role?: string;
}

export enum PageRoutes {
  HOME = '/',
  ABOUT = '/about',
  CONSTRUCTION = '/construction',
  REAL_ESTATE = '/real-estate',
  MINES = '/mines',
  CAREER = '/career',
  CONTACT = '/contact',
  ORDER = '/order'
}
