


function celsiusToFahrenheit(celsius) {
            return (celsius * 9/5) + 32;
        }
        
        function celsiusToKelvin(celsius) {
            return celsius + 273.15;
        }
        
        function fahrenheitToCelsius(fahrenheit) {
            return (fahrenheit - 32) * 5/9;
        }        
        function kelvinToCelsius(kelvin) {
            return kelvin - 273.15;
        }
        
        // Convert temperature from one unit to another
        function convertTemperature(temp, fromUnit, toUnit) {
            if (fromUnit === toUnit) return temp;
            
            // First convert to Celsius as base
            let celsius;
            if (fromUnit === 'metric') celsius = temp;
            else if (fromUnit === 'imperial') celsius = fahrenheitToCelsius(temp);
            else if (fromUnit === 'standard') celsius = kelvinToCelsius(temp);
            
            // Then convert from Celsius to target unit
            if (toUnit === 'metric') return celsius;
            else if (toUnit === 'imperial') return celsiusToFahrenheit(celsius);
            else if (toUnit === 'standard') return celsiusToKelvin(celsius);
        }