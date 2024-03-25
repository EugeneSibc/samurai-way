import React from 'react';
import { InitialUsersState } from '../../redux/users-reducer';
import styled from "styled-components";


const Users = (props: InitialUsersState) => {
    return (
        <div>
            {props.users.map(u => <div key={u.id}>            
                <span>
                    <div>
                    </div>
                </span>
                <span>
                    <div>

                    </div>
                </span>
            </div>
            )}
        </div>
    );
};

export default Users;

const StyledUsersPage = styled.img`
    
`