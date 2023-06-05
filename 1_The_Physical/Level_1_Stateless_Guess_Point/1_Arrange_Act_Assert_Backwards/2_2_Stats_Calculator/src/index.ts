export const calculateStats = (numbers: number[]) => {

    if (numbers.length === 0) {
        return {
            min: undefined,
            max: undefined
        }
    }

    return {
      avrg: numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length,
      length: numbers.length,
      min: numbers.sort()[0],
      max: numbers.sort()[numbers.length - 1]
    }
}