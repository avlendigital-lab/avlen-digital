import type { Language } from './translations';

type DemoTemplateContent = {
  badge: string;
  businessName: string;
  nav: string[];
  headline: string[];
  subhead: string;
  primaryCta: string;
  secondaryCta: string;
  metric: string;
  metricLabel: string;
  conceptNote: string;
  proofPoints: Array<{
    value: string;
    label: string;
  }>;
  servicesTitle: string;
  services: string[];
  featureTitle: string;
  featureBody: string;
  offersTitle: string;
  offers: Array<{
    name: string;
    detail: string;
  }>;
  processTitle: string;
  process: Array<{
    step: string;
    title: string;
    body: string;
  }>;
  galleryTitle: string;
  gallery: string[];
  quote: string;
  ctaTitle: string;
  ctaBody: string;
};

export type DemoTemplate = {
  slug: 'barber' | 'detailing' | 'cafe';
  path: string;
  avlenLabel: {
    tr: string;
    en: string;
  };
  content: Record<Language, DemoTemplateContent>;
};

export const demoTemplates: DemoTemplate[] = [
  {
    slug: 'barber',
    path: '/templates/barber',
    avlenLabel: {
      tr: 'Barber konsept demosu',
      en: 'Barber concept demo',
    },
    content: {
      tr: {
        badge: 'Premium barber studio',
        businessName: 'Northline Barber',
        nav: ['Hizmetler', 'Ustalar', 'Randevu'],
        headline: ['Keskin detay.', 'Sakin ritüel.', 'Güçlü ilk izlenim.'],
        subhead: 'Modern erkek bakımını randevu odaklı, rafine ve güven veren bir dijital deneyime taşıyan konsept web sitesi.',
        primaryCta: 'Randevu Al',
        secondaryCta: 'Hizmetleri Gör',
        metric: '45 dk',
        metricLabel: 'ortalama bakım deneyimi',
        conceptNote: 'Bu sayfa gerçek müşteri işi değil; barber/salon segmenti için hazırlanmış AVLEN konsept demosudur.',
        proofPoints: [
          { value: '3 adım', label: 'hızlı randevu akışı' },
          { value: 'Mobil', label: 'tek elle rezervasyon' },
          { value: 'Premium', label: 'salon algısını yükselten dil' },
        ],
        servicesTitle: 'İmza Bakımlar',
        services: ['Precision Cut', 'Hot Towel Shave', 'Beard Sculpting'],
        featureTitle: 'Sessiz lüks hissi',
        featureBody: 'Koyu zemin, dokulu tipografi ve kontrollü boşluklarla salonun premium karakterini öne çıkaran bir yapı.',
        offersTitle: 'Paketler',
        offers: [
          { name: 'Classic Cut', detail: 'Saç kesimi, yıkama ve bitiş şekillendirme' },
          { name: 'Full Ritual', detail: 'Kesim, sakal tasarımı ve sıcak havlu' },
          { name: 'Monthly Reset', detail: 'Aylık bakım rutini için öncelikli randevu' },
        ],
        processTitle: 'Ziyaret Akışı',
        process: [
          { step: '01', title: 'Hizmeti seç', body: 'Kullanıcı fiyat ve süreyi karıştırmadan doğru bakımı seçer.' },
          { step: '02', title: 'Ustayı belirle', body: 'Salon ekibi ve uzmanlık alanları sade şekilde sunulur.' },
          { step: '03', title: 'Saati ayır', body: 'Net randevu çağrısı ziyaretçiyi beklemeden aksiyona taşır.' },
        ],
        galleryTitle: 'Salon Hissi',
        gallery: ['Mat siyah yüzeyler', 'Sıcak havlu ritüeli', 'Net rezervasyon alanı', 'Premium sakal bakımı'],
        quote: 'Randevudan önce bile markanın kalitesini hissettiren bir salon vitrini.',
        ctaTitle: 'Koltuğun hazır.',
        ctaBody: 'Net saatler, hızlı seçim ve güven veren bir rezervasyon akışı.',
      },
      en: {
        badge: 'Premium barber studio',
        businessName: 'Northline Barber',
        nav: ['Services', 'Masters', 'Booking'],
        headline: ['Sharp detail.', 'Quiet ritual.', 'Strong first impression.'],
        subhead: 'A concept website that turns modern grooming into a refined, appointment-led digital experience.',
        primaryCta: 'Book a Chair',
        secondaryCta: 'View Services',
        metric: '45 min',
        metricLabel: 'average grooming experience',
        conceptNote: 'This is not real client work; it is an AVLEN concept demo for the barber and salon category.',
        proofPoints: [
          { value: '3 steps', label: 'fast booking flow' },
          { value: 'Mobile', label: 'one-handed reservation' },
          { value: 'Premium', label: 'brand language that raises perception' },
        ],
        servicesTitle: 'Signature Services',
        services: ['Precision Cut', 'Hot Towel Shave', 'Beard Sculpting'],
        featureTitle: 'Quiet luxury, online',
        featureBody: 'Dark surfaces, tactile type and controlled whitespace bring the premium salon character forward.',
        offersTitle: 'Packages',
        offers: [
          { name: 'Classic Cut', detail: 'Cut, wash and finishing style' },
          { name: 'Full Ritual', detail: 'Cut, beard shaping and hot towel' },
          { name: 'Monthly Reset', detail: 'Priority booking for a monthly grooming rhythm' },
        ],
        processTitle: 'Visit Flow',
        process: [
          { step: '01', title: 'Choose the service', body: 'Visitors pick the right treatment without confusing price and time.' },
          { step: '02', title: 'Select the master', body: 'The team and specialties are presented with quiet confidence.' },
          { step: '03', title: 'Reserve the time', body: 'A clear booking prompt moves visitors into action quickly.' },
        ],
        galleryTitle: 'Salon Atmosphere',
        gallery: ['Matte black surfaces', 'Hot towel ritual', 'Clear booking area', 'Premium beard care'],
        quote: 'A salon presence that makes the quality feel clear before the appointment begins.',
        ctaTitle: 'Your chair is ready.',
        ctaBody: 'Clear times, fast selection and a booking flow that feels confident.',
      },
    },
  },
  {
    slug: 'detailing',
    path: '/templates/detailing',
    avlenLabel: {
      tr: 'Auto detailing konsept demosu',
      en: 'Auto detailing concept demo',
    },
    content: {
      tr: {
        badge: 'Performance detailing lab',
        businessName: 'Apex Detail Co.',
        nav: ['Paketler', 'Süreç', 'Garaj'],
        headline: ['Yüzeyde güç.', 'Detayda hassasiyet.'],
        subhead: 'Seramik kaplama, boya düzeltme ve premium iç temizlik hizmetleri için yüksek tempolu konsept site.',
        primaryCta: 'Araç Analizi Al',
        secondaryCta: 'Paketleri İncele',
        metric: '96%',
        metricLabel: 'boya parlaklığı odaklı sunum',
        conceptNote: 'Bu sayfa gerçek müşteri işi değil; auto detailing segmenti için hazırlanmış AVLEN konsept demosudur.',
        proofPoints: [
          { value: 'Net', label: 'paket karşılaştırması' },
          { value: 'Teknik', label: 'süreç anlatımı' },
          { value: 'Hızlı', label: 'analiz talebi çağrısı' },
        ],
        servicesTitle: 'Garaj Hizmetleri',
        services: ['Paint Correction', 'Ceramic Coating', 'Interior Reset'],
        featureTitle: 'Performans hissi veren sayfa ritmi',
        featureBody: 'Keskin gridler, teknik bloklar ve güçlü kontrast ile detailing işinin hassasiyetini dijitalde görünür kılar.',
        offersTitle: 'Koruma Paketleri',
        offers: [
          { name: 'Gloss Reset', detail: 'Tek aşama boya düzeltme ve hızlı koruma' },
          { name: 'Ceramic Shield', detail: 'Uzun süreli seramik kaplama ve yüzey hazırlığı' },
          { name: 'Interior Lab', detail: 'Kabin, deri ve detaylı iç mekan yenileme' },
        ],
        processTitle: 'Detay Süreci',
        process: [
          { step: '01', title: 'Yüzeyi oku', body: 'Araç durumu, boya kusurları ve kullanım ihtiyacı netleştirilir.' },
          { step: '02', title: 'Paketi seç', body: 'Kullanıcı teknik detay kaybolmadan doğru koruma seviyesine yönlenir.' },
          { step: '03', title: 'Sonucu göster', body: 'Parlaklık, koruma ve bakım sonrası avantajlar güçlü şekilde anlatılır.' },
        ],
        galleryTitle: 'Garaj Atmosferi',
        gallery: ['Boya düzeltme ışığı', 'Seramik koruma katmanı', 'İç mekan yenileme', 'Teslim öncesi son kontrol'],
        quote: 'Teknik hizmetleri sade, anlaşılır ve premium bir satış akışına çeviren yapı.',
        ctaTitle: 'Aracın vitrini hazır.',
        ctaBody: 'Müşteri ne alacağını, neden değerli olduğunu ve nasıl randevu alacağını hemen görür.',
      },
      en: {
        badge: 'Performance detailing lab',
        businessName: 'Apex Detail Co.',
        nav: ['Packages', 'Process', 'Garage'],
        headline: ['Power on the surface.', 'Precision in the detail.'],
        subhead: 'A high-tempo concept website for ceramic coating, paint correction and premium interior care.',
        primaryCta: 'Get Vehicle Review',
        secondaryCta: 'Explore Packages',
        metric: '96%',
        metricLabel: 'paint gloss-focused presentation',
        conceptNote: 'This is not real client work; it is an AVLEN concept demo for the auto detailing category.',
        proofPoints: [
          { value: 'Clear', label: 'package comparison' },
          { value: 'Technical', label: 'process storytelling' },
          { value: 'Fast', label: 'vehicle review prompt' },
        ],
        servicesTitle: 'Garage Services',
        services: ['Paint Correction', 'Ceramic Coating', 'Interior Reset'],
        featureTitle: 'A page rhythm built for performance',
        featureBody: 'Sharp grids, technical blocks and strong contrast make the precision of detailing visible online.',
        offersTitle: 'Protection Packages',
        offers: [
          { name: 'Gloss Reset', detail: 'Single-stage correction and quick protection' },
          { name: 'Ceramic Shield', detail: 'Long-term ceramic coating with surface preparation' },
          { name: 'Interior Lab', detail: 'Cabin, leather and detailed interior renewal' },
        ],
        processTitle: 'Detailing Process',
        process: [
          { step: '01', title: 'Read the surface', body: 'Vehicle condition, paint defects and usage needs are clarified.' },
          { step: '02', title: 'Choose the package', body: 'Visitors move toward the right protection level without losing the technical edge.' },
          { step: '03', title: 'Show the result', body: 'Gloss, protection and aftercare value are explained with force.' },
        ],
        galleryTitle: 'Garage Atmosphere',
        gallery: ['Correction lighting', 'Ceramic protection layer', 'Interior renewal', 'Final delivery check'],
        quote: 'A structure that turns technical services into a clear, premium sales flow.',
        ctaTitle: 'Your vehicle showcase is ready.',
        ctaBody: 'Customers immediately see what they get, why it matters and how to book.',
      },
    },
  },
  {
    slug: 'cafe',
    path: '/templates/cafe',
    avlenLabel: {
      tr: 'Cafe konsept demosu',
      en: 'Cafe concept demo',
    },
    content: {
      tr: {
        badge: 'Independent coffee house',
        businessName: 'Mellow Yard',
        nav: ['Menü', 'Ritim', 'Ziyaret'],
        headline: ['Mahalle sıcaklığı.', 'Modern kahve ritmi.'],
        subhead: 'Bağımsız kahve dükkanları için menüyü, atmosferi ve günlük ritmi tek bakışta hissettiren konsept site.',
        primaryCta: 'Menüyü Aç',
        secondaryCta: 'Konumu Gör',
        metric: '08:30',
        metricLabel: 'günün ilk demlemesi',
        conceptNote: 'Bu sayfa gerçek müşteri işi değil; bağımsız cafe segmenti için hazırlanmış AVLEN konsept demosudur.',
        proofPoints: [
          { value: 'Menü', label: 'öne çıkan ürün akışı' },
          { value: 'Sıcak', label: 'mekan atmosferi' },
          { value: 'Yakın', label: 'ziyaret ve konum çağrısı' },
        ],
        servicesTitle: 'Günün Ritmi',
        services: ['Espresso Bar', 'Slow Brew', 'Fresh Pastry'],
        featureTitle: 'Sıcak ama sıradan değil',
        featureBody: 'Krem zemin, büyük tipografi ve organik kompozisyonlarla küçük bir mekanın karakterini büyütür.',
        offersTitle: 'Menü Öne Çıkanlar',
        offers: [
          { name: 'Yard Latte', detail: 'Çift shot, kadifemsi süt ve narin karamel notası' },
          { name: 'Filter Flight', detail: 'Üç farklı çekirdekle küçük tadım seçkisi' },
          { name: 'Morning Plate', detail: 'Taze kruvasan, reçel ve sezon meyvesi' },
        ],
        processTitle: 'Ziyaret Ritmi',
        process: [
          { step: '01', title: 'Menüyü hisset', body: 'Ürünler yalnızca listelenmez; mekanın tavrı ile birlikte sunulur.' },
          { step: '02', title: 'Günü planla', body: 'Saatler, yoğunluk ve öne çıkan lezzetler hızlıca anlaşılır.' },
          { step: '03', title: 'Mekana gel', body: 'Konum ve ziyaret çağrısı fazla düşünmeden aksiyon aldırır.' },
        ],
        galleryTitle: 'Mekan Notları',
        gallery: ['Sabah ışığı', 'Yavaş demleme barı', 'Taze hamur işi', 'Mahalle masaları'],
        quote: 'Mekanın kokusunu ve ritmini ekrana taşıyan sakin, davetkar bir vitrin.',
        ctaTitle: 'Bugün uğra.',
        ctaBody: 'Menü, saatler ve atmosfer net; karar vermek için fazladan gürültü yok.',
      },
      en: {
        badge: 'Independent coffee house',
        businessName: 'Mellow Yard',
        nav: ['Menu', 'Rhythm', 'Visit'],
        headline: ['Neighborhood warmth.', 'Modern coffee rhythm.'],
        subhead: 'A concept site for independent cafés that makes the menu, atmosphere and daily rhythm easy to feel.',
        primaryCta: 'Open Menu',
        secondaryCta: 'View Location',
        metric: '08:30',
        metricLabel: 'first brew of the day',
        conceptNote: 'This is not real client work; it is an AVLEN concept demo for the independent café category.',
        proofPoints: [
          { value: 'Menu', label: 'featured product flow' },
          { value: 'Warm', label: 'place atmosphere' },
          { value: 'Local', label: 'visit and location prompt' },
        ],
        servicesTitle: 'Daily Rhythm',
        services: ['Espresso Bar', 'Slow Brew', 'Fresh Pastry'],
        featureTitle: 'Warm, but not ordinary',
        featureBody: 'Cream surfaces, large type and organic composition expand the character of a small place.',
        offersTitle: 'Menu Highlights',
        offers: [
          { name: 'Yard Latte', detail: 'Double shot, velvet milk and a soft caramel note' },
          { name: 'Filter Flight', detail: 'A small tasting set with three rotating beans' },
          { name: 'Morning Plate', detail: 'Fresh croissant, jam and seasonal fruit' },
        ],
        processTitle: 'Visit Rhythm',
        process: [
          { step: '01', title: 'Feel the menu', body: 'Products are not only listed; they are shown with the attitude of the place.' },
          { step: '02', title: 'Plan the day', body: 'Hours, mood and featured items are easy to understand quickly.' },
          { step: '03', title: 'Visit the place', body: 'Location and visit prompts make the next step feel natural.' },
        ],
        galleryTitle: 'Place Notes',
        gallery: ['Morning light', 'Slow brew bar', 'Fresh pastry', 'Neighborhood tables'],
        quote: 'A calm, welcoming presence that brings the scent and rhythm of the place onto the screen.',
        ctaTitle: 'Drop by today.',
        ctaBody: 'Menu, hours and atmosphere are clear; no extra noise before the decision.',
      },
    },
  },
];

export function getTemplateByPath(pathname: string) {
  const [, section, slug] = pathname.split('/');
  if (section !== 'templates') {
    return undefined;
  }

  return demoTemplates.find((template) => template.slug === slug);
}
