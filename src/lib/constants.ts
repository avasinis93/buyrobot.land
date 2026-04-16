import type { RobotType, Domain, Category, PriceTier, AutonomyLevel } from './types'

// ── Robot types ────────────────────────────────────────────────────

export const ROBOT_TYPES: Record<
  RobotType,
  { label: string; slug: string; pluralLabel: string }
> = {
  ARM:  { label: 'Robotic arm',        slug: 'robotic-arms',        pluralLabel: 'Robotic arms' },
  MOBI: { label: 'Mobile robot',       slug: 'mobile-robots',       pluralLabel: 'Mobile robots' },
  BIPD: { label: 'Bipedal robot',      slug: 'bipedal-robots',      pluralLabel: 'Bipedal robots' },
  QUAD: { label: 'Quadruped robot',    slug: 'quadruped-robots',    pluralLabel: 'Quadruped robots' },
  HEXA: { label: 'Hexapod robot',      slug: 'hexapod-robots',      pluralLabel: 'Hexapod robots' },
  AERI: { label: 'Aerial robot',       slug: 'aerial-robots',       pluralLabel: 'Aerial robots' },
  AQUA: { label: 'Aquatic robot',      slug: 'aquatic-robots',      pluralLabel: 'Aquatic robots' },
  SERP: { label: 'Serpentine robot',   slug: 'serpentine-robots',   pluralLabel: 'Serpentine robots' },
  SPHR: { label: 'Spherical robot',    slug: 'spherical-robots',    pluralLabel: 'Spherical robots' },
  SOFT: { label: 'Soft robot',         slug: 'soft-robots',         pluralLabel: 'Soft robots' },
  WEAR: { label: 'Wearable robot',     slug: 'wearable-robots',     pluralLabel: 'Wearable robots' },
  VEHI: { label: 'Autonomous vehicle', slug: 'autonomous-vehicles', pluralLabel: 'Autonomous vehicles' },
  APPL: { label: 'Appliance robot',    slug: 'appliance-robots',    pluralLabel: 'Appliance robots' },
  SWRM: { label: 'Swarm robot',        slug: 'swarm-robots',        pluralLabel: 'Swarm robots' },
  HYBR: { label: 'Hybrid robot',       slug: 'hybrid-robots',       pluralLabel: 'Hybrid robots' },
}

/** Reverse map: slug -> RobotType code */
export const TYPE_SLUGS: Record<string, RobotType> = Object.fromEntries(
  Object.entries(ROBOT_TYPES).map(([code, { slug }]) => [slug, code as RobotType])
) as Record<string, RobotType>

// ── Domains ────────────────────────────────────────────────────────

export const DOMAINS: Record<Domain, string> = {
  IND:  'Industrial',
  PRO:  'Professional',
  HOME: 'Home / Consumer',
}

// ── Categories ─────────────────────────────────────────────────────

export const CATEGORIES: Record<Category, string> = {
  MFG: 'Manufacturing',
  LOG: 'Logistics & Warehousing',
  AGR: 'Agriculture',
  MED: 'Medical & Healthcare',
  DEF: 'Defense & Security',
  EDU: 'Education & Research',
  ENT: 'Entertainment',
  CON: 'Construction',
  MIN: 'Mining',
  ENR: 'Energy & Utilities',
  RET: 'Retail',
  HOS: 'Hospitality',
  SEC: 'Surveillance & Security',
  INS: 'Inspection',
  MAI: 'Maintenance & Repair',
  CLN: 'Cleaning',
  FOD: 'Food & Beverage',
  TRA: 'Transportation',
  MAP: 'Mapping & Surveying',
  RES: 'Search & Rescue',
  ONG: 'Oil & Gas',
  SPC: 'Space',
  TEL: 'Telepresence',
  WLD: 'Welding',
  PNT: 'Painting & Coating',
  PCK: 'Packing & Palletizing',
  PLT: 'Pick & Place',
  LAB: 'Laboratory',
  PER: 'Personal / Companion',
}

// ── Price tiers ────────────────────────────────────────────────────

export const PRICE_TIERS: Record<PriceTier, string> = {
  BUDGET:     'Budget (< $5k)',
  MID:        'Mid-range ($5k – $25k)',
  PREMIUM:    'Premium ($25k – $100k)',
  ENTERPRISE: 'Enterprise ($100k+)',
  CUSTOM:     'Custom / Quote only',
}

// ── Autonomy levels ────────────────────────────────────────────────

export const AUTONOMY_LEVELS: Record<AutonomyLevel, string> = {
  MANUAL:   'Manual / Teleoperated',
  ASSISTED: 'Assisted',
  SEMI:     'Semi-autonomous',
  HIGH:     'Highly autonomous',
  FULL:     'Fully autonomous',
}
