export function formatTime(timeInteger) {
  
    const date = new Date(timeInteger)
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    return [
      `${hours < 10 ? `0${hours}` : hours }`,
      `${minutes < 10 ? `0${minutes}` : minutes }`,
      `${seconds < 10 ? `0${seconds}` : seconds }`
    ].join(':')
}