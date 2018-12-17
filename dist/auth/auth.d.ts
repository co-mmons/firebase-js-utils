import { UserInfo } from "./user-info";
import { Observable } from "rxjs";
export declare abstract class UniversalAuth {
    abstract initialized(): Promise<boolean>;
    abstract readonly user: UserInfo;
    abstract readonly userId: string;
    abstract readonly userObservable: Observable<UserInfo>;
    abstract readonly userIdObservable: Observable<string>;
    abstract readonly admin: boolean;
    abstract readonly userIdToken: Promise<string>;
    abstract readonly userIdTokenObservable: Observable<string>;
    abstract signInWithEmailAndPassword(email: string, password: string): Promise<void>;
    abstract signOut(): Promise<void>;
}
