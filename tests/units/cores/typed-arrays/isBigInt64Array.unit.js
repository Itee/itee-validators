import { expect }       from 'chai'
import { describe, it } from 'mocha'
//import { Testing }      from 'itee-utils/sources/testings/benchmarks'
import { Testing }      from 'itee-utils'
import * as isBigInt64ArrayNamespace from '../../../../sources/cores/typed-arrays/isBigInt64Array.js'

function isBigInt64ArrayUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'isBigInt64ArrayUnits', () => {

		describe( 'isBigInt64Array()', () => {

			it( 'is bundlable', () => {

				expect(isBigInt64ArrayNamespace.isBigInt64Array).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isBigInt64ArrayNamespace.isBigInt64Array( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

		describe( 'isNotBigInt64Array()', () => {

			it( 'is bundlable', () => {

				expect(isBigInt64ArrayNamespace.isNotBigInt64Array).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isBigInt64ArrayNamespace.isNotBigInt64Array( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

	} )

}

export { isBigInt64ArrayUnits }

