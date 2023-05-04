import Bowerman from '../Bowerman';

describe('test function levelUp', () => {
  test("you can't level up", () => {
    const result = new Bowerman('Bow');
    result.health = 0;
    expect(() => result.levelUp()).toThrow('Нельзя повысить уровень умершего!');
  });

  test('you can level up', () => {
    const result = new Bowerman('Bow');
    result.health = 50;
    result.level = 1;
    result.levelUp();
    expect(result.health).toBeGreaterThan(0);
    expect(result.level).toBe(2);
    expect(result.health).toBe(100);
    expect(result.attack).toBe(30);
    expect(result.defence).toBe(30);
  });
});

describe('test function damage', () => {
  test("you can't be damaged", () => {
    const result = new Bowerman('Bow');
    result.health = 0;
    result.damage(2);

    expect(result.health).toBeLessThan(0);
    expect(() => result.damage(2)).toThrow('Игрок умер, нельзя нанести урон!');
  });

  test('you can do damage', () => {
    const result = new Bowerman('Bow');
    result.health = 100;
    result.damage(2);
    expect(result.health).toBeCloseTo(98.5);
  });
});
