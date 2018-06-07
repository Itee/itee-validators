/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global describe, beforeEach, afterEach */

import { createDataSet } from '../../../TestsUtils'
import { isCelsiusUnits } from './isCelsius.units'
import { isFahrenheitUnits } from './isFahrenheit.units'
import { isKelvinUnits } from './isKelvin.units'
import { isNotCelsiusUnits } from './isNotCelsius.units'
import { isNotFahrenheitUnits } from './isNotFahrenheit.units'
import { isNotKelvinUnits } from './isNotKelvin.units'
import { isNotTemperatureUnits } from './isNotTemperature.units'
import { isTemperatureUnits } from './isTemperature.units'

function TemperaturesUnits () {

    describe( 'Temperatures', () => {

        beforeEach( () => {

            this._dataSet = createDataSet()

        } )

        afterEach( () => {

            delete this._dataSet

        } )

        isCelsiusUnits.call( this )
        isFahrenheitUnits.call( this )
        isKelvinUnits.call( this )
        isNotCelsiusUnits.call( this )
        isNotFahrenheitUnits.call( this )
        isNotKelvinUnits.call( this )
        isNotTemperatureUnits.call( this )
        isTemperatureUnits.call( this )

    } )

}

export { TemperaturesUnits }

