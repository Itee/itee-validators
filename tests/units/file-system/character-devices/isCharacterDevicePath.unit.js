import { expect }       from 'chai'
import { beforeEach, afterEach, describe, it } from 'mocha'
import { Testing }      from 'itee-utils'
import * as isCharacterDevicePathNamespace from '../../../../sources/file-system/character-devices/isCharacterDevicePath.js'


function isCharacterDevicePathUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'isCharacterDevicePathUnits', () => {

		describe( 'isCharacterDevicePath()', () => {

			it( 'is bundlable', () => {

				expect(isCharacterDevicePathNamespace.isCharacterDevicePath).to.exist

			} )

			it( 'return type is boolean when path is of type string', () => {

				const dataSet0 = this._dataMap[ 'strings' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isCharacterDevicePathNamespace.isCharacterDevicePath( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}

			} )

		} )

		describe( 'isNotCharacterDevicePath()', () => {

			it( 'is bundlable', () => {

				expect(isCharacterDevicePathNamespace.isNotCharacterDevicePath).to.exist

			} )

			it( 'return type is boolean when path is of type string', () => {

				const dataSet0 = this._dataMap[ 'strings' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isCharacterDevicePathNamespace.isNotCharacterDevicePath( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}

			} )

		} )

	} )

}

export { isCharacterDevicePathUnits }

