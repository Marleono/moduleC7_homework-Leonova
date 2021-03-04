const pow = require('./index.js');

describe("test pow", () => {
    it('multiply 2 3 times to equal 8', () => {
        const result = pow(2, 3);
        expect(result).toBe(8);
    }),
        it("multiply 3 3 times to equal 18", () => {
            const result = pow(3, 3); // получаем результат выполнения функции
            expect(result).toBe(18); // если результат оказался таким же как и то что внутри toBe(), то тест должен пройти успешно
        })
});
