/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global describe, beforeEach, afterEach */

import { TestsUtils }         from '../../../utils/itee-validators.tests-utils.js'
import { isCelsiusUnits }     from './isCelsius.units'
import { isFahrenheitUnits }  from './isFahrenheit.units'
import { isKelvinUnits }      from './isKelvin.units'
import { isTemperatureUnits } from './isTemperature.units'

function _temperaturesUnits () {

    describe( 'Temperatures', () => {

        beforeEach( () => {

            this._dataMap = TestsUtils.createDataMap()

        } )

        afterEach( () => {

            delete this._dataMap

        } )

        isCelsiusUnits.call( this )
        isFahrenheitUnits.call( this )
        isKelvinUnits.call( this )
        isTemperatureUnits.call( this )

    } )

}

export { _temperaturesUnits }

