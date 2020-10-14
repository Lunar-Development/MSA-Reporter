export default class Firebase {
  // class Firebase {
  constructor()
  {
    this.firebase = require('firebase/app')
    require('firebase/auth')
    require('firebase/firestore')
    
    //firbase config
    this.data = '';
  }

  async makeConnection() {
    if (!this.firebase.apps.length) {
      this.firebase.initializeApp(this.firebaseConfig)
    }
    this.db = this.firebase.firestore()
    this.auth = this.firebase.auth()
    return;
  }

  getCollection = (collection, document) => {
    let docRef = this.db.collection(collection).doc(document);
    return new Promise(resolve => {
      docRef.get().then(doc => {
        if (doc.exists) {
          resolve(doc.data())
        }
    });
  })
}

  readData = async (collection, document) => {
    return new Promise(resolve => {
      this.makeConnection()
      .then(async () => {
        this.data = await this.getCollection(collection, document)
        resolve(this.data)
      })
    })
  }

  writeData = async (collection, document, data) => {
    this.makeConnection()
    .then(async () => {
      let docRef = this.db.collection(collection).doc(document);
      docRef.set(data)
    })
  }

  signIn = async (user, pass) => {
    return new Promise(resolve => {
      this.makeConnection()
      .then (async () => {
        this.firebase.auth()
        .signInWithEmailAndPassword(user, pass)
        .then(() => {
          this.authStatus = 'Authorized';
          resolve(this.authStatus);
          }).catch((err) => {
          this.authStatus = err;
        })
      })
    })
  }

  signOut = async () => {
    return new Promise(resolve => {
      this.makeConnection()
      .then (async () => {
        this.firebase.auth().signOut().then(() => {
        this.authStatus = 'Unauthorized';
        resolve(this.authStatus);
        }).catch((err) => {
        this.authStatus = err
        })
      })
    })
  }
}

// module.exports.Firebase = Firebase;