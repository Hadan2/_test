import {configureStore, createSlice} from '@reduxjs/toolkit'

let j_list = createSlice ({
    name : 'j_list',

    initialState : 
        [
            { categori : 'none', title :'none',  date : '2023-10-01'}
        ],

    reducers : {
        addList(state,action) {
            state.push(action.payload)
        },

        removeList(state,action) {
            state.splice(action.payload,1)
        }
    }
})

export const { addList, removeList } = j_list.actions;

// 스토어 설정
const store = configureStore({
  reducer: {
    j_list: j_list.reducer,
  },
});

// RootState 타입 정의
export type RootState = ReturnType<typeof store.getState>;
export default store;