import { expect }       from 'chai'
import { describe, it } from 'mocha'
import { Testing }      from 'itee-utils/sources/testings/benchmarks'
//import { Testing }      from 'itee-utils'
import * as isArrayOfNullNamespace from '../../../../sources/cores/arrays/isArrayOfNull.js'

function isArrayOfNullUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'isArrayOfNullUnits', () => {

		describe( 'isArrayOfNull()', () => {

			it( 'is bundlable', () => {

				expect(isArrayOfNullNamespace.isArrayOfNull).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isArrayOfNullNamespace.isArrayOfNull( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

		describe( 'isNotArrayOfNull()', () => {

			it( 'is bundlable', () => {

				expect(isArrayOfNullNamespace.isNotArrayOfNull).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isArrayOfNullNamespace.isNotArrayOfNull( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

	} )

}

export { isArrayOfNullUnits }

