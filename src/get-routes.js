import fs from 'fs'
import path from 'path'

/**
 * Recursively searches for routes in the given segment path
 * @param {string} segmentPath - The path of the segment to recursively search for routes
 * @returns {string[]}
 */
export function getRoutes(segmentPath) {
  return searchRoute(segmentPath, [])

  /**
   * @param {string} segmentPath - The path of the segment to recursively search for routes
   * @param {string[]} accumulator - The array of routes found so far
   * @returns {string[]}
   */
  function searchRoute(segmentPath, accumulator) {
    try {
      const files = fs.readdirSync(segmentPath)

      let segments = []
      for (const file of files) {
        const filePath = path.join(segmentPath, file)
        const stats = fs.statSync(filePath)
        if (stats.isDirectory()) {
          segments.push(filePath)
          continue
        }

        if (/^page\.(js|ts|tsx|ts)$/.test(file)) {
          accumulator.push(path.normalize(segmentPath))
        }
      }

      for (const segment of segments) {
        searchRoute(segment, accumulator)
      }

      return accumulator
    } catch (error) {
      console.error(`Failed to read directory: ${segmentPath}`, error)
    }
  }
}
