// import { BehaviorSubject, Observable, of } from "rxjs";
// import { isArray, isObject } from "lodash/fp";
// import { map, flatMap } from "rxjs/operators";

// export class Store<T> {
// 	private subject$: BehaviorSubject<T>;

// 	constructor(data: T) {
// 		this.subject$ = new BehaviorSubject(data);
// 	}

//   set(value: T): void;
//   set<K extends keyof T>(prop: [K], value: T[K]): void;
//   set(prop: any[], value: any): void;
//   set(arg1: any, arg2?: any): void {
//     if (!arg2) {
//       this.subject$.next(arg1);
//     } else {
//       const path = arg1;
//       const value = arg2;
//       set(this, path, value);
//     }
//   }

//   get(): Observable<T>;
//   get<K extends keyof T>(prop: K): Observable<T[K]>;
//   get(path?: any[]): any
//   {
//     return get(this, path);
//   }

//   push(item: T): void {
//     const newArray = this.subject$.value.slice();
//     newArray.push(item);
//     this.subject$.next(newArray);
//   }
// }

// function set(data, path: any[], value: any): any {
//   if (path.length === 0) {
//     if (data instanceof Store) {
//       data.set(value);
//       return data;
//     } else {
//       return value;
//     }
//   } else {
//     if (data instanceof Store) {
//       data.set(path, value);
//       return data;
//     } else {
//       const childData = data[path[0]];
//       const newChildValue = set(childData, path.slice(1), value);
//       if (newChildValue instanceof Store) {
//         return data;
//       } else {
//         const newData = {
//           ...data,
//           [path[0]]: newChildValue
//         };
//         return newData;
//       }
//     }
//   }
// }

// function get(data, path: any[]): Observable<any> {
//   if (path.length === 0) {
//     if (data instanceof Store) {
//       return data.get();
//     } else {
//       return of(data);
//     }
//   } else {
//     if (data instanceof Store) {
//       return data.get().pipe(
//         flatMap((data) => get(path, data))
//       );
//     } else {
//       const child = data[path[0]];
//       return get(child, path.slice(1));
//     }
//   }
// }
