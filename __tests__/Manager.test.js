// dependencies
const Manager = require('../lib/Manager');

describe('Employee', () => {
    it('New Employee office set', () => {
        const office = 2;
        const newOffice = new Manager('NewGuy', 1, 'newguy@gmail.com', office);
        expect(newOffice.office).toBe(office);
    });

    it('getOffice works', () => {
        const office = 2;
        const newOffice = new Manager('NewGuy', 1, 'newguy@gmail.com', office);
        expect(newOffice.office).toBe(office);
    });

    it('getRole works', () => {
        const returnv = 'Manager';
        const newGetrole = new Manager('NewGuy', 1, 'newguy@gmail.com', 2);
        expect(newGetrole.getRole()).toBe(returnv);
    });
})