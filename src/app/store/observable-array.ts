// import { BehaviorSubject, Observable } from "rxjs";
// import { set } from "lodash/fp";
// import { map } from "rxjs/operators";

// export class ObservableArray<T> {
//   private subject$: BehaviorSubject<T[]>;

//   constructor(data: T[]) {
//     this.subject$ = new BehaviorSubject(data);
//   }

//   set(value: T[]): void;
//   set(path: [number], value: T): void;
//   set(arg1: any[], arg2?: any): void {
//     if (!arg2) {
//       this.subject$.next(arg1);
//     } else {
//       const path = arg1;
//       const value = arg2;
//       const newData = set(index, this.subject$.value, value);
//       this.subject$.next(newData);
//     }
//   }

//   push(item: T): void {
//     const newArray = this.subject$.value.slice();
//     newArray.push(item);
//     this.subject$.next(newArray);
//   }

//   get(): Observable<T[]>;
//   get(index: number): Observable<T>;
//   get(index?: number): any {
//     if (index === undefined) {
//       return this.subject$;
//     } else {
//       return this.subject$.pipe(
//         map(array => array[index])
//       )
//     }

//   }
// }
