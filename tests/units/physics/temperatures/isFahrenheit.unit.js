import { expect }       from 'chai'
import { describe, it } from 'mocha'
import { Testing }      from 'itee-utils'
import * as isFahrenheitNamespace from '../../../../sources/physics/temperatures/isFahrenheit.js'

function isFahrenheitUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'isFahrenheitUnits', () => {

	} )

}

export { isFahrenheitUnits }

