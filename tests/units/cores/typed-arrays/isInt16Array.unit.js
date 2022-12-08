import { expect }       from 'chai'
import { describe, it } from 'mocha'
import { Testing }      from 'itee-utils'
import * as isInt16ArrayNamespace from '../../../../sources/cores/typed-arrays/isInt16Array.js'

function isInt16ArrayUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'isInt16ArrayUnits', () => {

		describe( 'isInt16Array()', () => {

			it( 'is bundlable', () => {

				expect(isInt16ArrayNamespace.isInt16Array).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isInt16ArrayNamespace.isInt16Array( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

		describe( 'isNotInt16Array()', () => {

			it( 'is bundlable', () => {

				expect(isInt16ArrayNamespace.isNotInt16Array).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isInt16ArrayNamespace.isNotInt16Array( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

	} )

}

export { isInt16ArrayUnits }

