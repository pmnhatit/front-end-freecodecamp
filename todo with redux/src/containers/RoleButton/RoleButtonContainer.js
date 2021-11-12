import {connect} from 'react-redux';
import {changeRole} from '../../actions/RoleAction';
import {RoleButton} from '../../components/RoleButton/RoleButton';

const mapStateToProps = state =>{
    return {
        role: state.role
    };
};

const mapDispatchToProps = dispatch =>{
    return{
        changeRole: role => dispatch(changeRole(role))
    }
}

export const RoleButtonContainer = connect(mapStateToProps, mapDispatchToProps)(RoleButton);