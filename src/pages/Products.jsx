import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '../store/useCartStore';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import kurtaHero from '../Image/hero_kurta.jpg';

import sherwani1 from '../Image/sherwani_1.jpg';
import sherwani2 from '../Image/sherwani_2.jpg';
import sherwani3 from '../Image/sherwani_3.jpg';
import sherwani4 from '../Image/sherwani_4.jpg';
import sherwani5 from '../Image/sherwani_5.jpg';
import sherwani6 from '../Image/sherwani_6.jpg';
import sherwani7 from '../Image/sherwani_7.jpg';
import sherwani8 from '../Image/sherwani_8.jpg';
import sherwani9 from '../Image/sherwani_9.jpg';
import sherwani10 from '../Image/sherwani_10.jpg';
import sherwani11 from '../Image/sherwani_11.jpg';
import sherwani12 from '../Image/sherwani_12.jpg';
import sherwani13 from '../Image/sherwani_13.jpg';
import sherwani14 from '../Image/sherwani_14.jpg';
import sherwani15 from '../Image/sherwani_15.jpg';
import sherwani16 from '../Image/sherwani_16.jpg';
import sherwani17 from '../Image/sherwani_17.jpg';
import sherwani18 from '../Image/sherwani_18.jpg';
import sherwani19 from '../Image/sherwani_19.jpg';
import sherwani20 from '../Image/sherwani_20.jpg';
import sherwani21 from '../Image/sherwani_21.jpg';

import kurta1 from '../Image/kurta_1.jpg';
import kurta2 from '../Image/kurta_2.jpg';
import kurta3 from '../Image/kurta_3.jpg';
import kurta4 from '../Image/kurta_4.jpg';
import kurta5 from '../Image/kurta_5.jpg';
import kurta6 from '../Image/kurta_6.jpg';
import kurta7 from '../Image/kurta_7.jpg';
import kurta8 from '../Image/kurta_8.jpg';
import kurta9 from '../Image/kurta_9.jpg';
import kurta10 from '../Image/kurta_10.jpg';
import kurta11 from '../Image/kurta_11.jpg';
import kurta12 from '../Image/kurta_12.jpg';
import kurta13 from '../Image/kurta_13.jpg';

import suit1 from '../Image/suit_1.jpg';
import suit2 from '../Image/suit_2.jpg';
import suit3 from '../Image/suit_3.jpg';
import suit4 from '../Image/suit_4.jpg';
import suit5 from '../Image/suit_5.jpg';
import suit6 from '../Image/suit_6.jpg';
import suit7 from '../Image/suit_7.jpg';
import suit8 from '../Image/suit_8.jpg';
import suit9 from '../Image/suit_9.jpg';
import suit10 from '../Image/suit_10.jpg';
import suit11 from '../Image/suit_11.jpg';
import suit12 from '../Image/suit_12.jpg';
import suit13 from '../Image/suit_13.jpg';
import suit14 from '../Image/suit_14.jpg';
import suit15 from '../Image/suit_15.jpg';
import suit16 from '../Image/suit_16.jpg';
import suit17 from '../Image/suit_17.jpg';
import suit18 from '../Image/suit_18.jpg';

import blazer1 from '../Image/blazer_1.jpg';
import blazer2 from '../Image/blazer_2.jpg';
import blazer3 from '../Image/blazer_3.jpg';
import blazer4 from '../Image/blazer_4.jpg';
import blazer5 from '../Image/blazer_5.jpg';
import blazer6 from '../Image/blazer_6.jpg';
import blazer7 from '../Image/blazer_7.jpg';
import blazer8 from '../Image/blazer_8.jpg';
import blazer9 from '../Image/blazer_9.jpg';
import blazer10 from '../Image/blazer_10.jpg';
import blazer11 from '../Image/blazer_11.jpg';
import blazer12 from '../Image/blazer_12.jpg';
import blazer13 from '../Image/blazer_13.jpg';
import blazer14 from '../Image/blazer_14.jpg';
import blazer15 from '../Image/blazer_15.jpg';
import blazer16 from '../Image/blazer_16.jpg';

import pathani1 from '../Image/pathani_1.jpg';
import pathani2 from '../Image/pathani_2.jpg';
import pathani3 from '../Image/pathani_3.jpg';
import pathani4 from '../Image/pathani_4.jpg';
import pathani5 from '../Image/pathani_5.jpg';
import pathani6 from '../Image/pathani_6.jpg';

import indowestern1 from '../Image/indowestern_1.jpg';
import indowestern2 from '../Image/indowestern_2.jpg';
import indowestern3 from '../Image/indowestern_3.jpg';
import indowestern4 from '../Image/indowestern_4.jpg';

import shirt1 from '../Image/shirt_1.jpg';
import shirt2 from '../Image/shirt_2.jpg';
import shirt3 from '../Image/shirt_3.jpg';
import shirt4 from '../Image/shirt_4.jpg';
import shirt5 from '../Image/shirt_5.jpg';
import shirt6 from '../Image/shirt_6.jpg';
import shirt7 from '../Image/shirt_7.jpg';
import shirt8 from '../Image/shirt_8.jpg';
import shirt9 from '../Image/shirt_9.jpg';
import shirt10 from '../Image/shirt_10.jpg';
import shirt11 from '../Image/shirt_11.jpg';
import shirt12 from '../Image/shirt_12.jpg';
import shirt13 from '../Image/shirt_13.jpg';
import shirt14 from '../Image/shirt_14.jpg';
import shirt15 from '../Image/shirt_15.jpg';
import shirt16 from '../Image/shirt_16.jpg';
import shirt17 from '../Image/shirt_17.jpg';
import shirt18 from '../Image/shirt_18.jpg';
import shirt19 from '../Image/shirt_19.jpg';
import shirt20 from '../Image/shirt_20.jpg';
import shirt21 from '../Image/shirt_21.jpg';
import shirt22 from '../Image/shirt_22.jpg';
import shirt23 from '../Image/shirt_23.jpg';
import shirt24 from '../Image/shirt_24.jpg';
import shirt25 from '../Image/shirt_25.jpg';
import shirt26 from '../Image/shirt_26.jpg';
import shirt27 from '../Image/shirt_27.jpg';
import shirt28 from '../Image/shirt_28.jpg';
import shirt29 from '../Image/shirt_29.jpg';

import payjama1 from '../Image/payjama_1.jpg';
import payjama2 from '../Image/payjama_2.jpg';
import payjama3 from '../Image/payjama_3.jpg';
import payjama4 from '../Image/payjama_4.jpg';
import payjama5 from '../Image/payjama_5.jpg';
import payjama6 from '../Image/payjama_6.jpg';
import payjama7 from '../Image/payjama_7.jpg';
import payjama8 from '../Image/payjama_8.jpg';
import payjama9 from '../Image/payjama_9.jpg';
import payjama10 from '../Image/payjama_10.jpg';

import formalpaint1 from '../Image/formalpaint_1.jpg';
import formalpaint2 from '../Image/formalpaint_2.jpg';
import formalpaint3 from '../Image/formalpaint_3.jpg';
import formalpaint4 from '../Image/formalpaint_4.jpg';
import formalpaint5 from '../Image/formalpaint_5.jpg';
import formalpaint6 from '../Image/formalpaint_6.jpg';
import formalpaint7 from '../Image/formalpaint_7.jpg';
import formalpaint8 from '../Image/formalpaint_8.jpg';
import formalpaint9 from '../Image/formalpaint_9.jpg';
import formalpaint10 from '../Image/formalpaint_10.jpg';

import safari1 from '../Image/safari_1.jpg';
import safari2 from '../Image/safari_2.jpg';
import safari3 from '../Image/safari_3.jpg';
import safari4 from '../Image/safari_4.jpg';

import uniform1 from '../Image/uniform_1.jpg';
import uniform2 from '../Image/uniform_2.jpg';
import uniform3 from '../Image/uniform_3.jpg';
import uniform4 from '../Image/uniform_4.jpg';
import uniform5 from '../Image/uniform_5.jpg';
import uniform6 from '../Image/uniform_6.jpg';
import uniform7 from '../Image/uniform_7.jpg';
import uniform8 from '../Image/uniform_8.jpg';

import jeans1 from '../Image/jeans_1.jpg';
import jeans2 from '../Image/jeans_2.jpg';
import jeans3 from '../Image/jeans_3.jpg';
import jeans4 from '../Image/jeans_4.jpg';
import jeans5 from '../Image/jeans_5.jpg';
import jeans6 from '../Image/jeans_6.jpg';
import jeans7 from '../Image/jeans_7.jpg';
import jeans8 from '../Image/jeans_8.jpg';
import jeans9 from '../Image/jeans_9.jpg';

import accessories1 from '../Image/accessories_1.jpg';
import accessories2 from '../Image/accessories_2.jpg';
import accessories3 from '../Image/accessories_3.jpg';
import accessories4 from '../Image/accessories_4.jpg';

const CATEGORIES = ['All', 'Suit', 'Sherwani', 'Pathani', 'Kurta', 'Blazer', 'Indo-Western', 'Shirt', 'Jacket', 'Payjama', 'Formal Paint', 'Safari', 'Uniform', 'Jeans', 'Accessories'];

const IMAGES = {
  Sherwani: [sherwani1, sherwani2, sherwani3, sherwani4, sherwani5, sherwani6, sherwani7, sherwani8, sherwani9, sherwani10, sherwani11, sherwani12, sherwani13, sherwani14, sherwani15, sherwani16, sherwani17, sherwani18, sherwani19, sherwani20, sherwani21],
  Suit: [suit1, suit2, suit3, suit4, suit5, suit6, suit7, suit8, suit9, suit10, suit11, suit12, suit13, suit14, suit15, suit16, suit17, suit18],
  Kurta: [kurta1, kurta2, kurta3, kurta4, kurta5, kurta6, kurta7, kurta8, kurta9, kurta10, kurta11, kurta12, kurta13],
  Blazer: [blazer1, blazer2, blazer3, blazer4, blazer5, blazer6, blazer7, blazer8, blazer9, blazer10, blazer11, blazer12, blazer13, blazer14, blazer15, blazer16],
  Pathani: [pathani1, pathani2, pathani3, pathani4, pathani5, pathani6],
  'Indo-Western': [indowestern1, indowestern2, indowestern3, indowestern4],
  Shirt: [shirt1, shirt2, shirt3, shirt4, shirt5, shirt6, shirt7, shirt8, shirt9, shirt10, shirt11, shirt12, shirt13, shirt14, shirt15, shirt16, shirt17, shirt18, shirt19, shirt20, shirt21, shirt22, shirt23, shirt24, shirt25, shirt26, shirt27, shirt28, shirt29],
  Jacket: [blazer1, blazer2, blazer3, blazer4, blazer5, blazer6, blazer7, blazer8],
  Payjama: [payjama1, payjama2, payjama3, payjama4, payjama5, payjama6, payjama7, payjama8, payjama9, payjama10],
  'Formal Paint': [formalpaint1, formalpaint2, formalpaint3, formalpaint4, formalpaint5, formalpaint6, formalpaint7, formalpaint8, formalpaint9, formalpaint10],
  Safari: [safari1, safari2, safari3, safari4],
  Uniform: [uniform1, uniform2, uniform3, uniform4, uniform5, uniform6, uniform7, uniform8],
  Jeans: [jeans1, jeans2, jeans3, jeans4, jeans5, jeans6, jeans7, jeans8, jeans9],
  Accessories: [accessories1, accessories2, accessories3, accessories4]
};

const getRandomImage = (category) => {
  const images = IMAGES[category];
  if (!images || images.length === 0) return sherwani1;
  return images[Math.floor(Math.random() * images.length)];
};

const MANDATORY_PRODUCTS = [
  { id: 1, name: 'Zardosi Embroidered Raw Silk Wedding Sherwani', category: 'Sherwani', price: 45000, image: sherwani1 },
  { id: 2, name: 'Royal Silk Sherwani', category: 'Sherwani', price: 52000, image: sherwani2 },
  { id: 3, name: 'Premium Georgette Sherwani', category: 'Sherwani', price: 48000, image: sherwani3 },
  { id: 4, name: 'Ivory Threadwork Groom Sherwani', category: 'Sherwani', price: 58000, image: sherwani4 },
  { id: 5, name: 'Classic Silk Sherwani', category: 'Sherwani', price: 42000, image: sherwani5 },
  { id: 6, name: 'Designer Embroidered Sherwani', category: 'Sherwani', price: 55000, image: sherwani6 },
  { id: 7, name: 'Wedding Groom Sherwani', category: 'Sherwani', price: 65000, image: sherwani7 },
  { id: 8, name: 'Traditional Sherwani', category: 'Sherwani', price: 38000, image: sherwani8 },
  { id: 9, name: 'Premium Bandhgala Sherwani', category: 'Sherwani', price: 45000, image: sherwani9 },
  { id: 10, name: 'Royal Wedding Sherwani', category: 'Sherwani', price: 72000, image: sherwani10 },
  { id: 11, name: 'Elegant Sherwani', category: 'Sherwani', price: 35000, image: sherwani11 },
  { id: 12, name: 'Classic Embroidered Sherwani', category: 'Sherwani', price: 48000, image: sherwani12 },
  { id: 13, name: 'Regal Sherwani', category: 'Sherwani', price: 52000, image: sherwani13 },
  { id: 14, name: 'Silk Blend Sherwani', category: 'Sherwani', price: 42000, image: sherwani14 },
  { id: 15, name: 'Bespoke Sherwani', category: 'Sherwani', price: 58000, image: sherwani15 },
  { id: 16, name: 'Traditional Wear Sherwani', category: 'Sherwani', price: 32000, image: sherwani16 },
  { id: 17, name: 'Premium Groom Sherwani', category: 'Sherwani', price: 65000, image: sherwani17 },
  { id: 18, name: 'Wedding wear Sherwani', category: 'Sherwani', price: 55000, image: sherwani18 },
  { id: 19, name: 'Signature Sherwani', category: 'Sherwani', price: 45000, image: sherwani19 },
  { id: 20, name: 'Majestic Sherwani', category: 'Sherwani', price: 72000, image: sherwani20 },
  { id: 21, name: 'Vibrant Sherwani', category: 'Sherwani', price: 38000, image: sherwani21 },
  { id: 22, name: 'Italian Viscose Velvet Zari Bandhgala Suit', category: 'Suit', price: 28500, image: suit1 },
  { id: 23, name: 'Classic Tuxedo Suit', category: 'Suit', price: 22000, image: suit2 },
  { id: 24, name: 'Navy Blue Suit', category: 'Suit', price: 28000, image: suit3 },
  { id: 25, name: 'Grey Designer Suit', category: 'Suit', price: 32000, image: suit4 },
  { id: 26, name: 'Black Formal Suit', category: 'Suit', price: 25000, image: suit5 },
  { id: 27, name: 'Wedding Groom Suit', category: 'Suit', price: 45000, image: suit6 },
  { id: 28, name: 'Premium Wool Suit', category: 'Suit', price: 35000, image: suit7 },
  { id: 29, name: 'Classic Bandhgala Suit', category: 'Suit', price: 38000, image: suit8 },
  { id: 30, name: 'Velvet Suit', category: 'Suit', price: 42000, image: suit9 },
  { id: 31, name: 'Silk Blend Suit', category: 'Suit', price: 32000, image: suit10 },
  { id: 32, name: 'Formal Suit', category: 'Suit', price: 28000, image: suit11 },
  { id: 33, name: 'Designer Suit', category: 'Suit', price: 45000, image: suit12 },
  { id: 34, name: 'Premium Suit', category: 'Suit', price: 35000, image: suit13 },
  { id: 35, name: 'Classic Suit', category: 'Suit', price: 25000, image: suit14 },
  { id: 36, name: 'Tailored Suit', category: 'Suit', price: 32000, image: suit15 },
  { id: 37, name: 'Bespoke Suit', category: 'Suit', price: 48000, image: suit16 },
  { id: 38, name: 'Royal Suit', category: 'Suit', price: 52000, image: suit17 },
  { id: 39, name: 'Elegant Suit', category: 'Suit', price: 28000, image: suit18 },
  { id: 40, name: 'Handwoven Benarasi Silk Kurta', category: 'Kurta', price: 18000, image: kurta1 },
  { id: 41, name: 'Lucknowi Chikankari Kurta', category: 'Kurta', price: 12500, image: kurta2 },
  { id: 42, name: 'Classic White Kurta', category: 'Kurta', price: 8500, image: kurta3 },
  { id: 43, name: 'Wine Red Silk Kurta', category: 'Kurta', price: 12000, image: kurta4 },
  { id: 44, name: 'Royal Silk Kurta', category: 'Kurta', price: 15000, image: kurta5 },
  { id: 45, name: 'Cotton Summer Kurta', category: 'Kurta', price: 5500, image: kurta6 },
  { id: 46, name: 'Embroidered Festival Kurta', category: 'Kurta', price: 9800, image: kurta7 },
  { id: 47, name: 'Bespoke Wedding Kurta', category: 'Kurta', price: 18000, image: kurta8 },
  { id: 48, name: 'Traditional Kurta Set', category: 'Kurta', price: 7500, image: kurta9 },
  { id: 49, name: 'Modern Designer Kurta', category: 'Kurta', price: 11000, image: kurta10 },
  { id: 50, name: 'Premium Wedding Kurta', category: 'Kurta', price: 22000, image: kurta11 },
  { id: 51, name: 'Banarasi Silk Kurta', category: 'Kurta', price: 14000, image: kurta12 },
  { id: 52, name: 'Premium Kurta', category: 'Kurta', price: 9500, image: kurta13 },
  { id: 53, name: 'Charcoal Grey Premium Linen Blazer', category: 'Blazer', price: 15000, image: blazer1 },
  { id: 54, name: 'Classic Navy Blazer', category: 'Blazer', price: 18000, image: blazer2 },
  { id: 55, name: 'Black Tuxedo Blazer', category: 'Blazer', price: 22000, image: blazer3 },
  { id: 56, name: 'Grey Wool Blazer', category: 'Blazer', price: 16000, image: blazer4 },
  { id: 57, name: 'Casual Blue Blazer', category: 'Blazer', price: 12000, image: blazer5 },
  { id: 58, name: 'Tan Leather Blazer', category: 'Blazer', price: 25000, image: blazer6 },
  { id: 59, name: 'Modern Fit Blazer', category: 'Blazer', price: 14000, image: blazer7 },
  { id: 60, name: 'Slim Fit Formal Blazer', category: 'Blazer', price: 17000, image: blazer8 },
  { id: 61, name: 'Wedding Guest Blazer', category: 'Blazer', price: 19500, image: blazer9 },
  { id: 62, name: 'Bespoke Designer Blazer', category: 'Blazer', price: 28000, image: blazer10 },
  { id: 63, name: 'Premium Italian Blazer', category: 'Blazer', price: 32000, image: blazer11 },
  { id: 64, name: 'Velvet Evening Blazer', category: 'Blazer', price: 24000, image: blazer12 },
  { id: 65, name: 'Linen Summer Blazer', category: 'Blazer', price: 11000, image: blazer13 },
  { id: 66, name: 'Double Breasted Blazer', category: 'Blazer', price: 21000, image: blazer14 },
  { id: 67, name: 'Tweed Classic Blazer', category: 'Blazer', price: 18500, image: blazer15 },
  { id: 68, name: 'Modern Party Blazer', category: 'Blazer', price: 16500, image: blazer16 },
  { id: 69, name: 'Emerald Green Silk Pathani', category: 'Pathani', price: 14500, image: pathani1 },
  { id: 70, name: 'Royal Blue Pathani', category: 'Pathani', price: 16500, image: pathani2 },
  { id: 71, name: 'Maroon Silk Pathani', category: 'Pathani', price: 18000, image: pathani3 },
  { id: 72, name: 'Black Designer Pathani', category: 'Pathani', price: 12500, image: pathani4 },
  { id: 73, name: 'Golden Embroidered Pathani', category: 'Pathani', price: 22000, image: pathani5 },
  { id: 74, name: 'Wedding Pathani', category: 'Pathani', price: 28000, image: pathani6 },
  { id: 75, name: 'Classic Navy Blue Indo-Western', category: 'Indo-Western', price: 28000, image: indowestern1 },
  { id: 76, name: 'Classic Indo-Western Set', category: 'Indo-Western', price: 32000, image: indowestern2 },
  { id: 77, name: 'Designer Indo-Western', category: 'Indo-Western', price: 25000, image: indowestern3 },
  { id: 78, name: 'Premium Groom Indo-Western', category: 'Indo-Western', price: 38000, image: indowestern4 },
  { id: 79, name: 'Premium Cotton Formal Shirt', category: 'Shirt', price: 4500, image: shirt1 },
  { id: 80, name: 'Classic Formal Shirt', category: 'Shirt', price: 3500, image: shirt2 },
  { id: 81, name: 'Premium Linen Shirt', category: 'Shirt', price: 4200, image: shirt3 },
  { id: 82, name: 'Designer Print Shirt', category: 'Shirt', price: 3800, image: shirt4 },
  { id: 83, name: 'Casual Cotton Shirt', category: 'Shirt', price: 2800, image: shirt5 },
  { id: 84, name: 'Party Wear Shirt', category: 'Shirt', price: 4500, image: shirt6 },
  { id: 85, name: 'Slim Fit Shirt', category: 'Shirt', price: 3200, image: shirt7 },
  { id: 86, name: 'Classic White Shirt', category: 'Shirt', price: 2500, image: shirt8 },
  { id: 87, name: 'Classic Blue Shirt', category: 'Shirt', price: 2800, image: shirt9 },
  { id: 88, name: 'Designer Shirt', category: 'Shirt', price: 3800, image: shirt10 },
  { id: 89, name: 'Premium Shirt', category: 'Shirt', price: 4200, image: shirt11 },
  { id: 90, name: 'Formal Shirt', category: 'Shirt', price: 3500, image: shirt12 },
  { id: 91, name: 'Casual Shirt', category: 'Shirt', price: 2500, image: shirt13 },
  { id: 92, name: 'Party Shirt', category: 'Shirt', price: 3800, image: shirt14 },
  { id: 93, name: 'Classic Shirt', category: 'Shirt', price: 2200, image: shirt15 },
  { id: 94, name: 'Designer Wear Shirt', category: 'Shirt', price: 3500, image: shirt16 },
  { id: 95, name: 'Premium Wear Shirt', category: 'Shirt', price: 4200, image: shirt17 },
  { id: 96, name: 'Formal Wear Shirt', category: 'Shirt', price: 3800, image: shirt18 },
  { id: 97, name: 'Casual Wear Shirt', category: 'Shirt', price: 2800, image: shirt19 },
  { id: 98, name: 'Classic Wear Shirt', category: 'Shirt', price: 2500, image: shirt20 },
  { id: 99, name: 'Designer Classic Shirt', category: 'Shirt', price: 3200, image: shirt21 },
  { id: 100, name: 'Premium Classic Shirt', category: 'Shirt', price: 3500, image: shirt22 },
  { id: 101, name: 'Formal Classic Shirt', category: 'Shirt', price: 2800, image: shirt23 },
  { id: 102, name: 'Casual Classic Shirt', category: 'Shirt', price: 2200, image: shirt24 },
  { id: 103, name: 'Party Classic Shirt', category: 'Shirt', price: 3500, image: shirt25 },
  { id: 104, name: 'Designer Party Shirt', category: 'Shirt', price: 3800, image: shirt26 },
  { id: 105, name: 'Premium Party Shirt', category: 'Shirt', price: 4200, image: shirt27 },
  { id: 106, name: 'Classic Party Shirt', category: 'Shirt', price: 3500, image: shirt28 },
  { id: 107, name: 'Designer Formal Shirt', category: 'Shirt', price: 3800, image: shirt29 },
  { id: 108, name: 'Silk Blend Payjama', category: 'Payjama', price: 8500, image: payjama1 },
  { id: 109, name: 'Premium Cotton Pajama', category: 'Payjama', price: 5500, image: payjama2 },
  { id: 110, name: 'Linen Casual Payjama', category: 'Payjama', price: 4800, image: payjama3 },
  { id: 111, name: 'Silk Designer Pajama', category: 'Payjama', price: 6500, image: payjama4 },
  { id: 112, name: 'Classic White Payjama', category: 'Payjama', price: 4200, image: payjama5 },
  { id: 113, name: 'Formal Black Payjama', category: 'Payjama', price: 5500, image: payjama6 },
  { id: 114, name: 'Handwoven Cotton Pajama', category: 'Payjama', price: 3800, image: payjama7 },
  { id: 115, name: 'Bespoke Silk Payjama', category: 'Payjama', price: 7500, image: payjama8 },
  { id: 116, name: 'Classic Black Payjama', category: 'Payjama', price: 4500, image: payjama9 },
  { id: 117, name: 'Premium Black Payjama', category: 'Payjama', price: 5500, image: payjama10 },
  { id: 118, name: 'Classic Black Formal Paint', category: 'Formal Paint', price: 4500, image: formalpaint1 },
  { id: 119, name: 'Navy Blue Formal Paint', category: 'Formal Paint', price: 4800, image: formalpaint2 },
  { id: 120, name: 'Grey Wool Formal Paint', category: 'Formal Paint', price: 5500, image: formalpaint3 },
  { id: 121, name: 'Beige Linen Formal Paint', category: 'Formal Paint', price: 4200, image: formalpaint4 },
  { id: 122, name: 'Tailored Black Trouser', category: 'Formal Paint', price: 5000, image: formalpaint5 },
  { id: 123, name: 'Premium Cotton Formal Paint', category: 'Formal Paint', price: 3800, image: formalpaint6 },
  { id: 124, name: 'Slim Fit Formal Paint', category: 'Formal Paint', price: 4500, image: formalpaint7 },
  { id: 125, name: 'Classic Tan Formal Paint', category: 'Formal Paint', price: 4200, image: formalpaint8 },
  { id: 126, name: 'Bespoke Formal Paint', category: 'Formal Paint', price: 5500, image: formalpaint9 },
  { id: 127, name: 'Premium Formal Paint', category: 'Formal Paint', price: 4800, image: formalpaint10 },
  { id: 128, name: 'Safari Summer Suit', category: 'Safari', price: 15000, image: safari1 },
  { id: 129, name: 'Beige Safari Suit', category: 'Safari', price: 18000, image: safari2 },
  { id: 130, name: 'Summer Safari Coat', category: 'Safari', price: 12000, image: safari3 },
  { id: 131, name: 'Classic Safari Jacket', category: 'Safari', price: 16500, image: safari4 },
  { id: 132, name: 'School Uniform Blazer', category: 'Uniform', price: 6500, image: uniform1 },
  { id: 133, name: 'School Blazer Uniform', category: 'Uniform', price: 8500, image: uniform2 },
  { id: 134, name: 'Office Uniform Blazer', category: 'Uniform', price: 9500, image: uniform3 },
  { id: 135, name: 'Corporate Uniform Set', category: 'Uniform', price: 12000, image: uniform4 },
  { id: 136, name: 'Hotel Uniform Blazer', category: 'Uniform', price: 7500, image: uniform5 },
  { id: 137, name: 'Chef Uniform Coat', category: 'Uniform', price: 5500, image: uniform6 },
  { id: 138, name: 'Security Uniform Blazer', category: 'Uniform', price: 4500, image: uniform7 },
  { id: 139, name: 'Hospital Uniform', category: 'Uniform', price: 3500, image: uniform8 },
  { id: 140, name: 'Slim Fit Designer Jeans', category: 'Jeans', price: 5500, image: jeans1 },
  { id: 141, name: 'Vintage Wash Jeans', category: 'Jeans', price: 6200, image: jeans2 },
  { id: 142, name: 'Premium Denim Jeans', category: 'Jeans', price: 4800, image: jeans3 },
  { id: 143, name: 'Classic Blue Slim Jeans', category: 'Jeans', price: 5500, image: jeans4 },
  { id: 144, name: 'Black Stretch Jeans', category: 'Jeans', price: 4500, image: jeans5 },
  { id: 145, name: 'Blue Dark Jeans', category: 'Jeans', price: 4800, image: jeans6 },
  { id: 146, name: 'Black Distressed Jeans', category: 'Jeans', price: 5500, image: jeans7 },
  { id: 147, name: 'Ripped Style Jeans', category: 'Jeans', price: 4200, image: jeans8 },
  { id: 148, name: 'Premium Raw Denim Jeans', category: 'Jeans', price: 6500, image: jeans9 },
  { id: 149, name: 'Designer Waistcoat', category: 'Accessories', price: 3500, image: accessories1 },
  { id: 150, name: 'Leather Belt', category: 'Accessories', price: 2500, image: accessories2 },
  { id: 151, name: 'Silk Tie Set', category: 'Accessories', price: 1800, image: accessories3 },
  { id: 152, name: 'Designer Pocket Square', category: 'Accessories', price: 1200, image: accessories4 },
  { id: 153, name: 'Leather Biker Jacket', category: 'Jacket', price: 18000, image: blazer1 },
  { id: 154, name: 'Premium Jacket', category: 'Jacket', price: 22000, image: blazer2 },
  { id: 155, name: 'Designer Jacket', category: 'Jacket', price: 25000, image: blazer3 },
  { id: 156, name: 'Classic Jacket', category: 'Jacket', price: 18000, image: blazer4 },
  { id: 157, name: 'Modern Jacket', category: 'Jacket', price: 20000, image: blazer5 },
  { id: 158, name: 'Formal Jacket', category: 'Jacket', price: 22000, image: blazer6 },
  { id: 159, name: 'Casual Jacket', category: 'Jacket', price: 15000, image: blazer7 },
  { id: 160, name: 'Winter Jacket', category: 'Jacket', price: 24000, image: blazer8 },
];

export const ALL_PRODUCTS = MANDATORY_PRODUCTS;

export default function Products() {
  const [filter, setFilter] = useState('All');
  const addToCart = useCartStore((state) => state.addToCart);

  const filteredProducts = filter === 'All' ? ALL_PRODUCTS : ALL_PRODUCTS.filter(p => p.category === filter);

  return (
    <>
    <SEO 
      title="Premium Groom & Menswear Collection | Bespoke Suits, Sherwani, Kurta"
      description="Explore our premium collection of bespoke suits, sherwanis, kurtas, blazers, pathani suits, and Indo-Western wear. Handcrafted wedding groom wear in Raipur, Chhattisgarh."
      keywords="groom wear, menswear collection, bespoke suits, sherwani, kurta, blazer, pathani suit, Indo-Western, wedding collection, groom outfit, Raipur"
    />
    <div className="w-full bg-white">
      <section className="relative h-[50vh] sm:h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${kurtaHero})` }} />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 px-3 sm:px-4"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-3 sm:mb-4 text-white">Our Collection</h1>
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-white mb-4 sm:mb-6">Explore Now</p>
          <Link to="/products" className="inline-flex items-center gap-2 bg-white text-black px-4 sm:px-6 py-2.5 sm:py-3 uppercase text-xs font-bold tracking-widest hover:bg-gray-200 transition-colors">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-6 md:mb-8 border-b border-gray-200 pb-4">
          {CATEGORIES.map((cat) => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs sm:text-sm font-bold uppercase tracking-widest px-2 py-2 transition-colors whitespace-nowrap ${filter === cat ? 'text-black border-b-2 border-black' : 'text-gray-400 hover:text-black'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div 
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={product.id} 
                className="group flex flex-col"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4 cursor-pointer">
                  <Link to={`/product/${product.id}`} className="block w-full h-full">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </Link>
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <button 
                    onClick={(e) => { e.preventDefault(); addToCart(product); }}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white text-black px-6 py-3 w-5/6 uppercase text-xs font-black tracking-widest hover:bg-black hover:text-white shadow-lg z-10"
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="flex flex-col items-center text-center px-2">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-bold text-sm uppercase tracking-wide mb-1 hover:text-gray-500 transition-colors">{product.name}</h3>
                  </Link>
                  <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">{product.category}</p>
                  <span className="font-black text-lg">Contact to Owner</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
    </>
  );
}