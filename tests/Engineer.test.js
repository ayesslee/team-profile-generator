// dependencies
const Engineer = require('../lib/Engineer');

describe('Employee', () => {
    it('New Employee github set', () => {
        const git = 'github';
        const newGit = new Engineer('NewGuy', 1, 'newhire@gmail.com', git);
        expect(newGit.github).toBe(git);
    });

    it('getGithub success', () => {
        const gittest = 'github';
        const newGetgithub = new Engineer('Newhire', 1, 'newhire@gmail.com', gittest);
        expect(newGetgithub.getGithub()).toBe(gittest);
    });

    it('getRole success', () => {
        const returnv = 'Engineer';
        const newGetrole = new Engineer('NewGuy', 1, 'newhire@gmail.com', 'github');
        expect(newGetrole.getRole()).toBe(returnv);
    });
})