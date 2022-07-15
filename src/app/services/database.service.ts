import { ComponentFactoryResolver, Injectable } from '@angular/core';
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
  aWeights: number[] = [];
  aLabels: string[] = [];

  constructor(public af: AngularFirestore) {

    this.collection = this.af.collection<poids>('weights', ref => ref.orderBy('date'));
    this.getdb();

  }

  getdb() {

    this.weights = this.collection.snapshotChanges()
      .pipe(map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        this.aWeights.push(data.poids);
        this.aLabels.push(data.date);
        return data;
      })));
  }


}
