import {isTemperatureSuite, isNotTemperatureSuite} from './physics/temperatures/istemperature.bench.js'
import {isKelvinSuite, isNotKelvinSuite} from './physics/temperatures/iskelvin.bench.js'
import {isFahrenheitSuite, isNotFahrenheitSuite} from './physics/temperatures/isfahrenheit.bench.js'
import {isCelsiusSuite, isNotCelsiusSuite} from './physics/temperatures/iscelsius.bench.js'
import {isValidSymbolicLinkPathSuite, isInvalidSymbolicLinkPathSuite} from './file-system/symbolic-links/isvalidsymboliclinkpath.bench.js'
import {isSymbolicLinkPathSuite, isNotSymbolicLinkPathSuite} from './file-system/symbolic-links/issymboliclinkpath.bench.js'
import {isValidSocketPathSuite, isInvalidSocketPathSuite} from './file-system/sockets/isvalidsocketpath.bench.js'
import {isSocketPathSuite, isNotSocketPathSuite} from './file-system/sockets/issocketpath.bench.js'
import {isValidPathSuite, isInvalidPathSuite} from './file-system/paths/isvalidpath.bench.js'
import {isValidFilePathSuite, isInvalidFilePathSuite} from './file-system/files/isvalidfilepath.bench.js'
import {isFilePathSuite, isNotFilePathSuite} from './file-system/files/isfilepath.bench.js'
import {isEmptyFileSuite, isNotEmptyFileSuite} from './file-system/files/isemptyfile.bench.js'
import {isValidFIFOPathSuite, isInvalidFIFOPathSuite} from './file-system/fifo-pipes/isvalidfifopath.bench.js'
import {isFIFOPathSuite, isNotFIFOPathSuite} from './file-system/fifo-pipes/isfifopath.bench.js'
import {isValidDirectoryPathSuite, isInvalidDirectoryPathSuite} from './file-system/directories/isvaliddirectorypath.bench.js'
import {isEmptyDirectorySuite, isNotEmptyDirectorySuite} from './file-system/directories/isemptydirectory.bench.js'
import {isDirectoryPathSuite, isNotDirectoryPathSuite} from './file-system/directories/isdirectorypath.bench.js'
import {isValidCharacterDevicePathSuite, isInvalidCharacterDevicePathSuite} from './file-system/character-devices/isvalidcharacterdevicepath.bench.js'
import {isCharacterDevicePathSuite, isNotCharacterDevicePathSuite} from './file-system/character-devices/ischaracterdevicepath.bench.js'
import {isValidBlockDevicePathSuite, isInvalidBlockDevicePathSuite} from './file-system/block-devices/isvalidblockdevicepath.bench.js'
import {isBlockDevicePathSuite, isNotBlockDevicePathSuite} from './file-system/block-devices/isblockdevicepath.bench.js'
import {isEventTargetSuite, isNotEventTargetSuite} from './dom/iseventtarget.bench.js'
import {isUndefinedSuite, isNotUndefinedSuite} from './cores/voids/isundefined.bench.js'
import {isNullSuite, isNotNullSuite} from './cores/voids/isnull.bench.js'
import {isEmptySuite, isNotEmptySuite} from './cores/voids/isempty.bench.js'
import {isDefinedSuite, isNotDefinedSuite} from './cores/voids/isdefined.bench.js'
import {isUint8ClampedArraySuite, isNotUint8ClampedArraySuite} from './cores/typed-arrays/isuint8clampedarray.bench.js'
import {isUint8ArraySuite, isNotUint8ArraySuite} from './cores/typed-arrays/isuint8array.bench.js'
import {isUint32ArraySuite, isNotUint32ArraySuite} from './cores/typed-arrays/isuint32array.bench.js'
import {isUint16ArraySuite, isNotUint16ArraySuite} from './cores/typed-arrays/isuint16array.bench.js'
import {isInt8ArraySuite, isNotInt8ArraySuite} from './cores/typed-arrays/isint8array.bench.js'
import {isInt32ArraySuite, isNotInt32ArraySuite} from './cores/typed-arrays/isint32array.bench.js'
import {isInt16ArraySuite, isNotInt16ArraySuite} from './cores/typed-arrays/isint16array.bench.js'
import {isFloat64ArraySuite, isNotFloat64ArraySuite} from './cores/typed-arrays/isfloat64array.bench.js'
import {isFloat32ArraySuite, isNotFloat32ArraySuite} from './cores/typed-arrays/isfloat32array.bench.js'
import {isBigUint64ArraySuite, isNotBigUint64ArraySuite} from './cores/typed-arrays/isbiguint64array.bench.js'
import {isBigInt64ArraySuite, isNotBigInt64ArraySuite} from './cores/typed-arrays/isbigint64array.bench.js'
import {isArrayBufferSuite, isNotArrayBufferSuite} from './cores/typed-arrays/isarraybuffer.bench.js'
import {isSymbolSuite, isNotSymbolSuite} from './cores/symbols/issymbol.bench.js'
import {isStringSuite, isNotStringSuite} from './cores/strings/isstring.bench.js'
import {isEmptyStringSuite, isNotEmptyStringSuite} from './cores/strings/isemptystring.bench.js'
import {isBlankStringSuite, isNotBlankStringSuite} from './cores/strings/isblankstring.bench.js'
import {isObjectSuite, isNotObjectSuite} from './cores/objects/isobject.bench.js'
import {isEmptyObjectSuite, isNotEmptyObjectSuite} from './cores/objects/isemptyobject.bench.js'
import {isZeroSuite, isZeroPositiveSuite, isZeroNegativeSuite} from './cores/numbers/iszero.bench.js'
import {isMaxSafeIntegerSuite, isMinSafeIntegerSuite} from './cores/numbers/issafeinteger.bench.js'
import {isNumberSuite, isNumberPositiveSuite, isNumberNegativeSuite, isNotNumberSuite, isIntegerSuite, isFloatSuite, isNaNSuite} from './cores/numbers/isnumber.bench.js'
import {isMinPositiveSuite, isMinNegativeSuite} from './cores/numbers/ismin.bench.js'
import {isMaxPositiveSuite, isMaxNegativeSuite} from './cores/numbers/ismax.bench.js'
import {isInfiniteNegativeSuite, isInfinitePositiveSuite, isInfiniteSuite, isFiniteSuite} from './cores/numbers/isinfinite.bench.js'
import {isFunctionSuite, isNotFunctionSuite} from './cores/functions/isfunction.bench.js'
import {isTrueSuite, isFalseSuite} from './cores/booleans/istrue.bench.js'
import {isBooleanSuite, isNotBooleanSuite} from './cores/booleans/isboolean.bench.js'
import {isEmptyArraySuite, isNotEmptyArraySuite} from './cores/arrays/isemptyarray.bench.js'
import {isArrayOfUndefinedSuite, isNotArrayOfUndefinedSuite} from './cores/arrays/isarrayofundefined.bench.js'
import {isArrayOfStringSuite, isNotArrayOfStringSuite} from './cores/arrays/isarrayofstring.bench.js'
import {isArrayOfSingleElementSuite} from './cores/arrays/isarrayofsingleelement.bench.js'
import {isArrayOfObjectSuite, isNotArrayOfObjectSuite} from './cores/arrays/isarrayofobject.bench.js'
import {isArrayOfNumberSuite, isNotArrayOfNumberSuite} from './cores/arrays/isarrayofnumber.bench.js'
import {isArrayOfNullSuite, isNotArrayOfNullSuite} from './cores/arrays/isarrayofnull.bench.js'
import {isArrayOfMultiElementSuite} from './cores/arrays/isarrayofmultielement.bench.js'
import {isArrayOfFunctionSuite, isNotArrayOfFunctionSuite} from './cores/arrays/isarrayoffunction.bench.js'
import {isArrayOfBooleanSuite, isNotArrayOfBooleanSuite} from './cores/arrays/isarrayofboolean.bench.js'
import {isArrayOfArraySuite, isNotArrayOfArraySuite} from './cores/arrays/isarrayofarray.bench.js'
import {isArraySuite, isNotArraySuite} from './cores/arrays/isarray.bench.js'

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
