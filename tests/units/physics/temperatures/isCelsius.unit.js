import { expect }       from 'chai'
import { describe, it } from 'mocha'
import { Testing }      from 'itee-utils'
import * as isCelsiusNamespace from '../../../../sources/physics/temperatures/isCelsius.js'

function isCelsiusUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'isCelsiusUnits', () => {

	} )

}

export { isCelsiusUnits }

