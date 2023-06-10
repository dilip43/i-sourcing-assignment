import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./features/EmployeeSlice"

const store = configureStore({
    reducer: { employee: employeeReducer }
})

export default store;