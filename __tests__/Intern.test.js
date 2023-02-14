// dependencies
const Intern = require('../lib/Intern');

describe('Employee', () => {
    it('New Employee school set', () => {
        const school = 'NewSchool';
        const newSchool = new Intern('NewGuy', 1, 'newguy@gmail.com', school);
        expect(newSchool.school).toBe(school);
    });

    it('getSchool works', () => {
        const school = 'NewSchool';
        const newSchool = new Intern('NewGuy', 1, 'newguy@gmail.com', school);
        expect(newSchool.school).toBe(school);
    });

    it('getRole works', () => {
        const returnv = 'Intern';
        const newGetrole = new Intern('NewGuy', 1, 'newguy@gmail.com', 'NewSchool');
        expect(newGetrole.getRole()).toBe(returnv);
    });
})