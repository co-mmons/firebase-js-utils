import { UserInfo } from "./user-info";
import { Observable } from "rxjs";
export declare abstract class UniversalAuth {
    abstract readonly initialized: boolean;
    abstract readonly user: UserInfo;
    abstract readonly userId: string;
    abstract readonly userObservable: Observable<UserInfo>;
    abstract readonly userIdObservable: Observable<string>;
    abstract readonly admin: boolean;
    abstract signInWithEmailAndPassword(email: string, password: string): Promise<void>;
    abstract signOut(): Promise<void>;
}
