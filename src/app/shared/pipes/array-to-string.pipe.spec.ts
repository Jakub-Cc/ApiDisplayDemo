import { ArrayToStringPipe } from './array-to-string.pipe';

describe('ArrayToStringPipe', () => {
    it('create an instance', () => {
        const pipe = new ArrayToStringPipe();
        expect(pipe).toBeTruthy();
    });

    it('transform numbers array', () => {
        const pipe = new ArrayToStringPipe();
        expect(pipe.transform([1,2])).toBe('1 , 2');
    });

    it('transform string array', () => {
        const pipe = new ArrayToStringPipe();
        expect(pipe.transform(["1","2"])).toBe('1 , 2');
    });
});
