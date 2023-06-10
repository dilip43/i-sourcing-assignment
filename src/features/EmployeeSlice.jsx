import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchEmployee = createAsyncThunk("/users/fetchUsers", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const employee = await response.json();
    return employee;
})

const employeeSlice = createSlice({
    name: "employee",
    initialState: {
        entities: [],
        loading: false,
    },
    reducers: {
        employeeAdded(state, action) {
            state.entities.push(action.payload);
        },
        employeeUpdated(state, action) {
            const { id, name, email } = action.payload;
            const existEmp = state.entities.find(emp => emp.id == id);
            if (existEmp) {
                existEmp.name = name;
                existEmp.email = email;
            }
        },
        employeeDeleted(state, action) {
            const { id } = action.payload;
            const existEmp = state.entities.find(emp => emp.id == id);
            if (existEmp) {
                state.entities = state.entities.filter((emp) => emp.id != id);
            }
        },
        extraReducers: {
            [fetchEmployee.pending]: (state, action) => {
                state.loading = true;

            },
            [fetchEmployee.fulfilled]: (state, action) => {
                state.loading = false;
                state.entities = [...state.entities, ...action.payload];

            },
            [fetchEmployee.rejected]: (state, action) => {
                state.loading = false;
            }

        }

    }
});

export const { employeeAdded, employeeUpdated, employeeDeleted } = employeeSlice.actions;

export default employeeSlice.reducer;