
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserAction from '../store/action-creators/'


export const UserActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(UserAction, dispatch)
}

