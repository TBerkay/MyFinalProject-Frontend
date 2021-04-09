import { ResponseModel } from "./responseModel";

export interface ListResponseModel<T> extends ResponseModel{ // interface yerine class yazılırsa değişkeni başlatmamızı ister(eski sürümlerde sıkıntı yok)
    data:T[];
}