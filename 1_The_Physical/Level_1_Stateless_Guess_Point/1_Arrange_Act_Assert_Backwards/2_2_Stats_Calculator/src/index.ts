export const calculateStats = (numbers: number[]) => {

    if (numbers.length === 0) {
        return {
            avrg: undefined,
            length: 0,
            min: undefined,
            max: undefined
        }
    }
    
    return {
      avrg: sum(numbers) / numbers.length,
      length: numbers.length,
      min: min(numbers),
      max: max(numbers)
    }
}

function min(numbers: number[]): number {
    return numbers.sort()[0]
}

function max(numbers: number[]): number {
    return numbers.sort()[numbers.length - 1]
}

function sum(numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}