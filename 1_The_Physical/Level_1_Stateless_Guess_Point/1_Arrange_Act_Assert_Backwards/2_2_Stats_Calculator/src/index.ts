export const calculateStats = (numbers: number[]) => {
    return {
      avrg: numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length,
      length: numbers.length
    }
}