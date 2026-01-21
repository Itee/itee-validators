import { expect }       from 'chai'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'
import * as isemptyNamespace from '../../../../sources/cores/voids/isEmpty.js'

const Testing   = await getTestingPackage()

describe( 'isemptyUnits', function () {

	let _dataMap
	before( function() {
		_dataMap = Testing.createDataMap()
	} )

	describe( 'isEmpty()', function () {

		it( 'should be bundlable', async function () {

			expect(isemptyNamespace.isEmpty).to.exist

		} )

		it( 'should return value of type boolean when data is of any type', async function() {

			const dataMap0 = _dataMap
			for ( let dataSetKey0 in dataMap0 ) {
				const dataSet0 = dataMap0[ dataSetKey0 ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isemptyNamespace.isEmpty( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}
			}

		} )

	} )

	describe( 'isNotEmpty()', function () {

		it( 'should be bundlable', async function () {

			expect(isemptyNamespace.isNotEmpty).to.exist

		} )

		it( 'should return value of type boolean when data is of any type', async function() {

			const dataMap0 = _dataMap
			for ( let dataSetKey0 in dataMap0 ) {
				const dataSet0 = dataMap0[ dataSetKey0 ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isemptyNamespace.isNotEmpty( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}
			}

		} )

	} )

} )
