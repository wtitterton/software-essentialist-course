import { calculateStats } from './index';

describe('stats calculator', () => {
    // example [2, 4, 21, -8, 53, 40]
    // min value: -8
    // max value: 53
    // avrg: 18.666666666667
    // length 6

    // calculateStats([2, 4, 21, -8, 53, 40]).min
    /**
     * {
     *  min: -8,
     *  max: 53,
     *  avrg: 18.666666666667,
     *  length: 6
     * }
     */

    it('knows the length of [2, 4, 21, -8, 53, 40] is 6', () => {
        expect(calculateStats([2, 4, 21, -8, 53, 40]).length).toBe(6);
    })

    it('knows the avrg of [2, 4, 21, -8, 53, 40] is 18', () => {
        expect(calculateStats([2, 4, 21, -8, 53, 40]).avrg).toBe(18.666666666666668);
    });

    it('knows the min of [2, 4, 21, -8, 53, 40] is -8', () => {
        expect(calculateStats([2, 4, 21, -8, 53, 40]).min).toBe(-8);
    });

    it('knows the max of [2, 4, 21, -8, 53, 40] is 53', () => {
        expect(calculateStats([2, 4, 21, -8, 53, 40]).max).toBe(53);
    });

    it('should return undefined for min and max when an empty array is provided', () => {
        expect(calculateStats([]).min).toBeUndefined();
        expect(calculateStats([]).max).toBeUndefined();
    })
    
})