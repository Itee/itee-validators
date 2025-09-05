import { expect }       from 'chai'
import { beforeEach, afterEach, describe, it } from 'mocha'
import { Testing }      from 'itee-utils'
import * as isSafeIntegerNamespace from '../../../../sources/cores/numbers/isSafeInteger.js'

function isSafeIntegerUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'isSafeIntegerUnits', () => {

		describe( 'isMaxSafeInteger()', () => {

			it( 'is bundlable', () => {

				expect(isSafeIntegerNamespace.isMaxSafeInteger).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isSafeIntegerNamespace.isMaxSafeInteger( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

		describe( 'isMinSafeInteger()', () => {

			it( 'is bundlable', () => {

				expect(isSafeIntegerNamespace.isMinSafeInteger).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isSafeIntegerNamespace.isMinSafeInteger( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

	} )

}

export { isSafeIntegerUnits }

