import { expect }       from 'chai'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'
import * as isint32arrayNamespace from '../../../../sources/cores/typed-arrays/isInt32Array.js'

const Testing   = await getTestingPackage()

describe( 'isint32arrayUnits', function () {

	let _dataMap
	before( function() {
		_dataMap = Testing.createDataMap()
	} )

	describe( 'isInt32Array()', function () {

		it( 'should be bundlable', async function () {

			expect(isint32arrayNamespace.isInt32Array).to.exist

		} )

		it( 'should return value of type boolean when data is of any type', async function() {

			const dataMap0 = _dataMap
			for ( let dataSetKey0 in dataMap0 ) {
				const dataSet0 = dataMap0[ dataSetKey0 ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isint32arrayNamespace.isInt32Array( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}
			}

		} )

	} )

	describe( 'isNotInt32Array()', function () {

		it( 'should be bundlable', async function () {

			expect(isint32arrayNamespace.isNotInt32Array).to.exist

		} )

		it( 'should return value of type boolean when data is of any type', async function() {

			const dataMap0 = _dataMap
			for ( let dataSetKey0 in dataMap0 ) {
				const dataSet0 = dataMap0[ dataSetKey0 ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isint32arrayNamespace.isNotInt32Array( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}
			}

		} )

	} )

} )
