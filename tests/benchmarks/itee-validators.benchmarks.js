import {isTemperatureSuite, isNotTemperatureSuite} from './physics/temperatures/isTemperature.bench.js'
import {isKelvinSuite, isNotKelvinSuite} from './physics/temperatures/isKelvin.bench.js'
import {isFahrenheitSuite, isNotFahrenheitSuite} from './physics/temperatures/isFahrenheit.bench.js'
import {isCelsiusSuite, isNotCelsiusSuite} from './physics/temperatures/isCelsius.bench.js'
import {isValidSymbolicLinkPathSuite, isInvalidSymbolicLinkPathSuite} from './file-system/symbolic-links/isValidSymbolicLinkPath.bench.js'
import {isSymbolicLinkPathSuite, isNotSymbolicLinkPathSuite} from './file-system/symbolic-links/isSymbolicLinkPath.bench.js'
import {isValidSocketPathSuite, isInvalidSocketPathSuite} from './file-system/sockets/isValidSocketPath.bench.js'
import {isSocketPathSuite, isNotSocketPathSuite} from './file-system/sockets/isSocketPath.bench.js'
import {isValidPathSuite, isInvalidPathSuite} from './file-system/paths/isValidPath.bench.js'
import {isValidFilePathSuite, isInvalidFilePathSuite} from './file-system/files/isValidFilePath.bench.js'
import {isFilePathSuite, isNotFilePathSuite} from './file-system/files/isFilePath.bench.js'
import {isEmptyFileSuite, isNotEmptyFileSuite} from './file-system/files/isEmptyFile.bench.js'
import {isValidFIFOPathSuite, isInvalidFIFOPathSuite} from './file-system/fifo-pipes/isValidFIFOPath.bench.js'
import {isFIFOPathSuite, isNotFIFOPathSuite} from './file-system/fifo-pipes/isFIFOPath.bench.js'
import {isValidDirectoryPathSuite, isInvalidDirectoryPathSuite} from './file-system/directories/isValidDirectoryPath.bench.js'
import {isEmptyDirectorySuite, isNotEmptyDirectorySuite} from './file-system/directories/isEmptyDirectory.bench.js'
import {isDirectoryPathSuite, isNotDirectoryPathSuite} from './file-system/directories/isDirectoryPath.bench.js'
import {isValidCharacterDevicePathSuite, isInvalidCharacterDevicePathSuite} from './file-system/character-devices/isValidCharacterDevicePath.bench.js'
import {isCharacterDevicePathSuite, isNotCharacterDevicePathSuite} from './file-system/character-devices/isCharacterDevicePath.bench.js'
import {isValidBlockDevicePathSuite, isInvalidBlockDevicePathSuite} from './file-system/block-devices/isValidBlockDevicePath.bench.js'
import {isBlockDevicePathSuite, isNotBlockDevicePathSuite} from './file-system/block-devices/isBlockDevicePath.bench.js'
import {isEventTargetSuite, isNotEventTargetSuite} from './dom/isEventTarget.bench.js'
import {isUndefinedSuite, isNotUndefinedSuite} from './cores/voids/isUndefined.bench.js'
import {isNullSuite, isNotNullSuite} from './cores/voids/isNull.bench.js'
import {isEmptySuite, isNotEmptySuite} from './cores/voids/isEmpty.bench.js'
import {isDefinedSuite, isNotDefinedSuite} from './cores/voids/isDefined.bench.js'
import {isUint8ClampedArraySuite, isNotUint8ClampedArraySuite} from './cores/typed-arrays/isUint8ClampedArray.bench.js'
import {isUint8ArraySuite, isNotUint8ArraySuite} from './cores/typed-arrays/isUint8Array.bench.js'
import {isUint32ArraySuite, isNotUint32ArraySuite} from './cores/typed-arrays/isUint32Array.bench.js'
import {isUint16ArraySuite, isNotUint16ArraySuite} from './cores/typed-arrays/isUint16Array.bench.js'
import {isInt8ArraySuite, isNotInt8ArraySuite} from './cores/typed-arrays/isInt8Array.bench.js'
import {isInt32ArraySuite, isNotInt32ArraySuite} from './cores/typed-arrays/isInt32Array.bench.js'
import {isInt16ArraySuite, isNotInt16ArraySuite} from './cores/typed-arrays/isInt16Array.bench.js'
import {isFloat64ArraySuite, isNotFloat64ArraySuite} from './cores/typed-arrays/isFloat64Array.bench.js'
import {isFloat32ArraySuite, isNotFloat32ArraySuite} from './cores/typed-arrays/isFloat32Array.bench.js'
import {isBigUint64ArraySuite, isNotBigUint64ArraySuite} from './cores/typed-arrays/isBigUint64Array.bench.js'
import {isBigInt64ArraySuite, isNotBigInt64ArraySuite} from './cores/typed-arrays/isBigInt64Array.bench.js'
import {isArrayBufferSuite, isNotArrayBufferSuite} from './cores/typed-arrays/isArrayBuffer.bench.js'
import {isSymbolSuite, isNotSymbolSuite} from './cores/symbols/isSymbol.bench.js'
import {isStringSuite, isNotStringSuite} from './cores/strings/isString.bench.js'
import {isEmptyStringSuite, isNotEmptyStringSuite} from './cores/strings/isEmptyString.bench.js'
import {isBlankStringSuite, isNotBlankStringSuite} from './cores/strings/isBlankString.bench.js'
import {isObjectSuite, isNotObjectSuite} from './cores/objects/isObject.bench.js'
import {isEmptyObjectSuite, isNotEmptyObjectSuite} from './cores/objects/isEmptyObject.bench.js'
import {isZeroSuite, isZeroPositiveSuite, isZeroNegativeSuite} from './cores/numbers/isZero.bench.js'
import {isMaxSafeIntegerSuite, isMinSafeIntegerSuite} from './cores/numbers/isSafeInteger.bench.js'
import {isNumberSuite, isNumberPositiveSuite, isNumberNegativeSuite, isNotNumberSuite, isIntegerSuite, isFloatSuite, isNaNSuite} from './cores/numbers/isNumber.bench.js'
import {isMinPositiveSuite, isMinNegativeSuite} from './cores/numbers/isMin.bench.js'
import {isMaxPositiveSuite, isMaxNegativeSuite} from './cores/numbers/isMax.bench.js'
import {isInfiniteNegativeSuite, isInfinitePositiveSuite, isInfiniteSuite, isFiniteSuite} from './cores/numbers/isInfinite.bench.js'
import {isFunctionSuite, isNotFunctionSuite} from './cores/functions/isFunction.bench.js'
import {isTrueSuite, isFalseSuite} from './cores/booleans/isTrue.bench.js'
import {isBooleanSuite, isNotBooleanSuite} from './cores/booleans/isBoolean.bench.js'
import {isEmptyArraySuite, isNotEmptyArraySuite} from './cores/arrays/isEmptyArray.bench.js'
import {isArrayOfUndefinedSuite, isNotArrayOfUndefinedSuite} from './cores/arrays/isArrayOfUndefined.bench.js'
import {isArrayOfStringSuite, isNotArrayOfStringSuite} from './cores/arrays/isArrayOfString.bench.js'
import {isArrayOfSingleElementSuite} from './cores/arrays/isArrayOfSingleElement.bench.js'
import {isArrayOfObjectSuite, isNotArrayOfObjectSuite} from './cores/arrays/isArrayOfObject.bench.js'
import {isArrayOfNumberSuite, isNotArrayOfNumberSuite} from './cores/arrays/isArrayOfNumber.bench.js'
import {isArrayOfNullSuite, isNotArrayOfNullSuite} from './cores/arrays/isArrayOfNull.bench.js'
import {isArrayOfMultiElementSuite} from './cores/arrays/isArrayOfMultiElement.bench.js'
import {isArrayOfFunctionSuite, isNotArrayOfFunctionSuite} from './cores/arrays/isArrayOfFunction.bench.js'
import {isArrayOfBooleanSuite, isNotArrayOfBooleanSuite} from './cores/arrays/isArrayOfBoolean.bench.js'
import {isArrayOfArraySuite, isNotArrayOfArraySuite} from './cores/arrays/isArrayOfArray.bench.js'
import {isArraySuite, isNotArraySuite} from './cores/arrays/isArray.bench.js'

const suites = [
	isTemperatureSuite,
	isNotTemperatureSuite,
	isKelvinSuite,
	isNotKelvinSuite,
	isFahrenheitSuite,
	isNotFahrenheitSuite,
	isCelsiusSuite,
	isNotCelsiusSuite,
	isValidSymbolicLinkPathSuite,
	isInvalidSymbolicLinkPathSuite,
	isSymbolicLinkPathSuite,
	isNotSymbolicLinkPathSuite,
	isValidSocketPathSuite,
	isInvalidSocketPathSuite,
	isSocketPathSuite,
	isNotSocketPathSuite,
	isValidPathSuite,
	isInvalidPathSuite,
	isValidFilePathSuite,
	isInvalidFilePathSuite,
	isFilePathSuite,
	isNotFilePathSuite,
	isEmptyFileSuite,
	isNotEmptyFileSuite,
	isValidFIFOPathSuite,
	isInvalidFIFOPathSuite,
	isFIFOPathSuite,
	isNotFIFOPathSuite,
	isValidDirectoryPathSuite,
	isInvalidDirectoryPathSuite,
	isEmptyDirectorySuite,
	isNotEmptyDirectorySuite,
	isDirectoryPathSuite,
	isNotDirectoryPathSuite,
	isValidCharacterDevicePathSuite,
	isInvalidCharacterDevicePathSuite,
	isCharacterDevicePathSuite,
	isNotCharacterDevicePathSuite,
	isValidBlockDevicePathSuite,
	isInvalidBlockDevicePathSuite,
	isBlockDevicePathSuite,
	isNotBlockDevicePathSuite,
	isEventTargetSuite,
	isNotEventTargetSuite,
	isUndefinedSuite,
	isNotUndefinedSuite,
	isNullSuite,
	isNotNullSuite,
	isEmptySuite,
	isNotEmptySuite,
	isDefinedSuite,
	isNotDefinedSuite,
	isUint8ClampedArraySuite,
	isNotUint8ClampedArraySuite,
	isUint8ArraySuite,
	isNotUint8ArraySuite,
	isUint32ArraySuite,
	isNotUint32ArraySuite,
	isUint16ArraySuite,
	isNotUint16ArraySuite,
	isInt8ArraySuite,
	isNotInt8ArraySuite,
	isInt32ArraySuite,
	isNotInt32ArraySuite,
	isInt16ArraySuite,
	isNotInt16ArraySuite,
	isFloat64ArraySuite,
	isNotFloat64ArraySuite,
	isFloat32ArraySuite,
	isNotFloat32ArraySuite,
	isBigUint64ArraySuite,
	isNotBigUint64ArraySuite,
	isBigInt64ArraySuite,
	isNotBigInt64ArraySuite,
	isArrayBufferSuite,
	isNotArrayBufferSuite,
	isSymbolSuite,
	isNotSymbolSuite,
	isStringSuite,
	isNotStringSuite,
	isEmptyStringSuite,
	isNotEmptyStringSuite,
	isBlankStringSuite,
	isNotBlankStringSuite,
	isObjectSuite,
	isNotObjectSuite,
	isEmptyObjectSuite,
	isNotEmptyObjectSuite,
	isZeroSuite,
	isZeroPositiveSuite,
	isZeroNegativeSuite,
	isMaxSafeIntegerSuite,
	isMinSafeIntegerSuite,
	isNumberSuite,
	isNumberPositiveSuite,
	isNumberNegativeSuite,
	isNotNumberSuite,
	isIntegerSuite,
	isFloatSuite,
	isNaNSuite,
	isMinPositiveSuite,
	isMinNegativeSuite,
	isMaxPositiveSuite,
	isMaxNegativeSuite,
	isInfiniteNegativeSuite,
	isInfinitePositiveSuite,
	isInfiniteSuite,
	isFiniteSuite,
	isFunctionSuite,
	isNotFunctionSuite,
	isTrueSuite,
	isFalseSuite,
	isBooleanSuite,
	isNotBooleanSuite,
	isEmptyArraySuite,
	isNotEmptyArraySuite,
	isArrayOfUndefinedSuite,
	isNotArrayOfUndefinedSuite,
	isArrayOfStringSuite,
	isNotArrayOfStringSuite,
	isArrayOfSingleElementSuite,
	isArrayOfObjectSuite,
	isNotArrayOfObjectSuite,
	isArrayOfNumberSuite,
	isNotArrayOfNumberSuite,
	isArrayOfNullSuite,
	isNotArrayOfNullSuite,
	isArrayOfMultiElementSuite,
	isArrayOfFunctionSuite,
	isNotArrayOfFunctionSuite,
	isArrayOfBooleanSuite,
	isNotArrayOfBooleanSuite,
	isArrayOfArraySuite,
	isNotArrayOfArraySuite,
	isArraySuite,
	isNotArraySuite
]

for ( const suite of suites ) {
	suite.run()
}
