import { Observable, BehaviorSubject, Subject } from "rxjs";
import { map, distinctUntilChanged } from "rxjs/operators";
import { set, get } from "lodash/fp";

export class Store {

    subject$: BehaviorSubject<any>;

    constructor(initialState: any) {
        this.subject$ = new BehaviorSubject(initialState);
    }

    get(path?: any[]): Observable<any> {
      if (!path || path.length === 0) {
        return this.subject$;
      } else {
        return this.subject$.pipe(
            map((state) => get(path, state)),
            distinctUntilChanged()
        );
      }
    }

    set(path: any[], value: any): void {
      if (path.length === 0) {
        this.subject$.next(value);
      } else {
        const newState = set(path, value, this.subject$.value);
        this.subject$.next(newState);
      }
    }

    transform(path: any[], transform: (value) => any): void {
      if (path.length === 0) {
        const newValue = transform(this.subject$.value);
        this.subject$.next(newValue);
      } else {
        const oldValue = get(path, this.subject$.value);
        const newValue = transform(oldValue);
        const newState = set(path, newValue, this.subject$.value);
        this.subject$.next(newState);
      }
    }

    push(path: any[], value: any): void {
      const array = path.length === 0 ?
        this.subject$.value :
        get(path, this.subject$.value);
      const newArray = [...array, value];
      const newState = set(path, newArray, this.sub)
      this.subject$.next(newArray);
    }
}
