/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/itee-validators
 * @description This is the main entry point to bundle the itee validators package.
 * It exposes all exports of the cores, maths and physics sub-folder.
 * In case you're using the commons js build, you will get the file-system validators too.
 */

export * from './cores/_cores'
export * from './maths/_maths'
export * from './physics/_physics'

// #if IS_BACKEND_SPECIFIC
export * from './file-system/_file-system'
// #endif
