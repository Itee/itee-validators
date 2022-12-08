import {isArraySuite, isNotArraySuite} from './cores/arrays/isArray.bench.js'
import {isArrayOfArraySuite, isNotArrayOfArraySuite} from './cores/arrays/isArrayOfArray.bench.js'
import {isArrayOfBooleanSuite, isNotArrayOfBooleanSuite} from './cores/arrays/isArrayOfBoolean.bench.js'
import {isArrayOfFunctionSuite, isNotArrayOfFunctionSuite} from './cores/arrays/isArrayOfFunction.bench.js'
import {isArrayOfMultiElementSuite} from './cores/arrays/isArrayOfMultiElement.bench.js'
import {isArrayOfNullSuite, isNotArrayOfNullSuite} from './cores/arrays/isArrayOfNull.bench.js'
import {isArrayOfNumberSuite, isNotArrayOfNumberSuite} from './cores/arrays/isArrayOfNumber.bench.js'
import {isArrayOfObjectSuite, isNotArrayOfObjectSuite} from './cores/arrays/isArrayOfObject.bench.js'
import {isArrayOfSingleElementSuite} from './cores/arrays/isArrayOfSingleElement.bench.js'
import {isArrayOfStringSuite, isNotArrayOfStringSuite} from './cores/arrays/isArrayOfString.bench.js'
import {isArrayOfUndefinedSuite, isNotArrayOfUndefinedSuite} from './cores/arrays/isArrayOfUndefined.bench.js'
import {isEmptyArraySuite, isNotEmptyArraySuite} from './cores/arrays/isEmptyArray.bench.js'
import {isBooleanSuite, isNotBooleanSuite} from './cores/booleans/isBoolean.bench.js'
import {isFalseSuite, isTrueSuite} from './cores/booleans/isTrue.bench.js'
import {isFunctionSuite, isNotFunctionSuite} from './cores/functions/isFunction.bench.js'
import {isFiniteSuite, isInfiniteSuite, isInfiniteNegativeSuite, isInfinitePositiveSuite} from './cores/numbers/isInfinite.bench.js'
import {isMaxNegativeSuite, isMaxPositiveSuite} from './cores/numbers/isMax.bench.js'
import {isMinNegativeSuite, isMinPositiveSuite} from './cores/numbers/isMin.bench.js'
import {isFloatSuite, isIntegerSuite, isNaNSuite, isNotNumberSuite, isNumberSuite, isNumberNegativeSuite, isNumberPositiveSuite} from './cores/numbers/isNumber.bench.js'
import {isMaxSafeIntegerSuite, isMinSafeIntegerSuite} from './cores/numbers/isSafeInteger.bench.js'
import {isZeroSuite, isZeroNegativeSuite, isZeroPositiveSuite} from './cores/numbers/isZero.bench.js'
import {isEmptyObjectSuite, isNotEmptyObjectSuite} from './cores/objects/isEmptyObject.bench.js'
import {isNotObjectSuite, isObjectSuite} from './cores/objects/isObject.bench.js'
import {isBlankStringSuite, isNotBlankStringSuite} from './cores/strings/isBlankString.bench.js'
import {isEmptyStringSuite, isNotEmptyStringSuite} from './cores/strings/isEmptyString.bench.js'
import {isNotStringSuite, isStringSuite} from './cores/strings/isString.bench.js'
import {isNotSymbolSuite, isSymbolSuite} from './cores/symbols/isSymbol.bench.js'
import {isArrayBufferSuite, isNotArrayBufferSuite} from './cores/typed-arrays/isArrayBuffer.bench.js'
import {isBigInt64ArraySuite, isNotBigInt64ArraySuite} from './cores/typed-arrays/isBigInt64Array.bench.js'
import {isBigUint64ArraySuite, isNotBigUint64ArraySuite} from './cores/typed-arrays/isBigUint64Array.bench.js'
import {isFloat32ArraySuite, isNotFloat32ArraySuite} from './cores/typed-arrays/isFloat32Array.bench.js'
import {isFloat64ArraySuite, isNotFloat64ArraySuite} from './cores/typed-arrays/isFloat64Array.bench.js'
import {isInt16ArraySuite, isNotInt16ArraySuite} from './cores/typed-arrays/isInt16Array.bench.js'
import {isInt32ArraySuite, isNotInt32ArraySuite} from './cores/typed-arrays/isInt32Array.bench.js'
import {isInt8ArraySuite, isNotInt8ArraySuite} from './cores/typed-arrays/isInt8Array.bench.js'
import {isNotUint16ArraySuite, isUint16ArraySuite} from './cores/typed-arrays/isUint16Array.bench.js'
import {isNotUint32ArraySuite, isUint32ArraySuite} from './cores/typed-arrays/isUint32Array.bench.js'
import {isNotUint8ArraySuite, isUint8ArraySuite} from './cores/typed-arrays/isUint8Array.bench.js'
import {isNotUint8ClampedArraySuite, isUint8ClampedArraySuite} from './cores/typed-arrays/isUint8ClampedArray.bench.js'
import {isDefinedSuite, isNotDefinedSuite} from './cores/voids/isDefined.bench.js'
import {isEmptySuite, isNotEmptySuite} from './cores/voids/isEmpty.bench.js'
import {isNotNullSuite, isNullSuite} from './cores/voids/isNull.bench.js'
import {isNotUndefinedSuite, isUndefinedSuite} from './cores/voids/isUndefined.bench.js'
import {isEventTargetSuite, isNotEventTargetSuite} from './dom/isEventTarget.bench.js'
import {isBlockDevicePathSuite, isNotBlockDevicePathSuite} from './file-system/block-devices/isBlockDevicePath.bench.js'
import {isInvalidBlockDevicePathSuite, isValidBlockDevicePathSuite} from './file-system/block-devices/isValidBlockDevicePath.bench.js'
import {isCharacterDevicePathSuite, isNotCharacterDevicePathSuite} from './file-system/character-devices/isCharacterDevicePath.bench.js'
import {isInvalidCharacterDevicePathSuite, isValidCharacterDevicePathSuite} from './file-system/character-devices/isValidCharacterDevicePath.bench.js'
import {isDirectoryPathSuite, isNotDirectoryPathSuite} from './file-system/directories/isDirectoryPath.bench.js'
import {isEmptyDirectorySuite, isNotEmptyDirectorySuite} from './file-system/directories/isEmptyDirectory.bench.js'
import {isInvalidDirectoryPathSuite, isValidDirectoryPathSuite} from './file-system/directories/isValidDirectoryPath.bench.js'
import {isFIFOPathSuite, isNotFIFOPathSuite} from './file-system/fifo-pipes/isFIFOPath.bench.js'
import {isInvalidFIFOPathSuite, isValidFIFOPathSuite} from './file-system/fifo-pipes/isValidFIFOPath.bench.js'
import {isEmptyFileSuite, isNotEmptyFileSuite} from './file-system/files/isEmptyFile.bench.js'
import {isFilePathSuite, isNotFilePathSuite} from './file-system/files/isFilePath.bench.js'
import {isInvalidFilePathSuite, isValidFilePathSuite} from './file-system/files/isValidFilePath.bench.js'
import {isInvalidPathSuite, isValidPathSuite} from './file-system/paths/isValidPath.bench.js'
import {isNotSocketPathSuite, isSocketPathSuite} from './file-system/sockets/isSocketPath.bench.js'
import {isInvalidSocketPathSuite, isValidSocketPathSuite} from './file-system/sockets/isValidSocketPath.bench.js'
import {isNotSymbolicLinkPathSuite, isSymbolicLinkPathSuite} from './file-system/symbolic-links/isSymbolicLinkPath.bench.js'
import {isInvalidSymbolicLinkPathSuite, isValidSymbolicLinkPathSuite} from './file-system/symbolic-links/isValidSymbolicLinkPath.bench.js'
import {isCelsiusSuite, isNotCelsiusSuite} from './physics/temperatures/isCelsius.bench.js'
import {isFahrenheitSuite, isNotFahrenheitSuite} from './physics/temperatures/isFahrenheit.bench.js'
import {isKelvinSuite, isNotKelvinSuite} from './physics/temperatures/isKelvin.bench.js'
import {isNotTemperatureSuite, isTemperatureSuite} from './physics/temperatures/isTemperature.bench.js'

const suites = [
	isArraySuite,
	isNotArraySuite,
	isArrayOfArraySuite,
	isNotArrayOfArraySuite,
	isArrayOfBooleanSuite,
	isNotArrayOfBooleanSuite,
	isArrayOfFunctionSuite,
	isNotArrayOfFunctionSuite,
	isArrayOfMultiElementSuite,
	isArrayOfNullSuite,
	isNotArrayOfNullSuite,
	isArrayOfNumberSuite,
	isNotArrayOfNumberSuite,
	isArrayOfObjectSuite,
	isNotArrayOfObjectSuite,
	isArrayOfSingleElementSuite,
	isArrayOfStringSuite,
	isNotArrayOfStringSuite,
	isArrayOfUndefinedSuite,
	isNotArrayOfUndefinedSuite,
	isEmptyArraySuite,
	isNotEmptyArraySuite,
	isBooleanSuite,
	isNotBooleanSuite,
	isFalseSuite,
	isTrueSuite,
	isFunctionSuite,
	isNotFunctionSuite,
	isFiniteSuite,
	isInfiniteSuite,
	isInfiniteNegativeSuite,
	isInfinitePositiveSuite,
	isMaxNegativeSuite,
	isMaxPositiveSuite,
	isMinNegativeSuite,
	isMinPositiveSuite,
	isFloatSuite,
	isIntegerSuite,
	isNaNSuite,
	isNotNumberSuite,
	isNumberSuite,
	isNumberNegativeSuite,
	isNumberPositiveSuite,
	isMaxSafeIntegerSuite,
	isMinSafeIntegerSuite,
	isZeroSuite,
	isZeroNegativeSuite,
	isZeroPositiveSuite,
	isEmptyObjectSuite,
	isNotEmptyObjectSuite,
	isNotObjectSuite,
	isObjectSuite,
	isBlankStringSuite,
	isNotBlankStringSuite,
	isEmptyStringSuite,
	isNotEmptyStringSuite,
	isNotStringSuite,
	isStringSuite,
	isNotSymbolSuite,
	isSymbolSuite,
	isArrayBufferSuite,
	isNotArrayBufferSuite,
	isBigInt64ArraySuite,
	isNotBigInt64ArraySuite,
	isBigUint64ArraySuite,
	isNotBigUint64ArraySuite,
	isFloat32ArraySuite,
	isNotFloat32ArraySuite,
	isFloat64ArraySuite,
	isNotFloat64ArraySuite,
	isInt16ArraySuite,
	isNotInt16ArraySuite,
	isInt32ArraySuite,
	isNotInt32ArraySuite,
	isInt8ArraySuite,
	isNotInt8ArraySuite,
	isNotUint16ArraySuite,
	isUint16ArraySuite,
	isNotUint32ArraySuite,
	isUint32ArraySuite,
	isNotUint8ArraySuite,
	isUint8ArraySuite,
	isNotUint8ClampedArraySuite,
	isUint8ClampedArraySuite,
	isDefinedSuite,
	isNotDefinedSuite,
	isEmptySuite,
	isNotEmptySuite,
	isNotNullSuite,
	isNullSuite,
	isNotUndefinedSuite,
	isUndefinedSuite,
	isEventTargetSuite,
	isNotEventTargetSuite,
	isBlockDevicePathSuite,
	isNotBlockDevicePathSuite,
	isInvalidBlockDevicePathSuite,
	isValidBlockDevicePathSuite,
	isCharacterDevicePathSuite,
	isNotCharacterDevicePathSuite,
	isInvalidCharacterDevicePathSuite,
	isValidCharacterDevicePathSuite,
	isDirectoryPathSuite,
	isNotDirectoryPathSuite,
	isEmptyDirectorySuite,
	isNotEmptyDirectorySuite,
	isInvalidDirectoryPathSuite,
	isValidDirectoryPathSuite,
	isFIFOPathSuite,
	isNotFIFOPathSuite,
	isInvalidFIFOPathSuite,
	isValidFIFOPathSuite,
	isEmptyFileSuite,
	isNotEmptyFileSuite,
	isFilePathSuite,
	isNotFilePathSuite,
	isInvalidFilePathSuite,
	isValidFilePathSuite,
	isInvalidPathSuite,
	isValidPathSuite,
	isNotSocketPathSuite,
	isSocketPathSuite,
	isInvalidSocketPathSuite,
	isValidSocketPathSuite,
	isNotSymbolicLinkPathSuite,
	isSymbolicLinkPathSuite,
	isInvalidSymbolicLinkPathSuite,
	isValidSymbolicLinkPathSuite,
	isCelsiusSuite,
	isNotCelsiusSuite,
	isFahrenheitSuite,
	isNotFahrenheitSuite,
	isKelvinSuite,
	isNotKelvinSuite,
	isNotTemperatureSuite,
	isTemperatureSuite
]

for ( const suite of suites ) {
	suite.run()
}
