import {UserInfo} from "./user-info";
import {Observable} from "rxjs";

export abstract class UniversalAuth {

    readonly user: UserInfo;

    readonly userId: string;

    readonly userObservable: Observable<UserInfo>;

    readonly userIdObservable: Observable<string>;

    readonly admin: boolean;

}