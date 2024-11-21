<template>
  <div>
    <h1>Test Firebase Firestore</h1>
    <div>
      <h2>Add Data</h2>
      <input v-model="newData" placeholder="Enter some data" />
      <button @click="addData">Add Data</button>
    </div>
    
    <div>
      <h2>Fetched Data:</h2>
      <ul>
        <li v-for="item in data" :key="item.id">{{ item.data }}</li>
      </ul>
    </div>
    
    <button @click="fetchData">Fetch Data from Firestore</button>
  </div>
</template>

<script>
import { collection, addDoc, getDocs } from "firebase/firestore";

export default {
  data() {
    return {
      newData: '', // ข้อมูลในช่องอินพุต
      data: [] // ข้อมูลที่ดึงจาก Firestore
    }
  },
  methods: {
    // ฟังก์ชันสำหรับบันทึกข้อมูลใน Firestore
    async addData() {
      if (!this.newData.trim()) {
        alert("Please enter some data before adding."); // ตรวจสอบหากช่องว่าง
        return;
      }
      try {
        const docRef = await addDoc(collection(this.$firebase.db, 'items'), {
          data: this.newData.trim()
        });
        console.log("Document written with ID: ", docRef.id);
        
        // รีเซ็ตอินพุตและแจ้งเตือน
        this.newData = ''; 
        alert('Data added successfully!');
      } catch (e) {
        console.error("Error adding document: ", e);
        alert("Failed to add data. Please try again.");
      }
    },

    // ฟังก์ชันสำหรับดึงข้อมูลจาก Firestore
    async fetchData() {
      try {
        const querySnapshot = await getDocs(collection(this.$firebase.db, 'items'));
        this.data = []; // เคลียร์ข้อมูลเก่าก่อน
        querySnapshot.forEach((doc) => {
          this.data.push({ id: doc.id, data: doc.data().data });
        });
      } catch (e) {
        console.error("Error getting documents: ", e);
        alert("Failed to fetch data. Please try again.");
      }
    }
  }
}
</script>

<style scoped>
/* เพิ่ม CSS เพื่อปรับแต่งหน้าตา */
button {
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

input {
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>

