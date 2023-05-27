
    export interface placeType {
    location_id: string
    name: string
    latitude: string
    longitude: string
    num_reviews: string
    timezone: string
    location_string: string
    photo: Photo
    awards: any[]
    doubleclick_zone: string
    preferred_map_engine: string
    raw_ranking: string
    ranking_geo: string
    ranking_geo_id: string
    ranking_position: string
    ranking_denominator: string
    ranking_category: string
    ranking: string
    distance: any
    distance_string: any
    bearing: string
    rating: string
    is_closed: boolean
    open_now_text: string
    is_long_closed: boolean
    price_level: string
    price: string
    description: string
    web_url: string
    write_review: string
    ancestors: Ancestor[]
    category: Category
    subcategory: Subcategory2[]
    parent_display_name: string
    is_jfy_enabled: boolean
    nearest_metro_station: any[]
    phone: string
    website: string
    email: string
    address_obj: AddressObj
    address: string
    hours: Hours
    is_candidate_for_contact_info_suppression: boolean
    cuisine: Cuisine[]
    dietary_restrictions: DietaryRestriction[]
    establishment_types: EstablishmentType[]
  }
  
  export interface Photo {
    images: Images
    is_blessed: boolean
    uploaded_date: string
    caption: string
    id: string
    helpful_votes: string
    published_date: string
    user: User
  }
  
  export interface Images {
    small: Small
    thumbnail: Thumbnail
    original: Original
    large: Large
    medium: Medium
  }
  
  export interface Small {
    width: string
    url: string
    height: string
  }
  
  export interface Thumbnail {
    width: string
    url: string
    height: string
  }
  
  export interface Original {
    width: string
    url: string
    height: string
  }
  
  export interface Large {
    width: string
    url: string
    height: string
  }
  
  export interface Medium {
    width: string
    url: string
    height: string
  }
  
  export interface User {
    user_id: any
    member_id: string
    type: string
  }
  
  export interface Ancestor {
    subcategory: Subcategory[]
    name: string
    abbrv: any
    location_id: string
  }
  
  export interface Subcategory {
    key: string
    name: string
  }
  
  export interface Category {
    key: string
    name: string
  }
  
  export interface Subcategory2 {
    key: string
    name: string
  }
  
  export interface AddressObj {
    street1: string
    street2: string
    city: string
    state: any
    country: string
    postalcode: string
  }
  
  export interface Hours {
    week_ranges: WeekRange[][]
    timezone: string
  }
  
  export interface WeekRange {
    open_time: number
    close_time: number
  }
  
  export interface Cuisine {
    key: string
    name: string
  }
  
  export interface DietaryRestriction {
    key: string
    name: string
  }
  
  export interface EstablishmentType {
    key: string
    name: string
  }
  export type propType = placeType[];