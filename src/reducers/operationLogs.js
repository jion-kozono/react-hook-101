import {
    ADD_OPERATION_LOG,
    // DELETE_OPERATION_LOG,
    DELETE_ALL_OPERATION_LOGS
} from '../actions'

const operationLogs = (state = [], action) => {
    switch (action.type) {
        case ADD_OPERATION_LOG:
            const operatingLog = {
                description: action.description,
                operatedAt: action.operatedAt,
            }
            return [operatingLog, ...state]///最新のものを前に更新
        case DELETE_ALL_OPERATION_LOGS:
            return []
        default:
            return state

    }
}
export default operationLogs