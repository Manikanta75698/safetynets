// ─────────────────────────────────────────────────────────────────────────────
//  BUSINESS CONFIG — single source of truth
//
//  Phone, email, address, city and service areas live ONLY here.
//  Every component, the <head> SEO tags (title / description / Open Graph)
//  and the LocalBusiness JSON-LD schema are generated from this file.
//
//  To change the city or add/remove an area: edit this file, run `npm run build`.
// ─────────────────────────────────────────────────────────────────────────────

export const BUSINESS = {
  name: 'OurSafetyNets',

  // 10-digit mobile number, no spaces. Used for tel: links and WhatsApp.
  phone: '8143267425',

  // Leave '' until a real mailbox exists — the email card and schema entry
  // are hidden automatically when this is empty.
  email: '',

  // City naming:
  //  - `city` is the marketing/SEO name used in headings and copy
  //    ("safety nets in Bangalore" has far higher search volume than "Bengaluru")
  //  - `cityOfficial` is used in the postal address / schema.
  city: 'Bangalore',
  cityOfficial: 'Bengaluru',
  state: 'Karnataka',
  stateIsoCode: 'IN-KA',

  // Business location (NAP consistency for local SEO).
  // PIN 560054 = Mathikere (M S Ramaiah Nagar / MSRIT), Bangalore North.
  streetAddress: '',          // optional, e.g. 'No. 12, 3rd Cross, MSR Nagar'
  locality: 'Mathikere',
  pincode: '560054',

  // Canonical site URL. Vercel currently 308-redirects the apex domain to www,
  // so www is the canonical host. (Keep sitemap.xml and robots.txt in sync.)
  siteUrl: 'https://www.oursafetynets.in',

  // Social / listing profiles → schema `sameAs`. Add when available, e.g.
  // 'https://www.instagram.com/oursafetynets', 'https://g.page/r/...', JustDial URL
  sameAs: [],

  // Service areas across Bangalore. Order matters: the first 6 are used in the
  // meta description, services intro and FAQ; the full list goes into the
  // footer and the schema `areaServed`.
  areas: [
    // Most-searched localities first — these 6 feed the meta description,
    // the services intro and the FAQ answer.
    'Whitefield', 'Electronic City', 'HSR Layout', 'Marathahalli', 'Hebbal', 'JP Nagar',
    // East
    'Sarjapur Road', 'Bellandur', 'KR Puram', 'Hoodi', 'Indiranagar',
    // South
    'Koramangala', 'Jayanagar', 'Bannerghatta Road', 'BTM Layout', 'Banashankari',
    // North
    'Yelahanka', 'Mathikere', 'Yeshwanthpur', 'Hennur', 'Thanisandra',
    // West
    'Rajajinagar', 'Malleshwaram', 'Kengeri', 'Nagarbhavi',
  ],
};

// ── Derived helpers ──────────────────────────────────────────────────────────

export const PHONE_E164 = `+91${BUSINESS.phone}`;
export const PHONE_DISPLAY = `+91 ${BUSINESS.phone.slice(0, 5)} ${BUSINESS.phone.slice(5)}`;
export const TEL_LINK = `tel:${PHONE_E164}`;

/** WhatsApp click-to-chat link with a pre-filled message. */
export const waLink = (
  message = `Hi ${BUSINESS.name}, I need a free quotation for safety nets in ${BUSINESS.city}.`,
) => `https://wa.me/91${BUSINESS.phone}?text=${encodeURIComponent(message)}`;

/** "Mathikere, Bengaluru, Karnataka – 560054" */
export const ADDRESS_DISPLAY = [
  BUSINESS.streetAddress,
  BUSINESS.locality,
  `${BUSINESS.cityOfficial}, ${BUSINESS.state} – ${BUSINESS.pincode}`,
].filter(Boolean).join(', ');

export const TOP_AREAS = BUSINESS.areas.slice(0, 6);

/** "Whitefield, Electronic City, HSR Layout, Marathahalli, Hebbal and JP Nagar" */
export const listAreas = (areas = TOP_AREAS) =>
  areas.length > 1
    ? `${areas.slice(0, -1).join(', ')} and ${areas[areas.length - 1]}`
    : areas.join('');

// ── SEO strings (used by vite.config.js to render the static <head>) ─────────

export const SEO = {
  // ~66 chars — primary keyword first, services next.
  title: `Safety Nets in ${BUSINESS.city} | Balcony, Pigeon Nets & Invisible Grills`,
  // ≤ 158 chars so Google does not truncate it.
  description:
    `Balcony safety nets, pigeon nets & invisible grills in ${BUSINESS.city} – ` +
    `${TOP_AREAS.slice(0, 3).join(', ')} & all areas. Free quote on call or WhatsApp.`,
  // 1200 × 630 image in /public — stable URL (no build hash) for WhatsApp/Facebook previews.
  ogImage: `${BUSINESS.siteUrl}/og-image.jpg`,
  ogImageAlt: `Balcony safety net installation in ${BUSINESS.city} by ${BUSINESS.name}`,
};

// ── LocalBusiness structured data ────────────────────────────────────────────

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${BUSINESS.siteUrl}/#business`,
  name: BUSINESS.name,
  description: SEO.description,
  url: `${BUSINESS.siteUrl}/`,
  image: SEO.ogImage,
  logo: `${BUSINESS.siteUrl}/favicon.svg`,
  telephone: PHONE_E164,
  ...(BUSINESS.email ? { email: BUSINESS.email } : {}),
  address: {
    '@type': 'PostalAddress',
    ...(BUSINESS.streetAddress ? { streetAddress: BUSINESS.streetAddress } : {}),
    addressLocality: BUSINESS.cityOfficial,
    addressRegion: BUSINESS.state,
    postalCode: BUSINESS.pincode,
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'City', name: BUSINESS.cityOfficial, alternateName: BUSINESS.city },
    ...BUSINESS.areas.map((area) => ({ '@type': 'Place', name: `${area}, ${BUSINESS.cityOfficial}` })),
  ],
  knowsAbout: [
    'Balcony safety nets',
    'Pigeon and anti-bird nets',
    'Invisible grills',
    'Cricket practice nets',
    'Children safety nets',
    'Construction safety nets',
    'Monkey safety nets',
  ],
  ...(BUSINESS.sameAs.length ? { sameAs: BUSINESS.sameAs } : {}),
};