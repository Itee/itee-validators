import { expect }       from 'chai'
import { describe, it } from 'mocha'
import { Testing }      from 'itee-utils/sources/testings/benchmarks'
//import { Testing }      from 'itee-utils'
import * as isBigUint64ArrayNamespace from '../../../../sources/cores/typed-arrays/isBigUint64Array.js'

function isBigUint64ArrayUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'isBigUint64ArrayUnits', () => {

		describe( 'isBigUint64Array()', () => {

			it( 'is bundlable', () => {

				expect(isBigUint64ArrayNamespace.isBigUint64Array).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isBigUint64ArrayNamespace.isBigUint64Array( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

		describe( 'isNotBigUint64Array()', () => {

			it( 'is bundlable', () => {

				expect(isBigUint64ArrayNamespace.isNotBigUint64Array).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isBigUint64ArrayNamespace.isNotBigUint64Array( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

	} )

}

export { isBigUint64ArrayUnits }

