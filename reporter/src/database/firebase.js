class Firebase {
  constructor()
  {
    this.firebase = require('firebase/app')
    require('firebase/auth')
    require('firebase/firestore')
    
    //firebase config

    this.data = '';
  }

  async makeConnection() {
    this.firebase.initializeApp(this.firebaseConfig)
    this.db = this.firebase.firestore()
    this.auth = this.firebase.auth()
    return;
  }

  getCollection = async (collection, document) => {
    let docRef = this.db.collection(collection).doc(document);
    return new Promise(resolve => {
      docRef.get().then(doc => {
        if (doc.exists) {
          this.data = doc.data();
          resolve(this.data)
        } else {
            console.log("No such document!");
        }
        }).catch(function(error) {
          console.log("Error getting document:", error);
      })
    });
  }

  readData = async (collection, document) => {
    this.makeConnection()
    .then(async () => {
      await this.getCollection(collection, document);
      console.log(this.data)
    })
  }

  writeData = async (collection, document, data) => {
    this.makeConnection()
    .then(async () => {
      let docRef = this.db.collection(collection).doc(document);
      docRef.set(data)
    })
  }

  editData = (collection, document, newData) => {
    this.data = newData;
    this.writeData(collection, document, newData)
  }
}

module.exports.Firebase = Firebase;