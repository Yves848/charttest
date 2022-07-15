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
  hexCollection: AngularFirestoreCollection<poids>;
  weights: any;
  aWeights: number[] = [];
  aLabels: string[] = [];
  aMesures: poids[] = [];

  constructor(public af: AngularFirestore) {
    console.log('DatabaseService');
    this.collection = this.af.collection<poids>('weights', ref => ref.orderBy('date'));
    this.hexCollection = this.af.collection('hexes', ref => ref.orderBy('id').limit(5))
    this.getdb();

  }

  getdb() {
    console.log('getdb');;
    this.weights = this.collection.snapshotChanges()
      .pipe(map(actions => actions.map(a => {
        console.log('map');
        const data = a.payload.doc.data();
        this.aWeights.push(data.poids);
        this.aLabels.push(data.date);
        this.aMesures.push(data);
        return data;
      })));
  }


}
