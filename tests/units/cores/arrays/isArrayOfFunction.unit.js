import { expect }       from 'chai'
import { describe, it } from 'mocha'
//import { Testing }      from 'itee-utils/sources/testings/benchmarks'
import { Testing }      from 'itee-utils'
import * as isArrayOfFunctionNamespace from '../../../../sources/cores/arrays/isArrayOfFunction.js'

function isArrayOfFunctionUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'isArrayOfFunctionUnits', () => {

		describe( 'isArrayOfFunction()', () => {

			it( 'is bundlable', () => {

				expect(isArrayOfFunctionNamespace.isArrayOfFunction).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isArrayOfFunctionNamespace.isArrayOfFunction( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

		describe( 'isNotArrayOfFunction()', () => {

			it( 'is bundlable', () => {

				expect(isArrayOfFunctionNamespace.isNotArrayOfFunction).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isArrayOfFunctionNamespace.isNotArrayOfFunction( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

	} )

}

export { isArrayOfFunctionUnits }

