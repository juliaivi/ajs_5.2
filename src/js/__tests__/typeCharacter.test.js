import Bowerman from '../Bowerman';
import Daemon from '../Daemon';
import Undead from '../Undead';
import Swordsman from '../Swordsman';
import Magician from '../Magician';
import Zombie from '../Zombie';
import Character from '../Character';

test('character not found', () => {
  expect(() => {
    const result = new Character('bow', 'Bow');
    return result;
  }).toThrow('Такого персонажа нет!');
});

test('сharacter type must be a string', () => {
  expect(() => {
    const result = new Character('bow', 1);
    return result;
  }).toThrow('Тип персонажа должен быть строкой! Неверный тип данных!');
});

test('Bowman should have type "Bowman" ', () => {
  const result = new Bowerman('Bowman');
  expect(result.type).toBe('Bowman');
});

test('Daemon should have type "Daemon" ', () => {
  const result = new Daemon('Daemon');

  expect(result.type).toBe('Daemon');
});

test('undead should have type "undead"', () => {
  const result = new Undead('Undead');

  expect(result.type).toBe('Undead');
});

test('Swordsman should have type "Swordsman"', () => {
  const result = new Swordsman('Swordsman');

  expect(result.type).toBe('Swordsman');
});

test('Magician should have type "Magician"', () => {
  const result = new Magician('Magician');

  expect(result.type).toBe('Magician');
});

test('Zombie should have type "Zombie"', () => {
  const result = new Zombie('Zombie');

  expect(result.type).toBe('Zombie');
});
