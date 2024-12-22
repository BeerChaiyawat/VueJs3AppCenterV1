import { defineStore } from 'pinia';

export const useStore = defineStore('index', {
  state: () => ({
    count: 0, // ค่าเริ่มต้น
    ProfileInfo : {
      UserName : 'chaiyawat',
      PreName : 'Mr.',
      Name : 'Beer',
      SurName : 'Chaiyawat',
    }
  }),
  getters: {
    doubleCount: (state) => state.count * 2, // Getter คำนวณค่า
  },
  actions: {
    increment() {
      this.count++; // เพิ่มค่า count
    },
    decrement() {
      this.count--; // ลดค่า count
    },
  },
});
