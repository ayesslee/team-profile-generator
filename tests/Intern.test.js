// dependencies
const Intern = require('../lib/Intern');

describe('Employee', () => {
    it('New Employee school set', () => {
        const school = 'NewSchool';
        const newSchool = new Intern('NewHire', 1, 'newhire@gmail.com', school);
        expect(newSchool.school).toBe(school);
    });

    it('getSchool success', () => {
        const school = 'NewSchool';
        const newSchool = new Intern('NewHire', 1, 'newhire@gmail.com', school);
        expect(newSchool.school).toBe(school);
    });

    it('getRole success', () => {
        const returnv = 'Intern';
        const newGetrole = new Intern('NewHire', 1, 'newhire@gmail.com', 'NewSchool');
        expect(newGetrole.getRole()).toBe(returnv);
    });
})