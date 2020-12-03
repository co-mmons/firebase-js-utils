import {Observable} from "rxjs";
import {User} from "./User";

export interface AuthUser {

    readonly user: User;

    readonly userId: string;

    readonly userObservable: Observable<User>;

    readonly userIdObservable: Observable<string>;

    readonly userIdToken: Promise<string>;

    readonly userIdTokenObservable: Observable<string>;

    observeUser(assertSigned?: boolean): Observable<User>;

}
