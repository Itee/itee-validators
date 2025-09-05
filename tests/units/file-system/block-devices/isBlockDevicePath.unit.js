import { expect }       from 'chai'
import { beforeEach, afterEach, describe, it } from 'mocha'
import { Testing }      from 'itee-utils'
import * as isBlockDevicePathNamespace from '../../../../sources/file-system/block-devices/isBlockDevicePath.js'


function isBlockDevicePathUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'isBlockDevicePathUnits', () => {

		describe( 'isBlockDevicePath()', () => {

			it( 'is bundlable', () => {

				expect(isBlockDevicePathNamespace.isBlockDevicePath).to.exist

			} )

			it( 'return type is boolean when path is of type string', () => {

				const dataSet0 = this._dataMap[ 'strings' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isBlockDevicePathNamespace.isBlockDevicePath( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}

			} )

		} )

		describe( 'isNotBlockDevicePath()', () => {

			it( 'is bundlable', () => {

				expect(isBlockDevicePathNamespace.isNotBlockDevicePath).to.exist

			} )

			it( 'return type is boolean when path is of type string', () => {

				const dataSet0 = this._dataMap[ 'strings' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isBlockDevicePathNamespace.isNotBlockDevicePath( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}

			} )

		} )

	} )

}

export { isBlockDevicePathUnits }

