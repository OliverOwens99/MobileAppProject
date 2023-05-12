import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(private storage: Storage) { }
  myChampion:string ="";

  ngOnInit() {
  }


  async ionViewWillEnter() {
    await this.storage.create();
    this.myChampion = await this.storage.get('myChampion');
    }
    

  async saveChampion() {
    await this.storage.set('myChampion', this.myChampion)
    .then(
    ()=>{
    
    })
    .catch();
    }
}
