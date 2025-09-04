import { expect }       from 'chai'
import { describe, it } from 'mocha'
//import { Testing }      from 'itee-utils/sources/testings/benchmarks'
import { Testing }      from 'itee-utils'
import * as isFloat32ArrayNamespace from '../../../../sources/cores/typed-arrays/isFloat32Array.js'

function isFloat32ArrayUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'isFloat32ArrayUnits', () => {

		describe( 'isFloat32Array()', () => {

			it( 'is bundlable', () => {

				expect(isFloat32ArrayNamespace.isFloat32Array).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isFloat32ArrayNamespace.isFloat32Array( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

		describe( 'isNotFloat32Array()', () => {

			it( 'is bundlable', () => {

				expect(isFloat32ArrayNamespace.isNotFloat32Array).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isFloat32ArrayNamespace.isNotFloat32Array( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

	} )

}

export { isFloat32ArrayUnits }

