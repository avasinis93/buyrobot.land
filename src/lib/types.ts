// ── Enum-like type aliases ──────────────────────────────────────────

export type RobotType =
  | 'ARM'
  | 'MOBI'
  | 'BIPD'
  | 'QUAD'
  | 'HEXA'
  | 'AERI'
  | 'AQUA'
  | 'SERP'
  | 'SPHR'
  | 'SOFT'
  | 'WEAR'
  | 'VEHI'
  | 'APPL'
  | 'SWRM'
  | 'HYBR'

export type Domain = 'IND' | 'PRO' | 'HOME'

export type Category =
  | 'MFG'
  | 'LOG'
  | 'AGR'
  | 'MED'
  | 'DEF'
  | 'EDU'
  | 'ENT'
  | 'CON'
  | 'MIN'
  | 'ENR'
  | 'RET'
  | 'HOS'
  | 'SEC'
  | 'INS'
  | 'MAI'
  | 'CLN'
  | 'FOD'
  | 'TRA'
  | 'MAP'
  | 'RES'
  | 'ONG'
  | 'SPC'
  | 'TEL'
  | 'WLD'
  | 'PNT'
  | 'PCK'
  | 'PLT'
  | 'LAB'
  | 'PER'

export type PriceTier =
  | 'BUDGET'
  | 'MID'
  | 'PREMIUM'
  | 'ENTERPRISE'
  | 'CUSTOM'

export type AutonomyLevel =
  | 'MANUAL'
  | 'ASSISTED'
  | 'SEMI'
  | 'HIGH'
  | 'FULL'

export type ProductStatus =
  | 'ACTIVE'
  | 'DISCONTINUED'
  | 'PREORDER'
  | 'COMING_SOON'
  | 'ARCHIVED'

// ── Core types ─────────────────────────────────────────────────────

export type Product = {
  id: string
  manufacturer_id: string
  slug: string
  name: string
  model: string
  description: string
  product_url: string
  status: ProductStatus
  year_launched: number | null
  type: RobotType
  domain: Domain
  category: Category
  secondary_categories: string[]
  tags: string[]

  // Physical specs
  weight_kg: number | null
  payload_capacity_kg: number | null
  max_speed_ms: number | null
  endurance_minutes: number | null
  range_km: number | null
  degrees_of_freedom: number | null
  reach_mm: number | null
  repeatability_mm: number | null
  ip_rating: string | null
  operating_temp_min_c: number | null
  operating_temp_max_c: number | null

  // Power
  power_source: string | null
  battery_capacity_wh: number | null
  charging_time_minutes: number | null

  // Dimensions (mm)
  dimensions: {
    length_mm: number | null
    width_mm: number | null
    height_mm: number | null
  } | null

  // Autonomy & navigation
  autonomy_level: AutonomyLevel | null
  navigation_methods: string[]
  obstacle_avoidance: boolean
  fleet_management: boolean
  bvlos_capable: boolean

  // Software & integration
  os: string | null
  ros_compatible: boolean
  api_available: boolean
  sdk_languages: string[]
  programming_methods: string[]
  connectivity: string[]
  sensors: string[]

  // Certifications
  ce_marked: boolean
  fcc_approved: boolean
  ndaa_compliant: boolean
  faa_type_certified: boolean
  faa_remote_id: boolean
  blue_suas: boolean
  ul_listed: boolean
  other_certifications: string[]

  // Pricing
  price_usd: number | null
  price_tier: PriceTier | null
  pricing_models: string[]
  lead_time: string | null
  min_order_qty: number | null
  warranty_months: number | null
  available_regions: string[]

  // Media
  hero_image_url: string | null
  gallery_urls: string[]
  video_url: string | null
  datasheet_url: string | null

  // Provenance
  source: string | null
  source_detail: string | null
  completeness_score: number | null
  verified: boolean
  verified_by: string | null

  // Regulatory
  regulatory_approvals: RegulatoryApproval[]

  // Timestamps
  created_at: string
  updated_at: string
}

export type RegulatoryApproval = {
  regulator: string
  approval_type: string
  id?: string
  product_code?: string
  notified_body?: string
  date?: string
  url?: string
  status?: string
}

export type DataSource = {
  id: string
  name: string
  regulator: string
  country: string | null
  category: string | null
  source_url: string | null
  api_url: string | null
  last_scraped_at: string | null
  next_scrape_at: string | null
  record_count: number
  scrape_frequency: string | null
  active: boolean
  notes: string | null
  created_at: string
}

export type Manufacturer = {
  id: string
  slug: string
  name: string
  website: string | null
  logo_url: string | null
  hq_country: string | null
  hq_city: string | null
  manufacturing_countries: string[]
  year_founded: number | null
  employee_range: string | null
  funding_stage: string | null
  total_funding_usd: number | null
  description: string | null
  linkedin_url: string | null
  crunchbase_url: string | null
  contact_email: string | null
  phone: string | null
  claimed: boolean
  claimed_by: string | null
  claimed_at: string | null
  created_at: string
  updated_at: string
}

export type TradeshowAppearance = {
  id: string
  manufacturer_id: string
  product_id: string | null
  event_name: string
  event_year: number
  event_location: string | null
  booth_number: string | null
  source_url: string | null
  created_at: string
}

export type QuoteRequest = {
  id: string
  product_id: string
  manufacturer_id: string
  requester_name: string
  requester_email: string
  requester_company: string | null
  requester_country: string | null
  message: string | null
  quantity: number | null
  timeline: string | null
  status: string
  created_at: string
}

export type Application = {
  id: string
  slug: string
  title: string
  description: string
  long_description: string | null
  illustration_url: string | null
  robot_types: string[]
  product_count: number
  sort_order: number
  featured: boolean
  created_at: string
}

// ── Composed types ─────────────────────────────────────────────────

export type ProductWithManufacturer = Product & {
  manufacturer: Manufacturer
}
