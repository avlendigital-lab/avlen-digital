import type { Language } from './translations';

type DemoTemplateContent = {
  badge: string;
  businessName: string;
  nav: string[];
  quickInfo: Array<{
    label: string;
    value: string;
  }>;
  headline: string[];
  subhead: string;
  imageAlt: string;
  imageCaption: string;
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
  serviceDetails: string[];
  featureTitle: string;
  featureBody: string;
  offersTitle: string;
  offers: Array<{
    name: string;
    detail: string;
  }>;
  menuTitle?: string;
  menuBody?: string;
  menuItems?: Array<{
    name: string;
    detail: string;
    price: string;
    visualIndex: number;
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

type DemoTemplateVisual = {
  src: string;
  alt: Record<Language, string>;
};

export type DemoTemplate = {
  slug: 'barber' | 'detailing' | 'cafe' | 'restaurant' | 'stationery' | 'hair-salon';
  path: string;
  image: {
    src: string;
  };
  visuals: {
    services: DemoTemplateVisual[];
    offers: DemoTemplateVisual[];
    gallery: DemoTemplateVisual[];
    menu?: DemoTemplateVisual[];
  };
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
    image: {
      src: '/demo-barber.png',
    },
    visuals: {
      services: [
        {
          src: '/demo-barber-cut.png',
          alt: {
            tr: 'Premium barber stüdyosunda makas ve tarakla hassas saç kesimi detayı.',
            en: 'A precision haircut detail with scissors and comb in a premium barber studio.',
          },
        },
        {
          src: '/demo-barber-towel.png',
          alt: {
            tr: 'Sıcak havlu, tıraş fırçası ve koyu taş tezgah üzerinde bakım ritüeli.',
            en: 'A hot towel grooming ritual with shaving brush and dark stone counter.',
          },
        },
        {
          src: '/demo-barber-beard.png',
          alt: {
            tr: 'Sakal çizgisi şekillendirme sırasında trimmer ve bakım ürünleri detayı.',
            en: 'A beard sculpting detail with trimmer and grooming products.',
          },
        },
      ],
      offers: [
        {
          src: '/demo-barber-cut.png',
          alt: {
            tr: 'Classic Cut paketi için hassas saç kesimi yakın planı.',
            en: 'A close-up haircut image for the Classic Cut package.',
          },
        },
        {
          src: '/demo-barber-towel.png',
          alt: {
            tr: 'Full Ritual paketi için sıcak havlu ve tıraş hazırlığı.',
            en: 'Hot towel and shave preparation for the Full Ritual package.',
          },
        },
        {
          src: '/demo-barber-beard.png',
          alt: {
            tr: 'Monthly Reset paketi için sakal bakım ve şekillendirme detayı.',
            en: 'Beard care and shaping detail for the Monthly Reset package.',
          },
        },
      ],
      gallery: [
        {
          src: '/demo-barber.png',
          alt: {
            tr: 'Premium barber stüdyosunda deri koltuk ve sıcak salon atmosferi.',
            en: 'A premium barber studio with leather chair and warm atmosphere.',
          },
        },
        {
          src: '/demo-barber-cut.png',
          alt: {
            tr: 'Makas ve tarakla hassas saç kesimi anı.',
            en: 'A precision haircut moment with scissors and comb.',
          },
        },
        {
          src: '/demo-barber-towel.png',
          alt: {
            tr: 'Sıcak havlu ve tıraş hazırlığı detayı.',
            en: 'Hot towel and shave preparation detail.',
          },
        },
        {
          src: '/demo-barber-beard.png',
          alt: {
            tr: 'Sakal şekillendirme ve bakım istasyonu detayı.',
            en: 'Beard shaping and grooming station detail.',
          },
        },
      ],
    },
    avlenLabel: {
      tr: 'Barber konsept demosu',
      en: 'Barber concept demo',
    },
    content: {
      tr: {
        badge: 'Premium barber studio',
        businessName: 'Northline Barber',
        nav: ['Hizmetler', 'Ustalar', 'Randevu'],
        quickInfo: [
          { label: 'Konum', value: 'Nişantaşı / İstanbul' },
          { label: 'Saatler', value: 'Salı-Pazar 10:00-20:00' },
          { label: 'Aksiyon', value: 'Online randevu' },
        ],
        headline: ['Keskin detay.', 'Sakin ritüel.', 'Güçlü ilk izlenim.'],
        subhead: 'Modern erkek bakımını randevu odaklı, rafine ve güven veren bir dijital deneyime taşıyan konsept web sitesi.',
        imageAlt: 'Sıcak ışıklı premium barber stüdyosunda deri koltuk, havlu ve bakım ürünleri.',
        imageCaption: 'Deri, metal ve sıcak ışık salonun premium tarafını daha ilk ekranda hissettirir.',
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
        serviceDetails: [
          'Saç kesimini yalnızca sonuç olarak değil, özenli bir deneyim olarak gösterir.',
          'Sıcak havlu ve tıraş ritüeli salonun premium karakterini ekrana taşır.',
          'Sakal bakımını net, rafine ve güven veren bir hizmet gibi konumlandırır.',
        ],
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
        quickInfo: [
          { label: 'Location', value: 'Nisantasi / Istanbul' },
          { label: 'Hours', value: 'Tue-Sun 10:00-20:00' },
          { label: 'Action', value: 'Online booking' },
        ],
        headline: ['Sharp detail.', 'Quiet ritual.', 'Strong first impression.'],
        subhead: 'A concept website that turns modern grooming into a refined, appointment-led digital experience.',
        imageAlt: 'A warm premium barber studio with a leather chair, towel and grooming products.',
        imageCaption: 'Leather, metal and warm light make the premium salon character clear from the first screen.',
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
        serviceDetails: [
          'Presents the haircut as a crafted experience, not only an end result.',
          'Brings the hot towel and shave ritual into the premium salon story.',
          'Positions beard care as a clear, refined and confidence-building service.',
        ],
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
    image: {
      src: '/demo-detailing.png',
    },
    visuals: {
      services: [
        {
          src: '/demo-detailing-correction.png',
          alt: {
            tr: 'Karanlık detailing garajında polisaj makinesiyle boya düzeltme uygulaması.',
            en: 'Paint correction with a polishing machine in a dark detailing garage.',
          },
        },
        {
          src: '/demo-detailing-ceramic.png',
          alt: {
            tr: 'Parlak araç yüzeyine seramik kaplama aplikatörüyle koruma uygulanması.',
            en: 'Ceramic coating being applied to a glossy vehicle surface with an applicator.',
          },
        },
        {
          src: '/demo-detailing-interior.png',
          alt: {
            tr: 'Araç iç mekanında deri yüzey ve dikiş detaylarının fırçayla temizlenmesi.',
            en: 'Interior leather and stitching detail being cleaned with a brush.',
          },
        },
      ],
      offers: [
        {
          src: '/demo-detailing-correction.png',
          alt: {
            tr: 'Gloss Reset paketi için boya düzeltme ve parlaklık işlemi.',
            en: 'Paint correction and gloss work for the Gloss Reset package.',
          },
        },
        {
          src: '/demo-detailing-ceramic.png',
          alt: {
            tr: 'Ceramic Shield paketi için seramik kaplama uygulaması.',
            en: 'Ceramic coating application for the Ceramic Shield package.',
          },
        },
        {
          src: '/demo-detailing-interior.png',
          alt: {
            tr: 'Interior Lab paketi için deri ve iç mekan temizlik detayı.',
            en: 'Leather and cabin care detail for the Interior Lab package.',
          },
        },
      ],
      gallery: [
        {
          src: '/demo-detailing.png',
          alt: {
            tr: 'Kontrol ışıkları altında premium detailing garajında parlak araç yüzeyi.',
            en: 'A glossy vehicle surface in a premium detailing garage under inspection lights.',
          },
        },
        {
          src: '/demo-detailing-correction.png',
          alt: {
            tr: 'Polisaj makinesiyle boya düzeltme uygulaması.',
            en: 'Paint correction with a polishing machine.',
          },
        },
        {
          src: '/demo-detailing-ceramic.png',
          alt: {
            tr: 'Seramik kaplama ve yüzey koruma detayı.',
            en: 'Ceramic coating and surface protection detail.',
          },
        },
        {
          src: '/demo-detailing-interior.png',
          alt: {
            tr: 'Araç iç mekanında deri bakım ve detay temizliği.',
            en: 'Interior leather care and detail cleaning.',
          },
        },
      ],
    },
    avlenLabel: {
      tr: 'Auto detailing konsept demosu',
      en: 'Auto detailing concept demo',
    },
    content: {
      tr: {
        badge: 'Performance detailing lab',
        businessName: 'Apex Detail Co.',
        nav: ['Paketler', 'Süreç', 'Garaj'],
        quickInfo: [
          { label: 'Konum', value: 'Maslak / İstanbul' },
          { label: 'Saatler', value: 'Hafta içi 09:00-19:00' },
          { label: 'Aksiyon', value: 'Araç analizi' },
        ],
        headline: ['Yüzeyde güç.', 'Detayda hassasiyet.'],
        subhead: 'Seramik kaplama, boya düzeltme ve premium iç temizlik hizmetleri için yüksek tempolu konsept site.',
        imageAlt: 'Karanlık detailing garajında parlak araç yüzeyi, kontrol ışıkları ve bakım ekipmanları.',
        imageCaption: 'Parlak yüzey, ışık çizgileri ve ekipmanlar hizmetin teknik değerini anında gösterir.',
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
        serviceDetails: [
          'Işık çizgileri ve yüzey yakın planlarıyla boya düzeltmenin değerini görünür kılar.',
          'Koruma hizmetini soyut bir vaat olmaktan çıkarıp uygulanabilir, teknik bir süreç gibi anlatır.',
          'İç mekan bakımını küçük detaylar üzerinden premium bir temizlik deneyimine dönüştürür.',
        ],
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
        quickInfo: [
          { label: 'Location', value: 'Maslak / Istanbul' },
          { label: 'Hours', value: 'Weekdays 09:00-19:00' },
          { label: 'Action', value: 'Vehicle review' },
        ],
        headline: ['Power on the surface.', 'Precision in the detail.'],
        subhead: 'A high-tempo concept website for ceramic coating, paint correction and premium interior care.',
        imageAlt: 'A dark detailing garage with glossy vehicle paint, inspection lights and care equipment.',
        imageCaption: 'Glossy surfaces, light lines and tools make the technical value of the service instantly visible.',
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
        serviceDetails: [
          'Makes the value of paint correction visible through light lines and surface close-ups.',
          'Turns protection from an abstract promise into a practical, technical process.',
          'Frames interior care as a premium cleaning experience built from small details.',
        ],
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
    image: {
      src: '/demo-cafe.png',
    },
    visuals: {
      services: [
        {
          src: '/demo-cafe-latte.png',
          alt: {
            tr: 'Sabah ışığında ahşap masada seramik fincanda latte.',
            en: 'A ceramic latte cup on a wood table in morning light.',
          },
        },
        {
          src: '/demo-cafe-filter.png',
          alt: {
            tr: 'Filtre kahve tadım seti, cam demleme ekipmanı ve seramik fincanlar.',
            en: 'A filter coffee tasting set with glass brewer and ceramic cups.',
          },
        },
        {
          src: '/demo-cafe-plate.png',
          alt: {
            tr: 'Kruvasan, reçel, meyve ve kahveden oluşan sıcak kahvaltı tabağı.',
            en: 'A warm breakfast plate with croissant, jam, fruit and coffee.',
          },
        },
        {
          src: '/demo-cafe-cake.png',
          alt: {
            tr: 'Seramik tabakta fıstıklı pasta dilimi ve kahve kaşığı.',
            en: 'A pistachio cake slice with a coffee spoon on a ceramic plate.',
          },
        },
      ],
      offers: [
        {
          src: '/demo-cafe-latte.png',
          alt: {
            tr: 'Yard Latte menü öğesi için seramik fincanda latte.',
            en: 'A ceramic latte cup for the Yard Latte menu item.',
          },
        },
        {
          src: '/demo-cafe-filter.png',
          alt: {
            tr: 'Filter Flight menü öğesi için filtre kahve tadım seti.',
            en: 'A filter coffee tasting set for the Filter Flight menu item.',
          },
        },
        {
          src: '/demo-cafe-plate.png',
          alt: {
            tr: 'Morning Plate menü öğesi için kruvasan ve meyveli kahvaltı tabağı.',
            en: 'A croissant and fruit breakfast plate for the Morning Plate menu item.',
          },
        },
        {
          src: '/demo-cafe-iced.png',
          alt: {
            tr: 'Iced Yard menü öğesi için buzlu latte ve sabah ışığı.',
            en: 'An iced latte in morning light for the Iced Yard menu item.',
          },
        },
      ],
      gallery: [
        {
          src: '/demo-cafe.png',
          alt: {
            tr: 'Sıcak bağımsız cafe iç mekanında kahve ve hamur işi atmosferi.',
            en: 'Coffee and pastry atmosphere in a warm independent cafe interior.',
          },
        },
        {
          src: '/demo-cafe-latte.png',
          alt: {
            tr: 'Ahşap masada sıcak latte fincanı.',
            en: 'A warm latte cup on a wood table.',
          },
        },
        {
          src: '/demo-cafe-filter.png',
          alt: {
            tr: 'Filtre kahve demleme ve tadım seti.',
            en: 'Filter coffee brewing and tasting set.',
          },
        },
        {
          src: '/demo-cafe-plate.png',
          alt: {
            tr: 'Kruvasan, reçel ve meyveli kahvaltı tabağı.',
            en: 'Croissant, jam and fruit breakfast plate.',
          },
        },
        {
          src: '/demo-cafe-espresso.png',
          alt: {
            tr: 'Taş tezgahta espresso ve küçük soda bardağı.',
            en: 'Espresso and a small sparkling water on a stone counter.',
          },
        },
        {
          src: '/demo-cafe-iced.png',
          alt: {
            tr: 'Ahşap masada buzlu latte ve sıcak pencere ışığı.',
            en: 'An iced latte on a wood table with warm window light.',
          },
        },
        {
          src: '/demo-cafe-croissant.png',
          alt: {
            tr: 'Seramik tabakta kruvasan ve reçel yakın planı.',
            en: 'A close-up of croissant and jam on a ceramic plate.',
          },
        },
        {
          src: '/demo-cafe-cake.png',
          alt: {
            tr: 'Fıstıklı pasta dilimi, fincan ve servis kaşığı.',
            en: 'A pistachio cake slice, cup and serving spoon.',
          },
        },
      ],
      menu: [
        {
          src: '/demo-cafe-espresso.png',
          alt: {
            tr: 'Espresso menüsü için taş tezgahta espresso ve soda.',
            en: 'Espresso and sparkling water on a stone counter for the espresso menu.',
          },
        },
        {
          src: '/demo-cafe-iced.png',
          alt: {
            tr: 'Buzlu latte menüsü için yoğun kremalı kahve bardağı.',
            en: 'A creamy iced latte glass for the iced coffee menu.',
          },
        },
        {
          src: '/demo-cafe-croissant.png',
          alt: {
            tr: 'Kahvaltı menüsü için tereyağlı kruvasan ve reçel.',
            en: 'A buttery croissant and jam for the breakfast menu.',
          },
        },
        {
          src: '/demo-cafe-cake.png',
          alt: {
            tr: 'Tatlı menüsü için fıstıklı pasta dilimi.',
            en: 'A pistachio cake slice for the dessert menu.',
          },
        },
      ],
    },
    avlenLabel: {
      tr: 'Cafe konsept demosu',
      en: 'Cafe concept demo',
    },
    content: {
      tr: {
        badge: 'Independent coffee house',
        businessName: 'Mellow Yard',
        nav: ['Menü', 'Kareler', 'Ziyaret'],
        quickInfo: [
          { label: 'Konum', value: 'Moda / Kadıköy' },
          { label: 'Açık', value: '08:30-22:00' },
          { label: 'Bugün', value: 'Pistachio cake vitrinde' },
        ],
        headline: ['Mahalle sıcaklığı.', 'Modern kahve ritmi.'],
        subhead: 'Bağımsız kahve dükkanları için menüyü, atmosferi ve günlük ritmi tek bakışta hissettiren konsept site.',
        imageAlt: 'Sabah ışığında bağımsız bir kafede kahve fincanı, kruvasan ve sıcak iç mekan.',
        imageCaption: 'Kahve, hamur işi ve sabah ışığı mekanın sıcaklığını liste anlatmadan taşır.',
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
        services: ['Espresso Bar', 'Slow Brew', 'Fresh Pastry', 'Cake Counter'],
        serviceDetails: [
          'İmza kahveleri sade bir liste olmaktan çıkarıp sıcak bir ilk temas alanına dönüştürür.',
          'Demleme ritüelini görsel detayla anlatarak kahve meraklısına güven verir.',
          'Taze ürünleri iştah açan karelerle öne çıkarıp ziyaret kararını hızlandırır.',
          'Tatlı vitrinini ayrı bir keşif alanına çevirerek sepete ve ziyarete sebep üretir.',
        ],
        featureTitle: 'Sıcak ama sıradan değil',
        featureBody: 'Krem zemin, büyük tipografi ve organik kompozisyonlarla küçük bir mekanın karakterini büyütür.',
        offersTitle: 'Menü Öne Çıkanlar',
        offers: [
          { name: 'Yard Latte', detail: 'Çift shot, kadifemsi süt ve narin karamel notası' },
          { name: 'Filter Flight', detail: 'Üç farklı çekirdekle küçük tadım seçkisi' },
          { name: 'Morning Plate', detail: 'Taze kruvasan, reçel ve sezon meyvesi' },
          { name: 'Iced Yard', detail: 'Soğuk süt, yoğun espresso ve uzun sabah ferahlığı' },
          { name: 'Pistachio Slice', detail: 'Kat kat fıstık kreması ve hafif kahve eşliği' },
          { name: 'Counter Pairing', detail: 'Günün kahvesiyle küçük tatlı eşleşmesi' },
        ],
        menuTitle: 'Menü vitrini',
        menuBody:
          'Cafe sitesinde menü PDF gibi saklanmamalı; içecekler ve tatlılar fotoğraf, fiyat ve kısa açıklamayla hemen görünmeli.',
        menuItems: [
          { name: 'House Espresso', detail: 'Koyu kavrum, yoğun gövde, yanında soda', price: '₺95', visualIndex: 0 },
          { name: 'Iced Yard Latte', detail: 'Çift shot espresso, soğuk süt, vanilya notası', price: '₺145', visualIndex: 1 },
          { name: 'Butter Croissant', detail: 'Günlük pişen kruvasan, küçük ev reçeli', price: '₺160', visualIndex: 2 },
          { name: 'Pistachio Cake', detail: 'Fıstık kreması, yumuşak kek, kahve yanında', price: '₺185', visualIndex: 3 },
          { name: 'Filter Flight', detail: 'Üç çekirdeklik mini tadım seti', price: '₺210', visualIndex: 0 },
          { name: 'Breakfast Plate', detail: 'Kruvasan, reçel, meyve ve sıcak filtre', price: '₺260', visualIndex: 2 },
        ],
        processTitle: 'Ziyaret Ritmi',
        process: [
          { step: '01', title: 'Menüyü hisset', body: 'Ürünler yalnızca listelenmez; mekanın tavrı ile birlikte sunulur.' },
          { step: '02', title: 'Günü planla', body: 'Saatler, yoğunluk ve öne çıkan lezzetler hızlıca anlaşılır.' },
          { step: '03', title: 'Mekana gel', body: 'Konum ve ziyaret çağrısı fazla düşünmeden aksiyon aldırır.' },
        ],
        galleryTitle: 'Mekan Notları',
        gallery: [
          'Sabah ışığı',
          'Yavaş demleme barı',
          'Taze hamur işi',
          'Mahalle masaları',
          'Espresso molası',
          'Soğuk kahve saati',
          'Kruvasan vitrini',
          'Tatlı tabağı',
        ],
        quote: 'Mekanın kokusunu ve ritmini ekrana taşıyan sakin, davetkar bir vitrin.',
        ctaTitle: 'Bugün uğra.',
        ctaBody: 'Menü, saatler ve atmosfer net; karar vermek için fazladan gürültü yok.',
      },
      en: {
        badge: 'Independent coffee house',
        businessName: 'Mellow Yard',
        nav: ['Menu', 'Frames', 'Visit'],
        quickInfo: [
          { label: 'Location', value: 'Moda / Kadikoy' },
          { label: 'Open', value: '08:30-22:00' },
          { label: 'Today', value: 'Pistachio cake on counter' },
        ],
        headline: ['Neighborhood warmth.', 'Modern coffee rhythm.'],
        subhead: 'A concept site for independent cafés that makes the menu, atmosphere and daily rhythm easy to feel.',
        imageAlt: 'A coffee cup, croissant and warm independent cafe interior in morning light.',
        imageCaption: 'Coffee, pastry and morning light communicate the warmth of the place without overexplaining.',
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
        services: ['Espresso Bar', 'Slow Brew', 'Fresh Pastry', 'Cake Counter'],
        serviceDetails: [
          'Turns signature coffee from a simple list into a warm first point of contact.',
          'Builds trust with coffee lovers by showing the craft behind slow brewing.',
          'Highlights fresh products with appetite-led visuals that make visiting easier to decide.',
          'Turns the cake counter into a discovery area that gives visitors another reason to stop by.',
        ],
        featureTitle: 'Warm, but not ordinary',
        featureBody: 'Cream surfaces, large type and organic composition expand the character of a small place.',
        offersTitle: 'Menu Highlights',
        offers: [
          { name: 'Yard Latte', detail: 'Double shot, velvet milk and a soft caramel note' },
          { name: 'Filter Flight', detail: 'A small tasting set with three rotating beans' },
          { name: 'Morning Plate', detail: 'Fresh croissant, jam and seasonal fruit' },
          { name: 'Iced Yard', detail: 'Cold milk, rich espresso and a long morning finish' },
          { name: 'Pistachio Slice', detail: 'Layered pistachio cream with a quiet coffee pairing' },
          { name: 'Counter Pairing', detail: 'Today’s coffee with a small dessert match' },
        ],
        menuTitle: 'Menu showcase',
        menuBody:
          'A cafe menu should not hide inside a PDF; drinks and pastries need to appear quickly with photos, prices and short descriptions.',
        menuItems: [
          { name: 'House Espresso', detail: 'Dark roast, dense body, served with sparkling water', price: '₺95', visualIndex: 0 },
          { name: 'Iced Yard Latte', detail: 'Double espresso, cold milk and a soft vanilla note', price: '₺145', visualIndex: 1 },
          { name: 'Butter Croissant', detail: 'Daily baked croissant with a small house jam', price: '₺160', visualIndex: 2 },
          { name: 'Pistachio Cake', detail: 'Pistachio cream, soft sponge and coffee pairing', price: '₺185', visualIndex: 3 },
          { name: 'Filter Flight', detail: 'A mini tasting set with three rotating beans', price: '₺210', visualIndex: 0 },
          { name: 'Breakfast Plate', detail: 'Croissant, jam, fruit and warm filter coffee', price: '₺260', visualIndex: 2 },
        ],
        processTitle: 'Visit Rhythm',
        process: [
          { step: '01', title: 'Feel the menu', body: 'Products are not only listed; they are shown with the attitude of the place.' },
          { step: '02', title: 'Plan the day', body: 'Hours, mood and featured items are easy to understand quickly.' },
          { step: '03', title: 'Visit the place', body: 'Location and visit prompts make the next step feel natural.' },
        ],
        galleryTitle: 'Place Notes',
        gallery: [
          'Morning light',
          'Slow brew bar',
          'Fresh pastry',
          'Neighborhood tables',
          'Espresso break',
          'Iced coffee hour',
          'Croissant counter',
          'Dessert plate',
        ],
        quote: 'A calm, welcoming presence that brings the scent and rhythm of the place onto the screen.',
        ctaTitle: 'Drop by today.',
        ctaBody: 'Menu, hours and atmosphere are clear; no extra noise before the decision.',
      },
    },
  },
  {
    slug: 'restaurant',
    path: '/templates/restaurant',
    image: {
      src: '/demo-restaurant.png',
    },
    visuals: {
      services: [
        {
          src: '/demo-restaurant-dish.png',
          alt: {
            tr: 'Seramik tabakta mevsimlik tabak sunumu ve sıcak restoran ışığı.',
            en: 'A seasonal plated dish on ceramic tableware in warm restaurant light.',
          },
        },
        {
          src: '/demo-restaurant-chef.png',
          alt: {
            tr: 'Açık mutfakta şefin tabak sunumunu tamamladığı an.',
            en: 'A chef finishing a plated dish in an open kitchen.',
          },
        },
        {
          src: '/demo-restaurant-table.png',
          alt: {
            tr: 'Paylaşımlı restoran masasında ekmek, kadehler ve sıcak akşam atmosferi.',
            en: 'A shared restaurant table with bread, glasses and warm evening atmosphere.',
          },
        },
      ],
      offers: [
        {
          src: '/demo-restaurant-dish.png',
          alt: {
            tr: 'Seasonal Table menüsü için özenli tabak sunumu.',
            en: 'A refined plated dish for the Seasonal Table menu.',
          },
        },
        {
          src: '/demo-restaurant-chef.png',
          alt: {
            tr: 'Chef Counter deneyimi için açık mutfakta hazırlık detayı.',
            en: 'Open kitchen preparation detail for the Chef Counter experience.',
          },
        },
        {
          src: '/demo-restaurant-table.png',
          alt: {
            tr: 'Private Evening paketi için sıcak paylaşımlı masa atmosferi.',
            en: 'Warm shared table atmosphere for the Private Evening package.',
          },
        },
        {
          src: '/demo-restaurant-pasta.png',
          alt: {
            tr: 'Pasta Night deneyimi için taze makarna tabağı.',
            en: 'A fresh pasta plate for the Pasta Night experience.',
          },
        },
      ],
      gallery: [
        {
          src: '/demo-restaurant.png',
          alt: {
            tr: 'Modern ve sıcak bir restoranda keten örtülü masalar ve loş ışık.',
            en: 'A warm modern restaurant interior with linen tables and sculptural lighting.',
          },
        },
        {
          src: '/demo-restaurant-dish.png',
          alt: {
            tr: 'Mevsimlik tabak ve seramik servis detayı.',
            en: 'Seasonal dish and ceramic service detail.',
          },
        },
        {
          src: '/demo-restaurant-chef.png',
          alt: {
            tr: 'Açık mutfakta tabak hazırlığı ve şef dokunuşu.',
            en: 'Plate preparation and chef detail in an open kitchen.',
          },
        },
        {
          src: '/demo-restaurant-table.png',
          alt: {
            tr: 'Akşam servisinde paylaşımlı masa ve kadeh detayı.',
            en: 'Shared table and glassware detail during evening service.',
          },
        },
        {
          src: '/demo-restaurant-pasta.png',
          alt: {
            tr: 'Otlu yağ ve seramik kasede taze makarna.',
            en: 'Fresh pasta with herb oil in a ceramic bowl.',
          },
        },
        {
          src: '/demo-restaurant-appetizer.png',
          alt: {
            tr: 'Yoğurt tabanı üzerinde mevsimlik köz sebze başlangıcı.',
            en: 'A roasted seasonal vegetable appetizer over labneh.',
          },
        },
        {
          src: '/demo-restaurant-dessert.png',
          alt: {
            tr: 'Kremalı bitter çikolata tatlısı ve deniz tuzu.',
            en: 'A dark chocolate dessert with cream and sea salt.',
          },
        },
        {
          src: '/demo-restaurant-cocktail.png',
          alt: {
            tr: 'Keten peçete yanında amber turunç kokteyli.',
            en: 'An amber citrus cocktail beside a linen napkin.',
          },
        },
      ],
      menu: [
        {
          src: '/demo-restaurant-pasta.png',
          alt: {
            tr: 'Ana yemek menüsü için otlu taze makarna.',
            en: 'Fresh herb pasta for the main menu.',
          },
        },
        {
          src: '/demo-restaurant-appetizer.png',
          alt: {
            tr: 'Başlangıç menüsü için köz sebze tabağı.',
            en: 'A roasted vegetable plate for the starter menu.',
          },
        },
        {
          src: '/demo-restaurant-dessert.png',
          alt: {
            tr: 'Tatlı menüsü için bitter çikolata tabağı.',
            en: 'A dark chocolate dessert plate for the dessert menu.',
          },
        },
        {
          src: '/demo-restaurant-cocktail.png',
          alt: {
            tr: 'İçecek menüsü için amber turunç kokteyli.',
            en: 'An amber citrus cocktail for the drinks menu.',
          },
        },
      ],
    },
    avlenLabel: {
      tr: 'Restoran konsept demosu',
      en: 'Restaurant concept demo',
    },
    content: {
      tr: {
        badge: 'Modern restaurant concept',
        businessName: 'EMBER Table',
        nav: ['Menü', 'Kareler', 'Masa'],
        quickInfo: [
          { label: 'Konum', value: 'Galata / İstanbul' },
          { label: 'Açık', value: '17:30-00:00' },
          { label: 'Servis', value: 'Rezervasyon önerilir' },
        ],
        headline: ['İştah açan vitrin.', 'Sakin ve seçkin servis.'],
        subhead:
          'Restoranlar için menüyü, ambiyansı ve rezervasyon kararını tek akışta güçlendiren görsel ağırlıklı konsept site.',
        imageAlt: 'Sıcak ışıklı modern restoranda keten masalar, kadehler ve loş akşam atmosferi.',
        imageCaption: 'Daha ilk ekranda mekanın ışığı, masa ritmi ve servis dili anlaşılır.',
        primaryCta: 'Masa Ayır',
        secondaryCta: 'Menüyü Gör',
        metric: '19:00',
        metricLabel: 'akşam servisinin en güçlü saati',
        conceptNote: 'Bu sayfa gerçek müşteri işi değil; restoran segmenti için hazırlanmış AVLEN konsept demosudur.',
        proofPoints: [
          { value: 'Menü', label: 'iştah açan ürün vitrini' },
          { value: 'Rezervasyon', label: 'tek bakışta net aksiyon' },
          { value: 'Atmosfer', label: 'mekanın hissini taşıyan görsel akış' },
        ],
        servicesTitle: 'Servis Hikayesi',
        services: ['Seasonal Plates', 'Chef Counter', 'Private Evenings'],
        serviceDetails: [
          'Tabakları yalnızca menü kalemi gibi değil, deneyimin başlangıcı gibi gösterir.',
          'Açık mutfak ve hazırlık detaylarıyla güven veren bir zanaat hissi kurar.',
          'Özel akşam yemeklerini sıcak, davetkar ve değerli bir rezervasyon sebebine çevirir.',
        ],
        featureTitle: 'Menüden önce atmosfer konuşur',
        featureBody:
          'Büyük fotoğraflar, ritimli geçişler ve sade metinlerle restoranın karakteri hızlıca hissedilir; ziyaretçi ne bekleyeceğini görerek karar verir.',
        offersTitle: 'Öne Çıkan Deneyimler',
        offers: [
          { name: 'Seasonal Table', detail: 'Mevsime göre değişen üç aşamalı seçki' },
          { name: 'Chef Counter', detail: 'Açık mutfakta hazırlık ve tadım odaklı servis' },
          { name: 'Private Evening', detail: 'Küçük gruplar için sakin ve özel masa akışı' },
          { name: 'Pasta Night', detail: 'Haftalık taze makarna ve şarap eşleşmesi' },
          { name: 'Dessert Finish', detail: 'Tatlı, kahve ve servis sonrası yumuşak kapanış' },
          { name: 'Aperitivo Hour', detail: 'Kısa menü, bar oturumu ve gün batımı içecekleri' },
        ],
        menuTitle: 'Akşam menüsü',
        menuBody:
          'Restoran demosu menüyü yalnızca atmosferin arkasına saklamıyor; tabak fotoğrafları, fiyatlar ve kısa açıklamalar rezervasyon kararını hızlandırıyor.',
        menuItems: [
          { name: 'Herb Pappardelle', detail: 'Taze makarna, otlu yağ, eski kaşar dokunuşu', price: '₺420', visualIndex: 0 },
          { name: 'Roasted Roots', detail: 'Köz sebze, labne, adaçayı ve çıtır kapari', price: '₺310', visualIndex: 1 },
          { name: 'Chocolate Salt Bar', detail: 'Bitter çikolata, krema ve iri deniz tuzu', price: '₺240', visualIndex: 2 },
          { name: 'Amber Citrus', detail: 'Turunç, baharat, buz ve sakin bar aroması', price: '₺290', visualIndex: 3 },
          { name: 'Chef Counter Tasting', detail: 'Dört tabaklık küçük tadım akışı', price: '₺1.250', visualIndex: 0 },
          { name: 'Shared Table Bread', detail: 'Sıcak ekşi maya, zeytinyağı ve masa başlangıcı', price: '₺180', visualIndex: 1 },
        ],
        processTitle: 'Rezervasyon Akışı',
        process: [
          { step: '01', title: 'Atmosferi hisset', body: 'Ziyaretçi mekanın tarzını fotoğraflar ve kısa metinlerle hızlıca kavrar.' },
          { step: '02', title: 'Menüyü seç', body: 'Öne çıkan tabaklar karar vermeyi kolaylaştıracak şekilde gruplanır.' },
          { step: '03', title: 'Masayı ayır', body: 'Net çağrı, kullanıcıyı menüden rezervasyona doğal biçimde taşır.' },
        ],
        galleryTitle: 'Mekan Kareleri',
        gallery: [
          'Akşam salonu',
          'Mevsimlik tabak',
          'Şef dokunuşu',
          'Paylaşımlı masa',
          'Taze makarna',
          'Köz başlangıç',
          'Tatlı finali',
          'Bar detayı',
        ],
        quote: 'Görsel iştahı yüksek, sakin ve rafine bir restoran vitrini.',
        ctaTitle: 'Masa hazır.',
        ctaBody: 'Menü, atmosfer ve rezervasyon çağrısı aynı anda netleşir.',
      },
      en: {
        badge: 'Modern restaurant concept',
        businessName: 'EMBER Table',
        nav: ['Menu', 'Frames', 'Table'],
        quickInfo: [
          { label: 'Location', value: 'Galata / Istanbul' },
          { label: 'Open', value: '17:30-00:00' },
          { label: 'Service', value: 'Reservations advised' },
        ],
        headline: ['An appetite-led presence.', 'Calm, elevated service.'],
        subhead:
          'A visual concept site for restaurants that strengthens the menu, atmosphere and reservation decision in one flow.',
        imageAlt: 'A warm modern restaurant with linen tables, glassware and evening atmosphere.',
        imageCaption: 'The light, table rhythm and service language are clear from the first screen.',
        primaryCta: 'Reserve a Table',
        secondaryCta: 'View Menu',
        metric: '19:00',
        metricLabel: 'the strongest hour of dinner service',
        conceptNote: 'This is not real client work; it is an AVLEN concept demo for the restaurant category.',
        proofPoints: [
          { value: 'Menu', label: 'appetite-led product showcase' },
          { value: 'Booking', label: 'clear action at a glance' },
          { value: 'Atmosphere', label: 'visual flow that carries the place' },
        ],
        servicesTitle: 'Service Story',
        services: ['Seasonal Plates', 'Chef Counter', 'Private Evenings'],
        serviceDetails: [
          'Frames dishes as the start of an experience, not just menu items.',
          'Builds craft and trust through open-kitchen preparation details.',
          'Turns private dinners into a warm, valuable reason to reserve.',
        ],
        featureTitle: 'Atmosphere speaks before the menu',
        featureBody:
          'Large photography, rhythmic transitions and concise copy help visitors feel the restaurant character quickly and decide with confidence.',
        offersTitle: 'Featured Experiences',
        offers: [
          { name: 'Seasonal Table', detail: 'A rotating three-part selection shaped by the season' },
          { name: 'Chef Counter', detail: 'Open-kitchen preparation with a tasting-led service rhythm' },
          { name: 'Private Evening', detail: 'A quiet, special table flow for small groups' },
          { name: 'Pasta Night', detail: 'Weekly fresh pasta with a quiet wine pairing' },
          { name: 'Dessert Finish', detail: 'Dessert, coffee and a soft end to service' },
          { name: 'Aperitivo Hour', detail: 'A short menu, bar seats and sunset drinks' },
        ],
        menuTitle: 'Evening menu',
        menuBody:
          'This restaurant demo does not hide the menu behind atmosphere; dish photography, prices and short notes help visitors decide and reserve faster.',
        menuItems: [
          { name: 'Herb Pappardelle', detail: 'Fresh pasta, herb oil and aged cheese', price: '₺420', visualIndex: 0 },
          { name: 'Roasted Roots', detail: 'Roasted vegetables, labneh, sage and crisp capers', price: '₺310', visualIndex: 1 },
          { name: 'Chocolate Salt Bar', detail: 'Dark chocolate, cream and coarse sea salt', price: '₺240', visualIndex: 2 },
          { name: 'Amber Citrus', detail: 'Citrus, spice, ice and a calm bar aroma', price: '₺290', visualIndex: 3 },
          { name: 'Chef Counter Tasting', detail: 'A small four-plate tasting flow', price: '₺1.250', visualIndex: 0 },
          { name: 'Shared Table Bread', detail: 'Warm sourdough, olive oil and table opening', price: '₺180', visualIndex: 1 },
        ],
        processTitle: 'Reservation Flow',
        process: [
          { step: '01', title: 'Feel the atmosphere', body: 'Visitors understand the place through imagery and short copy.' },
          { step: '02', title: 'Choose the menu', body: 'Featured dishes are grouped to make the decision easier.' },
          { step: '03', title: 'Reserve the table', body: 'A clear prompt moves naturally from menu interest to booking.' },
        ],
        galleryTitle: 'Place Frames',
        gallery: [
          'Evening room',
          'Seasonal plate',
          'Chef detail',
          'Shared table',
          'Fresh pasta',
          'Roasted starter',
          'Dessert finish',
          'Bar detail',
        ],
        quote: 'A calm, refined restaurant showcase with strong visual appetite.',
        ctaTitle: 'Your table is ready.',
        ctaBody: 'Menu, atmosphere and reservation prompt become clear at once.',
      },
    },
  },
  {
    slug: 'stationery',
    path: '/templates/stationery',
    image: {
      src: '/demo-stationery.png',
    },
    visuals: {
      services: [
        {
          src: '/demo-stationery-notebook.png',
          alt: {
            tr: 'Dokulu defterler, pirinç kalem ve krem kağıt üzerinde masa düzeni.',
            en: 'Textured notebooks, a brass pen and cream paper arranged on a desk.',
          },
        },
        {
          src: '/demo-stationery-wrap.png',
          alt: {
            tr: 'Kurdele, etiket, makas ve seçilmiş kağıtlarla hediye paketleme istasyonu.',
            en: 'A gift wrapping station with ribbon, tags, scissors and curated paper goods.',
          },
        },
        {
          src: '/demo-stationery-display.png',
          alt: {
            tr: 'Planlayıcılar, kartlar, seramikler ve masa ürünleriyle butik ürün teşhiri.',
            en: 'A boutique display with planners, cards, ceramics and desk objects.',
          },
        },
      ],
      offers: [
        {
          src: '/demo-stationery-notebook.png',
          alt: {
            tr: 'Daily Notes seti için defter ve kalem yakın planı.',
            en: 'Notebook and pen close-up for the Daily Notes set.',
          },
        },
        {
          src: '/demo-stationery-wrap.png',
          alt: {
            tr: 'Gift Wrap Bar paketi için paketleme ve kurdele detayı.',
            en: 'Wrapping and ribbon detail for the Gift Wrap Bar package.',
          },
        },
        {
          src: '/demo-stationery-display.png',
          alt: {
            tr: 'Desk Edit seçkisi için masa ve küçük ürün vitrini.',
            en: 'Desk and small goods display for the Desk Edit selection.',
          },
        },
      ],
      gallery: [
        {
          src: '/demo-stationery.png',
          alt: {
            tr: 'Butik kırtasiye mağazasında defterler, kalemler ve ambalaj kağıtları.',
            en: 'A boutique stationery shop shelf with notebooks, pens and wrapping paper.',
          },
        },
        {
          src: '/demo-stationery-notebook.png',
          alt: {
            tr: 'Dokulu defter ve pirinç kalem masa detayı.',
            en: 'Textured notebook and brass pen desk detail.',
          },
        },
        {
          src: '/demo-stationery-wrap.png',
          alt: {
            tr: 'Hediye paketleme masasında kurdele ve etiketler.',
            en: 'Ribbon and tags on a gift wrapping table.',
          },
        },
        {
          src: '/demo-stationery-display.png',
          alt: {
            tr: 'Kartlar, planlayıcılar ve seramik küçük ürün teşhiri.',
            en: 'Cards, planners and small ceramic goods on display.',
          },
        },
      ],
    },
    avlenLabel: {
      tr: 'Kırtasiye mağazası konsept demosu',
      en: 'Stationery shop concept demo',
    },
    content: {
      tr: {
        badge: 'Curated stationery shop',
        businessName: 'Luma Paper Goods',
        nav: ['Ürünler', 'Hediye', 'Ziyaret'],
        quickInfo: [
          { label: 'Konum', value: 'Karaköy / İstanbul' },
          { label: 'Saatler', value: '11:00-20:00' },
          { label: 'Odak', value: 'Hediye ve masa ürünleri' },
        ],
        headline: ['Küçük ürünler.', 'Büyük his.'],
        subhead:
          'Kırtasiye, hediye ve butik ürün mağazaları için ürün dokusunu ve mağaza sıcaklığını öne çıkaran konsept site.',
        imageAlt: 'Butik kırtasiye mağazasında defterler, kalemler, kartlar ve sıcak raf düzeni.',
        imageCaption: 'Kağıt dokusu, raf ritmi ve küçük ürün detayları mağazanın seçici tavrını gösterir.',
        primaryCta: 'Ürünleri Keşfet',
        secondaryCta: 'Hediye Setleri',
        metric: '120+',
        metricLabel: 'seçili kağıt ve masa ürünü',
        conceptNote:
          'Bu sayfa gerçek müşteri işi değil; kırtasiye ve butik ürün mağazaları için hazırlanmış AVLEN konsept demosudur.',
        proofPoints: [
          { value: 'Ürün', label: 'görsel odaklı katalog hissi' },
          { value: 'Hediye', label: 'kolay seçilen setler' },
          { value: 'Mağaza', label: 'sıcak ve düzenli ziyaret çağrısı' },
        ],
        servicesTitle: 'Ürün Düzeni',
        services: ['Daily Notes', 'Gift Wrap Bar', 'Desk Objects'],
        serviceDetails: [
          'Defter, kağıt ve kalemleri dokusuyla hissettiren sakin bir ürün anlatımı kurar.',
          'Hediye paketleme hizmetini görsel bir ritüel gibi sunup mağazayı farklılaştırır.',
          'Küçük masa ürünlerini düzenli, seçilmiş ve satın almaya yakın bir vitrine taşır.',
        ],
        featureTitle: 'Ürün fotoğrafı satışın yarısıdır',
        featureBody:
          'Bu yapı ürünleri yalnızca listelemez; doku, yakın plan ve mağaza atmosferiyle ziyaretçiye neden seçilmiş hissettirdiğini gösterir.',
        offersTitle: 'Mağaza Seçkileri',
        offers: [
          { name: 'Daily Notes', detail: 'Dokulu defter, kalem ve günlük planlama seçkisi' },
          { name: 'Gift Wrap Bar', detail: 'Kurdele, kart ve paketleme desteğiyle hazır hediye akışı' },
          { name: 'Desk Edit', detail: 'Masa üstü için seçilmiş küçük obje ve kağıt ürünleri' },
        ],
        processTitle: 'Satın Alma Akışı',
        process: [
          { step: '01', title: 'Rafı göster', body: 'Kullanıcı ürün bolluğunu yorulmadan, düzenli bir vitrinle görür.' },
          { step: '02', title: 'Seti seçtir', body: 'Hediye ve kullanım senaryoları karar vermeyi kolaylaştırır.' },
          { step: '03', title: 'Ziyarete çağır', body: 'Mağaza bilgisi, ürün ritmi ve sıcak görseller tek aksiyonda birleşir.' },
        ],
        galleryTitle: 'Doku ve Raf',
        gallery: ['Kağıt rafları', 'Defter dokusu', 'Hediye masası', 'Masa objeleri'],
        quote: 'Küçük ürünleri daha değerli, seçilmiş ve dokunulabilir hissettiren bir vitrin.',
        ctaTitle: 'Raf hazır.',
        ctaBody: 'Ürünler, hediye akışı ve mağaza karakteri tek sayfada netleşir.',
      },
      en: {
        badge: 'Curated stationery shop',
        businessName: 'Luma Paper Goods',
        nav: ['Products', 'Gifts', 'Visit'],
        quickInfo: [
          { label: 'Location', value: 'Karakoy / Istanbul' },
          { label: 'Hours', value: '11:00-20:00' },
          { label: 'Focus', value: 'Gifts and desk goods' },
        ],
        headline: ['Small goods.', 'Big feeling.'],
        subhead:
          'A concept site for stationery, gifting and boutique product shops that brings product texture and store warmth forward.',
        imageAlt: 'A boutique stationery shop with notebooks, pens, cards and warm shelving.',
        imageCaption: 'Paper texture, shelf rhythm and small product details reveal the store’s curated point of view.',
        primaryCta: 'Explore Products',
        secondaryCta: 'Gift Sets',
        metric: '120+',
        metricLabel: 'curated paper and desk goods',
        conceptNote:
          'This is not real client work; it is an AVLEN concept demo for stationery and boutique product shops.',
        proofPoints: [
          { value: 'Product', label: 'visual catalog feeling' },
          { value: 'Gift', label: 'easy-to-choose sets' },
          { value: 'Store', label: 'warm and organized visit prompt' },
        ],
        servicesTitle: 'Product Rhythm',
        services: ['Daily Notes', 'Gift Wrap Bar', 'Desk Objects'],
        serviceDetails: [
          'Builds a calm product story that makes notebooks, paper and pens feel tactile.',
          'Turns gift wrapping into a visual ritual that differentiates the shop.',
          'Presents small desk goods as curated, organized and easy to buy.',
        ],
        featureTitle: 'Product photography does half the selling',
        featureBody:
          'This structure does not merely list items; texture, close-ups and store atmosphere show why the goods feel selected.',
        offersTitle: 'Shop Edits',
        offers: [
          { name: 'Daily Notes', detail: 'Textured notebook, pen and daily planning selection' },
          { name: 'Gift Wrap Bar', detail: 'A ready gifting flow with ribbon, cards and wrapping support' },
          { name: 'Desk Edit', detail: 'Curated small objects and paper goods for the desktop' },
        ],
        processTitle: 'Purchase Flow',
        process: [
          { step: '01', title: 'Show the shelf', body: 'Visitors see variety through an organized, low-friction showcase.' },
          { step: '02', title: 'Guide the set', body: 'Gift and use-case groupings make decisions easier.' },
          { step: '03', title: 'Prompt the visit', body: 'Store information, product rhythm and warm visuals move toward one action.' },
        ],
        galleryTitle: 'Texture and Shelf',
        gallery: ['Paper shelves', 'Notebook texture', 'Gift table', 'Desk objects'],
        quote: 'A showcase that makes small goods feel more valuable, selected and tactile.',
        ctaTitle: 'The shelf is ready.',
        ctaBody: 'Products, gifting flow and store character become clear on one page.',
      },
    },
  },
  {
    slug: 'hair-salon',
    path: '/templates/hair-salon',
    image: {
      src: '/demo-hair-salon.png',
    },
    visuals: {
      services: [
        {
          src: '/demo-hair-salon-color.png',
          alt: {
            tr: 'Kadın kuaför salonunda saç rengi uygulaması ve bakım detayı.',
            en: 'Hair color application and care detail in a women’s hair salon.',
          },
        },
        {
          src: '/demo-hair-salon-styling.png',
          alt: {
            tr: 'Fön ve styling sırasında parlak saç dokusu yakın planı.',
            en: 'A close-up of glossy hair texture during blow-dry and styling.',
          },
        },
        {
          src: '/demo-hair-salon-products.png',
          alt: {
            tr: 'Sıcak raf üzerinde saç bakım ürünleri, havlular ve küçük bitkiler.',
            en: 'Hair care products, towels and small plants on a warm shelf.',
          },
        },
        {
          src: '/demo-hair-salon.png',
          alt: {
            tr: 'Kemer aynalar, sıcak koltuklar ve bitkilerle modern kadın kuaför salonu.',
            en: 'A modern women’s hair salon with arched mirrors, warm chairs and plants.',
          },
        },
      ],
      offers: [
        {
          src: '/demo-hair-salon-color.png',
          alt: {
            tr: 'Lived-in Color paketi için saç renklendirme uygulaması.',
            en: 'Hair color application for the Lived-in Color package.',
          },
        },
        {
          src: '/demo-hair-salon-styling.png',
          alt: {
            tr: 'Soft Styling paketi için fön ve parlak saç detayı.',
            en: 'Blow-dry and glossy hair detail for the Soft Styling package.',
          },
        },
        {
          src: '/demo-hair-salon-products.png',
          alt: {
            tr: 'Care Ritual paketi için bakım ürünleri ve havlu rafı.',
            en: 'Care products and towel shelf for the Care Ritual package.',
          },
        },
        {
          src: '/demo-hair-salon.png',
          alt: {
            tr: 'Signature Visit paketi için sıcak salon iç mekanı.',
            en: 'Warm salon interior for the Signature Visit package.',
          },
        },
      ],
      gallery: [
        {
          src: '/demo-hair-salon.png',
          alt: {
            tr: 'Sıcak ışıklı modern kadın kuaför salonu iç mekanı.',
            en: 'A warm modern women’s hair salon interior.',
          },
        },
        {
          src: '/demo-hair-salon-color.png',
          alt: {
            tr: 'Saç renklendirme uygulaması yakın planı.',
            en: 'A close-up of hair color application.',
          },
        },
        {
          src: '/demo-hair-salon-styling.png',
          alt: {
            tr: 'Fön ve parlak saç styling detayı.',
            en: 'Blow-dry and glossy hair styling detail.',
          },
        },
        {
          src: '/demo-hair-salon-products.png',
          alt: {
            tr: 'Bakım ürünleri, havlular ve sakin raf düzeni.',
            en: 'Care products, towels and a calm shelf arrangement.',
          },
        },
      ],
    },
    avlenLabel: {
      tr: 'Kadın hair salon konsept demosu',
      en: 'Women’s hair salon concept demo',
    },
    content: {
      tr: {
        badge: 'Soft hair studio',
        businessName: 'AURA Hair Room',
        nav: ['Bakımlar', 'Stil', 'Randevu'],
        quickInfo: [
          { label: 'Konum', value: 'Etiler / İstanbul' },
          { label: 'Saatler', value: '10:00-20:30' },
          { label: 'Uzmanlık', value: 'Renk, kesim, bakım' },
        ],
        headline: ['Yumuşak dokunuş.', 'Güçlü görünüm.'],
        subhead:
          'Kadın kuaförleri ve güzellik salonları için renk, bakım ve randevu kararını zarif görsellerle güçlendiren konsept site.',
        imageAlt: 'Kemer aynalar, sıcak koltuklar ve bitkilerle modern kadın kuaför salonu.',
        imageCaption: 'Sıcak ışık, ayna ritmi ve bakım detayları salonun özenli havasını ilk ekranda taşır.',
        primaryCta: 'Randevu Al',
        secondaryCta: 'Bakımları Gör',
        metric: '4.9',
        metricLabel: 'salon deneyimi algısı',
        conceptNote: 'Bu sayfa gerçek müşteri işi değil; kadın hair salon segmenti için hazırlanmış AVLEN konsept demosudur.',
        proofPoints: [
          { value: 'Renk', label: 'uzmanlık odağı' },
          { value: 'Bakım', label: 'güven veren detaylar' },
          { value: 'Randevu', label: 'mobilde hızlı seçim' },
        ],
        servicesTitle: 'İmza Bakımlar',
        services: ['Lived-in Color', 'Gloss Ritual', 'Soft Styling', 'Signature Cut'],
        serviceDetails: [
          'Renk hizmetini yalnızca işlem gibi değil, dönüşüm ve güven alanı gibi konumlandırır.',
          'Parlaklık ve bakım ritüelini yakın plan dokularla daha değerli hissettirir.',
          'Fön ve styling sonucunu görsel olarak güçlü, ama abartısız bir şekilde anlatır.',
          'Kesim kararını yüz şekli, ritim ve kişisel stil üzerinden anlaşılır hale getirir.',
        ],
        featureTitle: 'Salon hissi Instagram’dan siteye taşınır',
        featureBody:
          'Bu demo, görsel sıcaklığı ve randevu netliğini birleştirir; ziyaretçi hem salonun tarzını görür hem de hangi bakımı seçeceğini hızlıca anlar.',
        offersTitle: 'Randevu Paketleri',
        offers: [
          { name: 'Lived-in Color', detail: 'Doğal geçişli renk, tonlama ve bakım bitişi' },
          { name: 'Gloss Ritual', detail: 'Parlaklık bakımı, nem desteği ve yumuşak şekillendirme' },
          { name: 'Soft Styling', detail: 'Fön, dalga ve özel gün öncesi hızlı hazırlık' },
          { name: 'Signature Visit', detail: 'Danışmanlık, kesim, bakım ve bitiş styling' },
        ],
        processTitle: 'Randevu Akışı',
        process: [
          { step: '01', title: 'İlhamı göster', body: 'Ziyaretçi salonun tarzını gerçek görsel detaylarla hızlıca algılar.' },
          { step: '02', title: 'Bakımı seçtir', body: 'Renk, bakım ve styling seçenekleri karışmadan ayrışır.' },
          { step: '03', title: 'Güven kur', body: 'Ürünler, uzmanlık ve salon atmosferi randevu kararını destekler.' },
          { step: '04', title: 'Randevuya taşı', body: 'Tek çağrı ile mobilde hızlı iletişim veya rezervasyon akışı başlar.' },
        ],
        galleryTitle: 'Salon Kareleri',
        gallery: ['Ayna ritmi', 'Renk uygulaması', 'Fön dokusu', 'Bakım rafı'],
        quote: 'Güzellik salonu için yalnızca güzel görünen değil, randevu aldıran sıcak bir vitrin.',
        ctaTitle: 'Sandalye hazır.',
        ctaBody: 'Bakım, atmosfer ve randevu çağrısı zarif bir sayfa akışında birleşir.',
      },
      en: {
        badge: 'Soft hair studio',
        businessName: 'AURA Hair Room',
        nav: ['Care', 'Style', 'Booking'],
        quickInfo: [
          { label: 'Location', value: 'Etiler / Istanbul' },
          { label: 'Hours', value: '10:00-20:30' },
          { label: 'Focus', value: 'Color, cut, care' },
        ],
        headline: ['Soft touch.', 'Strong presence.'],
        subhead:
          'A concept site for women’s hair and beauty salons that strengthens color, care and booking decisions with elegant imagery.',
        imageAlt: 'A modern women’s hair salon with arched mirrors, warm chairs and plants.',
        imageCaption: 'Warm light, mirror rhythm and care details bring the salon’s deliberate feeling into the first screen.',
        primaryCta: 'Book a Visit',
        secondaryCta: 'View Services',
        metric: '4.9',
        metricLabel: 'salon experience perception',
        conceptNote: 'This is not real client work; it is an AVLEN concept demo for the women’s hair salon category.',
        proofPoints: [
          { value: 'Color', label: 'specialist focus' },
          { value: 'Care', label: 'trust-building details' },
          { value: 'Booking', label: 'fast mobile choice' },
        ],
        servicesTitle: 'Signature Care',
        services: ['Lived-in Color', 'Gloss Ritual', 'Soft Styling', 'Signature Cut'],
        serviceDetails: [
          'Positions color as a transformation and trust moment, not only a technical service.',
          'Makes shine and care feel more valuable through close-up texture.',
          'Shows blow-dry and styling outcomes with a polished but restrained visual tone.',
          'Makes haircut decisions clearer through face shape, rhythm and personal style.',
        ],
        featureTitle: 'The salon feeling moves from Instagram to the site',
        featureBody:
          'This demo combines visual warmth with booking clarity; visitors see the salon character and understand which service fits quickly.',
        offersTitle: 'Booking Packages',
        offers: [
          { name: 'Lived-in Color', detail: 'Natural dimensional color, toning and care finish' },
          { name: 'Gloss Ritual', detail: 'Shine care, moisture support and soft finishing style' },
          { name: 'Soft Styling', detail: 'Blow-dry, waves and quick occasion-ready styling' },
          { name: 'Signature Visit', detail: 'Consultation, cut, care and finishing style' },
        ],
        processTitle: 'Booking Flow',
        process: [
          { step: '01', title: 'Show the inspiration', body: 'Visitors read the salon style quickly through real visual details.' },
          { step: '02', title: 'Guide the service', body: 'Color, care and styling choices are separated without confusion.' },
          { step: '03', title: 'Build trust', body: 'Products, expertise and atmosphere support the booking decision.' },
          { step: '04', title: 'Move to booking', body: 'One clear prompt starts a fast mobile contact or reservation flow.' },
        ],
        galleryTitle: 'Salon Frames',
        gallery: ['Mirror rhythm', 'Color application', 'Blow-dry texture', 'Care shelf'],
        quote: 'A warm showcase for a beauty salon that does more than look good: it helps visitors book.',
        ctaTitle: 'The chair is ready.',
        ctaBody: 'Care, atmosphere and booking prompt meet inside a graceful page flow.',
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
