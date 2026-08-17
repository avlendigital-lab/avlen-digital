export type Language = 'tr' | 'en';

export const languages: Language[] = ['tr', 'en'];

export const translations = {
  tr: {
    meta: {
      title: 'AVLEN Digital — Web Tasarım & Geliştirme',
      description: 'Küçük işletmeler ve büyüyen markalar için modern, özgün web siteleri.',
    },
    accessibility: {
      skipToContent: 'İçeriğe geç',
      openMenu: 'Menüyü aç',
      closeMenu: 'Menüyü kapat',
      languageSwitcher: 'Dil seçimi',
      decorativeMark: 'AVLEN Digital marka illüstrasyonu',
    },
    nav: {
      work: 'Projeler',
      services: 'Hizmetler',
      about: 'Hakkında',
      contact: 'İletişim',
    },
    hero: {
      eyebrow: 'Bağımsız dijital stüdyo',
      headline: ['Akılda kalan', 'dijital deneyimler', 'tasarlıyoruz.'],
      support: 'Öne çıkmak isteyen markalar için tasarım odaklı web deneyimleri.',
      primaryCta: 'Projeni Başlat',
      secondaryCta: 'Projeleri Gör',
      sideNote: 'Modern web siteleri. Net kimlik. Daha güçlü ilk izlenim.',
    },
    intro: {
      label: 'Neden AVLEN',
      statement: 'Web siteniz herkesinki gibi görünmemeli.',
      body: 'AVLEN, küçük işletmelerin dijital dünyada daha rafine, güvenilir ve unutulmaz görünmesi için tasarım ile geliştirmeyi aynı masada buluşturur.',
    },
    work: {
      eyebrow: 'Seçili İşler',
      title: 'İlk konsept portfolyo',
      body: 'Gerçek müşteri işleri eklendikçe bu alan güncellenecek. Şimdilik AVLEN’in görsel yaklaşımını gösteren üç konsept çalışma.',
      demoCta: 'Demo siteyi incele',
      scopeLabel: 'Odak',
      projects: [
        {
          number: '01',
          type: 'Barber',
          title: 'Premium Barber Experience',
          label: 'Konsept Proje',
          note: 'Rezervasyon odaklı, sakin ve yüksek dokulu bir salon deneyimi.',
          scope: ['Randevu akışı', 'Premium salon hissi', 'Mobil öncelikli yapı'],
        },
        {
          number: '02',
          type: 'Auto Detailing',
          title: 'Performance Detailing',
          label: 'Konsept Proje',
          note: 'Hız, hassasiyet ve yüzey kalitesini öne çıkaran güçlü bir vitrin.',
          scope: ['Paket sunumu', 'Teknik güven', 'Yüksek kontrast ritim'],
        },
        {
          number: '03',
          type: 'Café',
          title: 'Independent Coffee House',
          label: 'Konsept Proje',
          note: 'Mahalle hissini modern tipografi ve sıcak bir ritimle taşıyan yapı.',
          scope: ['Menü vitrini', 'Mekan atmosferi', 'Günlük ziyaret çağrısı'],
        },
      ],
    },
    services: {
      eyebrow: 'What We Do',
      title: 'Markanız için net, güçlü ve kullanışlı dijital temeller.',
      items: [
        {
          number: '01',
          title: 'Web Design',
          body: 'Markanızı yansıtan özgün, modern ve kullanıcı odaklı web arayüzleri.',
        },
        {
          number: '02',
          title: 'Development',
          body: 'Hızlı, responsive ve tüm cihazlarda kusursuz çalışan web siteleri.',
        },
        {
          number: '03',
          title: 'Digital Presence',
          body: 'İşletmenizin dijital dünyada daha tutarlı ve profesyonel görünmesine yardımcı oluyoruz.',
        },
      ],
    },
    process: {
      eyebrow: 'Çalışma Şekli',
      title: 'Az karmaşa, net yön ve iyi hazırlanmış bir lansman.',
      steps: [
        {
          number: '01',
          title: 'Yönü netleştiririz',
          body: 'Markanın kime konuştuğunu, hangi hissi vermesi gerektiğini ve sitenin asıl hedefini belirleriz.',
        },
        {
          number: '02',
          title: 'Görsel sistemi kurarız',
          body: 'Tipografi, renk, ritim ve sayfa akışı birlikte tasarlanır; site hazır şablon gibi görünmez.',
        },
        {
          number: '03',
          title: 'Yayına hazırlarız',
          body: 'Responsive yapı, hız, erişilebilirlik ve temel SEO kontrol edilerek site gerçek kullanıma hazırlanır.',
        },
      ],
    },
    manifesto: {
      lead: ['İyi tasarım dikkat çeker.', 'Harika tasarım akılda kalır.'],
      body: 'Bizim için iyi bir web sitesi yalnızca güzel görünmez. Markanın enerjisini taşır, doğru insanlara doğru hissi verir ve gereksiz gürültüyü ortadan kaldırır.',
    },
    about: {
      eyebrow: 'AVLEN Hakkında',
      title: 'Küçük, bağımsız ve ayrıntıya takıntılı.',
      body: [
        'AVLEN, küçük işletmeler ve büyüyen markalar için özgün dijital deneyimler tasarlayan bağımsız bir dijital stüdyodur.',
        'Bir web sitesinin yalnızca internette var olmakla kalmaması; işletmeyi güvenilir, özenli ve akılda kalıcı göstermesi gerektiğine inanıyoruz.',
      ],
      aside: 'Az sayıda projeye odaklanıp her birine güçlü bir tasarım yönü kazandırıyoruz.',
    },
    contact: {
      eyebrow: 'İletişim',
      heading: ['Aklınızda bir', 'proje mi var?'],
      body: 'Birlikte akılda kalacak bir şey tasarlayalım.',
      instagram: 'Instagram',
      email: 'Email',
    },
    footer: {
      studio: 'AVLEN Digital',
      line: 'Web Design & Development',
      location: 'Turkey · Worldwide',
      instagram: 'Instagram',
    },
  },
  en: {
    meta: {
      title: 'AVLEN Digital — Web Design & Development',
      description: 'Modern, distinctive websites for small businesses and growing brands.',
    },
    accessibility: {
      skipToContent: 'Skip to content',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      languageSwitcher: 'Language selection',
      decorativeMark: 'AVLEN Digital brand illustration',
    },
    nav: {
      work: 'Work',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Independent digital studio',
      headline: ['We build', 'websites', 'people', 'remember.'],
      support: 'Design-led websites for businesses that want to stand out.',
      primaryCta: 'Start a Project',
      secondaryCta: 'View Our Work',
      sideNote: 'Modern websites. Clear identity. A stronger first impression.',
    },
    intro: {
      label: 'Why AVLEN',
      statement: "Your website shouldn't look like everyone else's.",
      body: 'AVLEN brings design and development into the same room so small businesses can feel more refined, credible and memorable online.',
    },
    work: {
      eyebrow: 'Selected Work',
      title: 'First concept portfolio',
      body: 'This area will evolve as real client work is added. For now, three concept studies show the visual direction AVLEN can bring to different businesses.',
      demoCta: 'View demo site',
      scopeLabel: 'Focus',
      projects: [
        {
          number: '01',
          type: 'Barber',
          title: 'Premium Barber Experience',
          label: 'Concept Project',
          note: 'A calm, tactile salon experience shaped around bookings and presence.',
          scope: ['Booking flow', 'Premium salon feel', 'Mobile-first structure'],
        },
        {
          number: '02',
          type: 'Auto Detailing',
          title: 'Performance Detailing',
          label: 'Concept Project',
          note: 'A sharper showcase built around speed, precision and surface quality.',
          scope: ['Package clarity', 'Technical trust', 'High-contrast rhythm'],
        },
        {
          number: '03',
          type: 'Café',
          title: 'Independent Coffee House',
          label: 'Concept Project',
          note: 'A neighborhood feeling carried through modern type and a warm rhythm.',
          scope: ['Menu showcase', 'Place atmosphere', 'Daily visit prompt'],
        },
      ],
    },
    services: {
      eyebrow: 'What We Do',
      title: 'Clear, distinctive digital foundations for your brand.',
      items: [
        {
          number: '01',
          title: 'Web Design',
          body: 'Distinctive, modern interfaces designed around your brand.',
        },
        {
          number: '02',
          title: 'Development',
          body: 'Fast, responsive websites built to work beautifully across devices.',
        },
        {
          number: '03',
          title: 'Digital Presence',
          body: 'Helping businesses build a more consistent and professional digital presence.',
        },
      ],
    },
    process: {
      eyebrow: 'Process',
      title: 'Less noise, clear direction and a launch that feels prepared.',
      steps: [
        {
          number: '01',
          title: 'Clarify the direction',
          body: 'We define who the brand is speaking to, what it should make people feel and what the website must achieve.',
        },
        {
          number: '02',
          title: 'Build the visual system',
          body: 'Typography, color, rhythm and page flow are designed together so the site does not feel like a template.',
        },
        {
          number: '03',
          title: 'Prepare for launch',
          body: 'Responsive behavior, speed, accessibility and baseline SEO are checked before the site goes into real use.',
        },
      ],
    },
    manifesto: {
      lead: ['Good design gets attention.', 'Great design gets remembered.'],
      body: 'To us, a good website does more than look polished. It carries the energy of the brand, gives the right people the right feeling and removes unnecessary noise.',
    },
    about: {
      eyebrow: 'About AVLEN',
      title: 'Small, independent and deliberate.',
      body: [
        'AVLEN is an independent digital studio focused on creating distinctive web experiences for small businesses and growing brands.',
        'We believe a website should do more than simply exist online. It should make a business feel credible, intentional and memorable.',
      ],
      aside: 'We focus on a small number of projects and give each one a strong design direction.',
    },
    contact: {
      eyebrow: 'Contact',
      heading: ['Have a project', 'in mind?'],
      body: "Let's build something worth remembering.",
      instagram: 'Instagram',
      email: 'Email',
    },
    footer: {
      studio: 'AVLEN Digital',
      line: 'Web Design & Development',
      location: 'Turkey · Worldwide',
      instagram: 'Instagram',
    },
  },
} as const;

export type Translation = (typeof translations)[Language];
