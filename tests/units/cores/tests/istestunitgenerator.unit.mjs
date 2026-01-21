import { expect }       from 'chai'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'
import * as istestunitgeneratorNamespace from '../../../../sources/cores/tests/isTestUnitGenerator.js'

const Testing   = await getTestingPackage()

describe( 'istestunitgeneratorUnits', function () {

	let _dataMap
	before( function() {
		_dataMap = Testing.createDataMap()
	} )

	describe( 'noParamNoReturn()', function () {

		it( 'should be bundlable', async function () {

			expect(istestunitgeneratorNamespace.noParamNoReturn).to.exist

		} )

		it( 'should return undefined value on call', async function () {

			const result = istestunitgeneratorNamespace.noParamNoReturn()
			expect(result).to.be.a('undefined')

		} )

	} )

	describe( 'noParamOneReturn()', function () {

		it( 'should be bundlable', async function () {

			expect(istestunitgeneratorNamespace.noParamOneReturn).to.exist

		} )

		it( 'should return value of type number', async function() {

			const result = istestunitgeneratorNamespace.noParamOneReturn()
			expect(result).to.be.a('number')

		} )

	} )

	describe( 'noParamTwoReturn()', function () {

		it( 'should be bundlable', async function () {

			expect(istestunitgeneratorNamespace.noParamTwoReturn).to.exist

		} )

		it( 'should return value where type is string or number', async function() {

			const result = istestunitgeneratorNamespace.noParamTwoReturn()
			const resultType = (result === null) ? 'null' : typeof result
			expect(resultType).to.be.oneOf(['string','number'])

		} )

	} )

	describe( 'oneParamNoReturn()', function () {

		it( 'should be bundlable', async function () {

			expect(istestunitgeneratorNamespace.oneParamNoReturn).to.exist

		} )

		it( 'should return undefined value when paramA is of type string', async function() {

			const dataSet0 = _dataMap[ 'strings' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
				const result = istestunitgeneratorNamespace.oneParamNoReturn( dataSetValue0 )
				expect(result).to.be.a('undefined')
			}

		} )

	} )

	describe( 'oneParamOneReturn()', function () {

		it( 'should be bundlable', async function () {

			expect(istestunitgeneratorNamespace.oneParamOneReturn).to.exist

		} )

		it( 'should return value of type boolean when theParam is of type number', async function() {

			const dataSet0 = _dataMap[ 'numbers' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
				const result = istestunitgeneratorNamespace.oneParamOneReturn( dataSetValue0 )
				expect(result).to.be.a('boolean')
			}

		} )

	} )

	describe( 'oneParamTwoReturn()', function () {

		it( 'should be bundlable', async function () {

			expect(istestunitgeneratorNamespace.oneParamTwoReturn).to.exist

		} )

		it( 'should return value of type null or number when paramA is of type number', async function() {

			const dataSet0 = _dataMap[ 'numbers' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
					const result = istestunitgeneratorNamespace.oneParamTwoReturn( dataSetValue0 )
					const resultType = (result === null) ? 'null' : typeof result
					expect(resultType).to.be.oneOf(['null','number'])
			}

		} )

	} )

	describe( 'twoParamNoReturn()', function () {

		it( 'should be bundlable', async function () {

			expect(istestunitgeneratorNamespace.twoParamNoReturn).to.exist

		} )

		it( 'should return undefined value when paramA is of type string and paramB is of type number', async function() {

			const dataSet0 = _dataMap[ 'strings' ]
			const dataSet1 = _dataMap[ 'numbers' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]

				for ( let key1 in dataSet1 ) {
					const dataSetValue1 = dataSet1[ key1 ]
					const result = istestunitgeneratorNamespace.twoParamNoReturn( dataSetValue0, dataSetValue1 )
					expect(result).to.be.a('undefined')
				}
			}

		} )

	} )

	describe( 'twoParamOneReturn()', function () {

		it( 'should be bundlable', async function () {

			expect(istestunitgeneratorNamespace.twoParamOneReturn).to.exist

		} )

		it( 'should return value of type string when paramA is of type string and paramB is of type number', async function() {

			const dataSet0 = _dataMap[ 'strings' ]
			const dataSet1 = _dataMap[ 'numbers' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]

				for ( let key1 in dataSet1 ) {
					const dataSetValue1 = dataSet1[ key1 ]
					const result = istestunitgeneratorNamespace.twoParamOneReturn( dataSetValue0, dataSetValue1 )
					expect(result).to.be.a('string')
				}
			}

		} )

	} )

	describe( 'twoParamTwoReturn()', function () {

		it( 'should be bundlable', async function () {

			expect(istestunitgeneratorNamespace.twoParamTwoReturn).to.exist

		} )

		it( 'should return value of type string or number when paramA is of type number and paramB is of type string', async function() {

			const dataSet0 = _dataMap[ 'numbers' ]
				const dataSet1 = _dataMap[ 'strings' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]

				for ( let key1 in dataSet1 ) {
					const dataSetValue1 = dataSet1[ key1 ]
						const result = istestunitgeneratorNamespace.twoParamTwoReturn( dataSetValue0, dataSetValue1 )
						const resultType = (result === null) ? 'null' : typeof result
						expect(resultType).to.be.oneOf(['string','number'])
				}
			}

		} )

	} )

	describe( 'anyParamOneReturn()', function () {

		it( 'should be bundlable', async function () {

			expect(istestunitgeneratorNamespace.anyParamOneReturn).to.exist

		} )

		it( 'should return value of type boolean when any is of any type', async function() {

			const dataMap0 = _dataMap
			for ( let dataSetKey0 in dataMap0 ) {
				const dataSet0 = dataMap0[ dataSetKey0 ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = istestunitgeneratorNamespace.anyParamOneReturn( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}
			}

		} )

	} )

} )
