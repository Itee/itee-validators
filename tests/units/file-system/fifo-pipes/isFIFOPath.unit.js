import { expect }       from 'chai'
import { describe, it } from 'mocha'
//import { Testing }      from 'itee-utils/sources/testings/benchmarks'
import { Testing }      from 'itee-utils'
import * as isFIFOPathNamespace from '../../../../sources/file-system/fifo-pipes/isFIFOPath.js'

function isFIFOPathUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'isFIFOPathUnits', () => {

		describe( 'isFIFOPath()', () => {

			it( 'is bundlable', () => {

				expect(isFIFOPathNamespace.isFIFOPath).to.exist

			} )

			it( 'return type is boolean when path is of type string', () => {

				const dataSet0 = this._dataMap[ 'strings' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isFIFOPathNamespace.isFIFOPath( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}

			} )

		} )

		describe( 'isNotFIFOPath()', () => {

			it( 'is bundlable', () => {

				expect(isFIFOPathNamespace.isNotFIFOPath).to.exist

			} )

			it( 'return type is boolean when path is of type string', () => {

				const dataSet0 = this._dataMap[ 'strings' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isFIFOPathNamespace.isNotFIFOPath( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}

			} )

		} )

	} )

}

export { isFIFOPathUnits }

