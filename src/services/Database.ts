import * as firebase from 'firebase'
import { inject, injectable } from 'inversify'
import { Observable } from 'rxjs/Observable'
import { SERVICE } from 'src/config/serviceIdentifiers'
@injectable()
export class Database {
    constructor(@inject(SERVICE.FIREBASE) private db: firebase.database.Database) {}

    public get(name: string): any {
        return Observable.fromEvent(this.db.ref(name) as any, 'value').map((res: any) => res.val())
    }
}
