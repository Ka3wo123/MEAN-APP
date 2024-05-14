import  UserModel  from '../schemas/user.schema';
import {IUser} from "../models/user.model";
import { error } from 'console';

class UserService {
   public async createNewOrUpdate(user: IUser) {
       console.log(user)
       try {
           if (!user._id) {
               const dataModel = new UserModel(user);
               return await dataModel.save();
           } else {
               return await UserModel.findByIdAndUpdate(user._id, { $set: user }, { new: true });
           }
       } catch (error) {
           console.error('Wystąpił błąd podczas tworzenia danych:', error);
           throw new Error('Wystąpił błąd podczas tworzenia danych');
       }
   }

   public async getByEmailOrName(name: string) {
       try {
           const result = await UserModel.findOne({ $and: [{ email: name }, { name: name }] });
           if (result?.$isEmpty) {
               throw Error("Login or password invalid");
           }
           return result;
       } catch (error) {
           console.error('Wystąpił błąd podczas pobierania danych:', error);
           throw new Error('Wystąpił błąd podczas pobierania danych');
       }
   }
}

export default UserService;

