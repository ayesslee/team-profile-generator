// dependencies
const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('New Employee created', () => {
        const newGuy = new Employee();
        expect(typeof(newGuy)).toBe('object');
    });

    it('New Employee name set', () => {
        const name = 'NewGuy';
        const newName = new Employee(name);
        expect(newName.name).toBe(name);
    });

    it('New Employee id set', () => {
        const id = 1;
        const newId = new Employee('NewGuy', id);
        expect(newId.id).toBe(id);
    });

    it('New Employee email set', () => {
        const email = 'newguy@gmail.com';
        const newEmail = new Employee('NewGuy', 2, email);
        expect(newEmail.email).toBe(email);
    });

    it('getName works', () => {
        const nametest = 'NewGuy';
        const newGetname = new Employee(nametest);
        expect(newGetname.getName()).toBe(nametest);
    });

    it('getID works', () => {
        const idtest = 1;
        const newGetid = new Employee('NewGuy', idtest);
        expect(newGetid.getId()).toBe(idtest);
    });

    it('getEmail works', () => {
        const emailtest = 'newguy@gmail.com';
        const newGetemail = new Employee('NewGuy', 1, emailtest);
        expect(newGetemail.getEmail()).toBe(emailtest);
    });

    it('getRole works', () => {
        const returnv = 'Employee';
        const newGetrole = new Employee('NewGuy', 1, 'newguy@gmail.com');
        expect(newGetrole.getRole()).toBe(returnv);
    });
})