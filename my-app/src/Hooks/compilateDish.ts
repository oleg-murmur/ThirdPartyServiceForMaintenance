import { CustomError } from "../CustomErrors/customErrorData";

interface TimeInterval {
    startHours: number | 0;
    startMinutes: number | 0;
    endHours: number | 0;
    endMinutes: number | 0;
}
interface Product {
    name: string;
    id: undefined | number;
}
interface Dish {
    id: number;
    name: string;
    price: string;
    productsList: Product[];
    cookingTime: TimeInterval;
    Intervals: TimeInterval[];
    canOrder: boolean; // ?
}
let availableDishes:Dish[];
let availableTeams:CookingTeam[];
interface CookingTeam {
    name?: string;
    dishes: Dish[];
    Intervals: TimeInterval[];
    rating?: number;
    img?: string;
}

export class ManagementSystem {
    dishes: Dish[];
    cookingTeams: CookingTeam[];
  
    constructor(dataDishes: Dish[], cookingTeams: CookingTeam[]) {
      this.dishes = dataDishes;
      this.cookingTeams = cookingTeams;
    }


    getAvailableCookingTeams(currentTimeHours: number, currentTimeMinutes: number): CookingTeam[] {
        const availableTeams: CookingTeam[] = [];

        for (const team of this.cookingTeams) {
          for (const timeInterval of team.Intervals) {
            if (
              currentTimeHours >= timeInterval.startHours ||
              (currentTimeHours === timeInterval.startHours && currentTimeMinutes >= timeInterval.startMinutes)
            ) {
              if (
                currentTimeHours <= timeInterval.endHours ||
                (currentTimeHours === timeInterval.endHours && currentTimeMinutes <= timeInterval.endMinutes)
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
        if(dish.Intervals)
          for (const timeInterval of dish.Intervals) {
            if (
              currentTimeHours >= timeInterval.startHours ||
              (currentTimeHours === timeInterval.startHours && currentTimeMinutes >= timeInterval.startMinutes)
            ) {
              if (
                currentTimeHours <= timeInterval.endHours ||
                (currentTimeHours === timeInterval.endHours && currentTimeMinutes <= timeInterval.endMinutes)
              ) {
                availableDishes.push(dish);
              }
            }
          }
      }
      return availableDishes;
    }

    getAvailableDishesForavailableTeams(currentTimeHours: number, currentTimeMinutes: number) {

      try {
        availableDishes = this.getAvailableDishes(currentTimeHours, currentTimeMinutes); // Получаем доступные блюда
        availableTeams = this.getAvailableCookingTeams(currentTimeHours, currentTimeMinutes); // Получаем доступные команды поваров
      
      if(availableDishes.length === 0  || availableTeams.length === 0) {
        throw new CustomError(1, 'В данный момент нет доступных блюд')
      }
      // Проходим по каждой команде Поваров
      for (const team of availableTeams) { 
        // Сравниваем блюда, которые команды Поваров может приготовить, с доступными блюдами
        // возвращаем список все блюд с флагом canOrder
        
        for (const Tdish of team.dishes) {
    
          for(const avDish of availableDishes) {
  
            if(avDish.id === Tdish.id) {
              avDish.canOrder = true; 
            }
          }
  } 
}     
      } catch (error) {
        console.log(error)
      }
      

      return {
        "все блюда": this.dishes,
        "можно заказать": availableDishes
      } // возвращаем все блюда с выставленными флагами canOrder
    }
}