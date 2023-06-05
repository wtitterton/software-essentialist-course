import { calculateStats } from './index';

describe('stats calculator', () => {
    describe('When an array of numbers is provided', () => {
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
    })

    describe('When an empty array is provided', () => {
        it('should return undefined for min and max when an empty array is provided', () => {
            expect(calculateStats([]).min).toBeUndefined();
            expect(calculateStats([]).max).toBeUndefined();
        });

        it('should return undefined for avrg when an empty array is provided', () => {
            expect(calculateStats([]).avrg).toBeUndefined();
        });

        it('should return 0 for length when an empty array is provided', () => {
            expect(calculateStats([]).length).toBe(0);
        });
    })

   
    
})