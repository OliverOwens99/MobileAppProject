import { Component, OnInit } from '@angular/core';
import { DataService } from "../Services/data.service";
import { Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-match-data',
  templateUrl: './match-data.page.html',
  styleUrls: ['./match-data.page.scss'],
})
export class MatchDataPage implements OnInit {

  constructor(public service: DataService) { 
    
  }

  arr :any = [];
  Summoners: any;
  victory :string = "";
  imgPath :string[] = [];// a string array that houses the map so we can call it with ngFor in html

  

  ngOnInit() {
    this.service.GetSummonerData().subscribe(data=>{

      this.Summoners = new Map (Object.entries(data.info.participants));//new map to parse the data and store the participant data
      this.Summoners.forEach((value:  any  , key: any) => {
        if (value.win == false) {
          this.victory = "Defeat";
          
          
        }else
        this.victory = "Victory";

        this.arr.push(value.summonerName + " : "+value.championName + " "+this.victory); // populating the array wem declared above
        this.imgPath.push("http://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/" +value.championName+".png");//The imgPath array is populated with URLs that point to images of the participant's champion and items used in the game.
        this.imgPath.push("http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/" +value.item0+".png");
        this.imgPath.push("http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/" +value.item1+".png");
        this.imgPath.push("http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/" +value.item2+".png");
        this.imgPath.push("http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/" +value.item3+".png");
        this.imgPath.push("http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/" +value.item4+".png");
        this.imgPath.push("http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/" +value.item5+".png");
        this.imgPath.push("http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/" +value.item6+".png");

      }); 
      console.log(this.arr);
    });


 
  }

}
