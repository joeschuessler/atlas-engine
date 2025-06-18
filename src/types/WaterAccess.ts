export type WaterAccess =
  | 'none'        // No significant water present
  | 'surface'     // River, stream or open freshwater (moving or still)
  | 'standing'    // Lakes, ponds, or other stillwater bodies
  | 'saturated'   // Swamp-like: land holds water year round
  | 'seasonal'    // Floodplain, wet seasonally
  | 'saline'      // Ocean, sea, or salt lake exposure
  | 'subsurface'  // Springs, aquifers, or wells available