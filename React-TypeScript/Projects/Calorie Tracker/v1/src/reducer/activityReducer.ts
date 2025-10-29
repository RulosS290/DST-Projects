import type { Activity } from "../types";

export type ActivityActions = 
    {
        type: 'saveActivity',
        payload: { newActivity: Activity } 
    } |
    {
        type: 'setActivity',
        payload: { activityId: Activity['id'] }
    } |
    {
        type: 'deleteActivity',
        payload: { activityId: Activity['id'] }
    } |
    {
        type: 'restartApp'
    }

export type ActivityState = {
    activities: Activity[],
    activeId: Activity['id']
}

const localStorageActivities = () : Activity[] => {
    const activities = localStorage.getItem('activities')
    return activities ? JSON.parse(activities) : []
}

export const initialState : ActivityState = {
    activities: localStorageActivities(),
    activeId: ''
}

export const activityReducer = (
        state : ActivityState = initialState,
        action: ActivityActions
    ) => {
        if(action.type === 'saveActivity') {

            let updateActivities : Activity[] = []
            if(state.activeId) {
                updateActivities =  state.activities.map(activity =>
                activity.id === state.activeId 
                    ? action.payload.newActivity 
                    : activity
                )
            } else {
                updateActivities = [...state.activities, action.payload.newActivity]
            }

            return {
                ...state,
                activities: updateActivities,
                activeId: ''     
            }
        }

        if(action.type === 'setActivity') {
            return {
                ...state,
                activeId: action.payload.activityId
            }
        }

        if(action.type === 'deleteActivity') {
            return {
                ...state,
                activities: state.activities.filter(activity => activity.id !== action.payload.activityId),
            }
        }

        if(action.type === 'restartApp') {
            return {
                activities: [],
                activeId: ''
            }
        }


            return state;
        }