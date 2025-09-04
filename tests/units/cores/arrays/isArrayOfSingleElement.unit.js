import { expect }       from 'chai'
import { describe, it } from 'mocha'
import { Testing }      from 'itee-utils/sources/testings/benchmarks'
//import { Testing }      from 'itee-utils'
import * as isArrayOfSingleElementNamespace from '../../../../sources/cores/arrays/isArrayOfSingleElement.js'

function isArrayOfSingleElementUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'isArrayOfSingleElementUnits', () => {

		describe( 'isArrayOfSingleElement()', () => {

			it( 'is bundlable', () => {

				expect(isArrayOfSingleElementNamespace.isArrayOfSingleElement).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isArrayOfSingleElementNamespace.isArrayOfSingleElement( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

	} )

}

export { isArrayOfSingleElementUnits }

