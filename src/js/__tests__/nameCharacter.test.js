import Character from '../Character';

test("name can't be shorter than 2 characters", () => {
  expect(() => {
    const result = new Character('r', 'Daemon');
    return result;
  }).toThrow('Имя очень короткое!');
});

test("name can't be longer than 10 characters", () => {
  expect(() => {
    const result = new Character('Александрович', 'Daemon');
    return result;
  }).toThrow('Имя слишком длинное!');
});

test('name must be a string', () => {
  expect(() => {
    const result = new Character(1111, 'Daemon');
    return result;
  }).toThrow('Имя должно быть строкой! Неверный тип данных!');
});

test('test name check', () => {
  const result = new Character('Von', 'Daemon');

  expect(result.name).toEqual('Von');
  expect(result.type).toEqual('Daemon');
});
