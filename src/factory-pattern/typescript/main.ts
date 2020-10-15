import { User } from './user';
import { VipUser } from './vipUser';

const user1 = new User("John", "Mayberry");
const user2 = new VipUser("Mark", "Hemster")
user2.greet(user1);
