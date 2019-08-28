const gigaSecondsInMilliSeconds = Math.pow(10, 12)

export const gigasecond = date => new Date(date.getTime() + gigaSecondsInMilliSeconds)
