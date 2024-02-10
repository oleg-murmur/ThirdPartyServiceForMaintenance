import { TimeInterval } from "./TimeInterval";



export class Product {
    name: string;
    id: undefined | number;
    constructor(name: string) {
        this.name = name;
    }
}
export class Dish {
    name: string;
    price: string;
    productsList?: Product[] = [];
    cookingTime?: TimeInterval;
    timeForLetOrder?: TimeInterval[] = [];
    canOrder?: boolean; // ?

    constructor(
        name: string,
        price: string
        ) {
            this.name = name,
            this.price = price
    }
}

export class CookingTeam{
    name!: string;
    dishes!: Dish[];
    workTime!: TimeInterval[];
    rating!: number;
    img!: string;
    constructor(
      name: string,
      img: string,
      rating: number
      ) {
          this.name = name,
          this.rating = rating
          this.img = img
  }
}

export class Menu{
    foodCanBuy: Dish[]; 

    constructor(dishes: Dish[]) {
      this.foodCanBuy = dishes;
    }
}

export class ManagementSystem {
    dishes: Dish[];
    cookingTeams: CookingTeam[];
  
    constructor(dishes: Dish[], cookingTeams: CookingTeam[]) {
      this.dishes = dishes;
      this.cookingTeams = cookingTeams;
    }


    getAvailableCookingTeams(currentTimeHours: number, currentTimeMinutes: number): CookingTeam[] {
        const availableTeams: CookingTeam[] = [];
    
        for (const team of this.cookingTeams) {
          for (const timeInterval of team.workTime) {
            if (
              currentTimeHours > timeInterval.startHours ||
              (currentTimeHours === timeInterval.startHours && currentTimeMinutes >= timeInterval.startMinutes)
            ) {
              if (
                currentTimeHours < timeInterval.endHours ||
                (currentTimeHours === timeInterval.endHours && currentTimeMinutes < timeInterval.endMinutes)
              ) {
                availableTeams.push(team);
              }
            }
          }
        }
        return availableTeams;
      }

    getAvailableDishes(currentTimeHours: number, currentTimeMinutes: number): Dish[] {
      const availableDishes: Dish[] = [];
  
      for (const dish of this.dishes) {
        if(dish.timeForLetOrder)
          for (const timeInterval of dish.timeForLetOrder) {
            if (
              currentTimeHours > timeInterval.startHours ||
              (currentTimeHours === timeInterval.startHours && currentTimeMinutes >= timeInterval.startMinutes)
            ) {
              if (
                currentTimeHours < timeInterval.endHours ||
                (currentTimeHours === timeInterval.endHours && currentTimeMinutes < timeInterval.endMinutes)
              ) {
                availableDishes.push(dish);
              }
            }
          }
      }
  
      return availableDishes;
    }
    getAvailableDishesForavailableTeams(currentTimeHours: number, currentTimeMinutes: number) {
      const availableDishes = this.getAvailableDishes(currentTimeHours, currentTimeMinutes); // Получаем доступные блюда
      const availableTeams = this.getAvailableCookingTeams(currentTimeHours, currentTimeMinutes); // Получаем доступные команды поваров
      
      for (let dish of this.dishes) {
        dish.canOrder = false;
      }

      // Проходим по каждой команде Поваров
      for (const team of availableTeams) { 
        // Сравниваем блюда, которые команды Поваров может приготовить, с доступными блюдами
        // возвращаем список все блюд с флагом canOrder
        for (const dish of team.dishes) {
          
          if (availableDishes.includes(dish)) {
            for (let dish of this.dishes) dish.canOrder = true;   
    }
  } 
}  
      return this.dishes; // возвращаем все блюда с выставленными флагами canOrder
    }
  }
