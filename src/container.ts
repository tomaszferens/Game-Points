import * as firebase from 'firebase/app'
import 'firebase/database'
import { Container } from 'inversify'

import { firebaseConfig } from 'src/config/firebaseConfig'
import { SERVICE } from 'src/config/serviceIdentifiers'
import { Database } from 'src/services/Database'

export const container = new Container()

container.bind(SERVICE.FIREBASE).toConstantValue(firebase.initializeApp(firebaseConfig).database())
container.bind<Database>(SERVICE.DATABASE).to(Database)
