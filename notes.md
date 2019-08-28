`````javascript
const gigaSecondsInMilliSecondsMilliSeconds = Math.pow(10, 12)

export const gigasecond = date => new Date(date.getTime() + gigaSecondsInMilliSeconds)
`````

* convert gigaseconds to milliseconds because JS references dates in milliseconds
  * Math.pow() returns the base to the exponent

* new Date() creates a new date object | we pass in an argument
  * date.getTime() creates a time stamp in milliseconds of the date parameter
    * adding the variable gigaSecondsInMilliSeconds adjusts the timestamp by 1 gigasecond
