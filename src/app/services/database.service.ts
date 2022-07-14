import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { meal, poids } from '../interfaces/data';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  collection: AngularFirestoreCollection<poids>;
  weights: any;

  constructor(public af: AngularFirestore) {
    this.collection = af.collection<poids>('weights', ref => ref.orderBy('date'));
    this.weights = this.collection.snapshotChanges()
      .pipe(map(actions => actions.map(a => a.payload.doc.data())));
  }
}
