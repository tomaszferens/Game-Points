import * as firebase from 'firebase'
import { inject, injectable } from 'inversify'
import { Observable } from 'rxjs/Observable'
import { map } from 'rxjs/operators'

import { SERVICE } from 'src/config/serviceIdentifiers'
@injectable()
export class Database {
    constructor(@inject(SERVICE.FIREBASE) private db: firebase.database.Database) {}

    public get(name: string): Observable<any> {
        return Observable.fromEvent(this.db.ref(name) as any, 'value').pipe(map((res: any) => res.val()))
    }
}
