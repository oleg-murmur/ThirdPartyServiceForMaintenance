import {describe, expect, test} from '@jest/globals'
import {getAllDishes} from '../http/DishAPI'
import { getProducts } from '../http/ProductAPI';
import { getAllTeams } from '../http/TeamAPI';
import { ManagementSystem } from './compilateDish';
import { CustomError } from '../CustomErrors/customErrorData';

let dataDish: [];
let dataTeam: [];

describe('получение данных', () => {
    test('проверка на получение всех блюд. Не пусто ', async () => {
        dataDish = await getAllDishes();
      expect(dataDish.length).toBeGreaterThan(0);
    })
    test('проверка на получение всех команд. Не пусто ', async () => {
        let data = await getProducts();
      expect(data.length).toBeGreaterThan(0);
    })
    test('проверка на получение всех продуктов. Не пусто ', async () => {
        dataTeam = await getAllTeams();
      expect(dataTeam.length).toBeGreaterThan(0);
    })
})

describe('Проверка на получение доступных блюд', () => {

  test('проверка на отсутствие блюд в позднее время. 3 часа ночи ', async () => {
    const managementSystem = new ManagementSystem(dataDish,dataTeam);
    const result = managementSystem.getAvailableDishesForavailableTeams(3,0)
    expect(typeof result).toBe('object');
    expect(result).toHaveProperty('все блюда');
    expect(result).toHaveProperty('можно заказать');

    expect(Array.isArray(result['все блюда'])).toBe(true);
    expect(Array.isArray(result['можно заказать'])).toBe(true);
    expect(result['все блюда'].length).toBeGreaterThan(0);
    expect(result['можно заказать']).toHaveLength(0);
  })

  test('проверка на то, что блюда сейчас доступны. 15:00', async () => {
    const managementSystem = new ManagementSystem(dataDish,dataTeam);
    const result = managementSystem.getAvailableDishesForavailableTeams(15,0)
    expect(typeof result).toBe('object');
    expect(result).toHaveProperty('все блюда');
    expect(result).toHaveProperty('можно заказать');

    expect(Array.isArray(result['все блюда'])).toBe(true);
    expect(Array.isArray(result['можно заказать'])).toBe(true);
    expect(result['все блюда'].length).toBeGreaterThan(0);
    expect(result['можно заказать'].length).toBeGreaterThan(0);
  })

  // test('Тест на срабатывание ошибки', async () => {
  //   let mockCustomError = jest.fn();
  //   let originalError = global.Error; // Сохраняем оригинальный Error

  //     try {
  //       const managementSystem = new ManagementSystem(dataDish,dataTeam);
  //       managementSystem.getAvailableDishesForavailableTeams(3,0)  
  //     } catch (error) {
  //       expect(error.code).toBe(1); // Проверяем код ошибки
  //       expect(error.message).toBe('В данный момент нет доступных блюд');
  //     }finally {
  //       global.Error = originalError; // Возвращаем оригинальный Error
  //     }
  //     expect(mockCustomError).toHaveBeenCalledWith(1, 'В данный момент нет доступных блюд');
  // })
})