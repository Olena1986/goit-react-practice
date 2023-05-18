import { User } from '../user/User';

export function UsersList({ users,deleteUser }) {
  return  users.map(user => {
        return (
            <User user={user} key={user.id} deleteUser={deleteUser} />
        )
    })
 }