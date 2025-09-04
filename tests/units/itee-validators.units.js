import { describe }      from 'mocha'
import { isArrayUnits }   from './cores/arrays/isArray.unit.js'
import { isArrayOfArrayUnits }   from './cores/arrays/isArrayOfArray.unit.js'
import { isArrayOfBooleanUnits }   from './cores/arrays/isArrayOfBoolean.unit.js'
import { isArrayOfFunctionUnits }   from './cores/arrays/isArrayOfFunction.unit.js'
import { isArrayOfMultiElementUnits }   from './cores/arrays/isArrayOfMultiElement.unit.js'
import { isArrayOfNullUnits }   from './cores/arrays/isArrayOfNull.unit.js'
import { isArrayOfNumberUnits }   from './cores/arrays/isArrayOfNumber.unit.js'
import { isArrayOfObjectUnits }   from './cores/arrays/isArrayOfObject.unit.js'
import { isArrayOfSingleElementUnits }   from './cores/arrays/isArrayOfSingleElement.unit.js'
import { isArrayOfStringUnits }   from './cores/arrays/isArrayOfString.unit.js'
import { isArrayOfUndefinedUnits }   from './cores/arrays/isArrayOfUndefined.unit.js'
import { isEmptyArrayUnits }   from './cores/arrays/isEmptyArray.unit.js'
import { isBooleanUnits }   from './cores/booleans/isBoolean.unit.js'
import { isTrueUnits }   from './cores/booleans/isTrue.unit.js'
import { isFunctionUnits }   from './cores/functions/isFunction.unit.js'
import { isInfiniteUnits }   from './cores/numbers/isInfinite.unit.js'
import { isMaxUnits }   from './cores/numbers/isMax.unit.js'
import { isMinUnits }   from './cores/numbers/isMin.unit.js'
import { isNumberUnits }   from './cores/numbers/isNumber.unit.js'
import { isSafeIntegerUnits }   from './cores/numbers/isSafeInteger.unit.js'
import { isZeroUnits }   from './cores/numbers/isZero.unit.js'
import { isEmptyObjectUnits }   from './cores/objects/isEmptyObject.unit.js'
import { isObjectUnits }   from './cores/objects/isObject.unit.js'
import { isBlankStringUnits }   from './cores/strings/isBlankString.unit.js'
import { isEmptyStringUnits }   from './cores/strings/isEmptyString.unit.js'
import { isStringUnits }   from './cores/strings/isString.unit.js'
import { isSymbolUnits }   from './cores/symbols/isSymbol.unit.js'
import { isArrayBufferUnits }   from './cores/typed-arrays/isArrayBuffer.unit.js'
import { isBigInt64ArrayUnits }   from './cores/typed-arrays/isBigInt64Array.unit.js'
import { isBigUint64ArrayUnits }   from './cores/typed-arrays/isBigUint64Array.unit.js'
import { isFloat32ArrayUnits }   from './cores/typed-arrays/isFloat32Array.unit.js'
import { isFloat64ArrayUnits }   from './cores/typed-arrays/isFloat64Array.unit.js'
import { isInt16ArrayUnits }   from './cores/typed-arrays/isInt16Array.unit.js'
import { isInt32ArrayUnits }   from './cores/typed-arrays/isInt32Array.unit.js'
import { isInt8ArrayUnits }   from './cores/typed-arrays/isInt8Array.unit.js'
import { isUint16ArrayUnits }   from './cores/typed-arrays/isUint16Array.unit.js'
import { isUint32ArrayUnits }   from './cores/typed-arrays/isUint32Array.unit.js'
import { isUint8ArrayUnits }   from './cores/typed-arrays/isUint8Array.unit.js'
import { isUint8ClampedArrayUnits }   from './cores/typed-arrays/isUint8ClampedArray.unit.js'
import { isDefinedUnits }   from './cores/voids/isDefined.unit.js'
import { isEmptyUnits }   from './cores/voids/isEmpty.unit.js'
import { isNullUnits }   from './cores/voids/isNull.unit.js'
import { isUndefinedUnits }   from './cores/voids/isUndefined.unit.js'
import { isEventTargetUnits }   from './dom/isEventTarget.unit.js'
import { isBlockDevicePathUnits }   from './file-system/block-devices/isBlockDevicePath.unit.js'
import { isValidBlockDevicePathUnits }   from './file-system/block-devices/isValidBlockDevicePath.unit.js'
import { isCharacterDevicePathUnits }   from './file-system/character-devices/isCharacterDevicePath.unit.js'
import { isValidCharacterDevicePathUnits }   from './file-system/character-devices/isValidCharacterDevicePath.unit.js'
import { isDirectoryPathUnits }   from './file-system/directories/isDirectoryPath.unit.js'
import { isEmptyDirectoryUnits }   from './file-system/directories/isEmptyDirectory.unit.js'
import { isValidDirectoryPathUnits }   from './file-system/directories/isValidDirectoryPath.unit.js'
import { isFIFOPathUnits }   from './file-system/fifo-pipes/isFIFOPath.unit.js'
import { isValidFIFOPathUnits }   from './file-system/fifo-pipes/isValidFIFOPath.unit.js'
import { isEmptyFileUnits }   from './file-system/files/isEmptyFile.unit.js'
import { isFilePathUnits }   from './file-system/files/isFilePath.unit.js'
import { isValidFilePathUnits }   from './file-system/files/isValidFilePath.unit.js'
import { isValidPathUnits }   from './file-system/paths/isValidPath.unit.js'
import { isSocketPathUnits }   from './file-system/sockets/isSocketPath.unit.js'
import { isValidSocketPathUnits }   from './file-system/sockets/isValidSocketPath.unit.js'
import { isSymbolicLinkPathUnits }   from './file-system/symbolic-links/isSymbolicLinkPath.unit.js'
import { isValidSymbolicLinkPathUnits }   from './file-system/symbolic-links/isValidSymbolicLinkPath.unit.js'
import { isCelsiusUnits }   from './physics/temperatures/isCelsius.unit.js'
import { isFahrenheitUnits }   from './physics/temperatures/isFahrenheit.unit.js'
import { isKelvinUnits }   from './physics/temperatures/isKelvin.unit.js'
import { isTemperatureUnits }   from './physics/temperatures/isTemperature.unit.js'

const root = typeof window === 'undefined'
    ? typeof global === 'undefined'
        ? Function( 'return this' )() 
        : global 
    : window

describe( 'Itee#Validators', () => {

    isArrayUnits.call( root )
    isArrayOfArrayUnits.call( root )
    isArrayOfBooleanUnits.call( root )
    isArrayOfFunctionUnits.call( root )
    isArrayOfMultiElementUnits.call( root )
    isArrayOfNullUnits.call( root )
    isArrayOfNumberUnits.call( root )
    isArrayOfObjectUnits.call( root )
    isArrayOfSingleElementUnits.call( root )
    isArrayOfStringUnits.call( root )
    isArrayOfUndefinedUnits.call( root )
    isEmptyArrayUnits.call( root )
    isBooleanUnits.call( root )
    isTrueUnits.call( root )
    isFunctionUnits.call( root )
    isInfiniteUnits.call( root )
    isMaxUnits.call( root )
    isMinUnits.call( root )
    isNumberUnits.call( root )
    isSafeIntegerUnits.call( root )
    isZeroUnits.call( root )
    isEmptyObjectUnits.call( root )
    isObjectUnits.call( root )
    isBlankStringUnits.call( root )
    isEmptyStringUnits.call( root )
    isStringUnits.call( root )
    isSymbolUnits.call( root )
    isArrayBufferUnits.call( root )
    isBigInt64ArrayUnits.call( root )
    isBigUint64ArrayUnits.call( root )
    isFloat32ArrayUnits.call( root )
    isFloat64ArrayUnits.call( root )
    isInt16ArrayUnits.call( root )
    isInt32ArrayUnits.call( root )
    isInt8ArrayUnits.call( root )
    isUint16ArrayUnits.call( root )
    isUint32ArrayUnits.call( root )
    isUint8ArrayUnits.call( root )
    isUint8ClampedArrayUnits.call( root )
    isDefinedUnits.call( root )
    isEmptyUnits.call( root )
    isNullUnits.call( root )
    isUndefinedUnits.call( root )
    isEventTargetUnits.call( root )
    isBlockDevicePathUnits.call( root )
    isValidBlockDevicePathUnits.call( root )
    isCharacterDevicePathUnits.call( root )
    isValidCharacterDevicePathUnits.call( root )
    isDirectoryPathUnits.call( root )
    isEmptyDirectoryUnits.call( root )
    isValidDirectoryPathUnits.call( root )
    isFIFOPathUnits.call( root )
    isValidFIFOPathUnits.call( root )
    isEmptyFileUnits.call( root )
    isFilePathUnits.call( root )
    isValidFilePathUnits.call( root )
    isValidPathUnits.call( root )
    isSocketPathUnits.call( root )
    isValidSocketPathUnits.call( root )
    isSymbolicLinkPathUnits.call( root )
    isValidSymbolicLinkPathUnits.call( root )
    isCelsiusUnits.call( root )
    isFahrenheitUnits.call( root )
    isKelvinUnits.call( root )
    isTemperatureUnits.call( root )

} )
