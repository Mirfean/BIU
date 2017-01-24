import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {


  title = 'My list of weapons';
  weapons = WEAPONS;
  weapon: Weapon = {id: 0,name: '', like: 0, likes: false};
  selectedWeapon: Weapon = this.weapon;

  isForm: number = 1;

  like(weapon: Weapon): void {
    if(weapon.likes != true){
      weapon.like++;
      weapon.likes = true;}
  }

  unlike(weapon: Weapon): void { 
    if (weapon.like >= 1 && weapon.likes != false)
    {
      weapon.like--;
      weapon.likes = false;
    }
  }

  onSelect(weapon: Weapon): void {
    this.selectedWeapon = weapon;
  }

  onSort():void{
    function compare(a,b) {
      if (a.like < b.like)
        return 1;
      if (a.like > b.like)
        return -1;
      return 0;
    }

    WEAPONS.sort(compare);
  }
    showForm(): void{
    this.isForm*=-1;
}

addWeapon(event):void{
		this.weapons.push(new Weapon(this.weapons.length+1, event.xD.name, event.xD.like));
			console.log(event);
}
}

export class Weapon {
  id: number;
  name: string;
  like: number;
  likes: boolean;

    constructor (id,name,like){
        this.id = id;
        this.name = name;
        this.like = like;
        this.like = Math.floor((Math.random() * 50) + 1);

    }
}
const WEAPONS: Weapon[] = [
  { id: 1, name: 'Longsword', like:Math.floor((Math.random() * 50) + 1), likes: false},
  { id: 2, name: 'Axe', like:Math.floor((Math.random() * 50) + 1), likes: false},
  { id: 3, name: 'Flail', like:Math.floor((Math.random() * 50) + 1), likes: false},
  { id: 4, name: 'Dagger', like:Math.floor((Math.random() * 50) + 1), likes: false},
  { id: 5, name: 'Scimitar', like:Math.floor((Math.random() * 50) + 1), likes: false},
  { id: 6, name: 'Rapier', like:Math.floor((Math.random() * 50) + 1), likes: false},
  { id: 7, name: 'Mace', like:Math.floor((Math.random() * 50) + 1), likes: false},
  { id: 8, name: 'WARHAMMER', like:Math.floor((Math.random() * 50) + 1), likes: false},
  { id: 9, name: 'Halberd', like:Math.floor((Math.random() * 50) + 1), likes: false},
  { id: 10, name: 'Scythe', like:Math.floor((Math.random() * 50) + 1), likes: false},
  { id: 11, name: 'Spear', like:Math.floor((Math.random() * 50) + 1), likes: false},
  { id: 12, name: 'Greatsword', like:Math.floor((Math.random() * 50) + 1), likes: false},
  { id: 13, name: 'Stick', like:Math.floor((Math.random() * 50) + 1), likes: false},
  { id: 14, name: 'Nunchaku', like:Math.floor((Math.random() * 50) + 1), likes: false},
  { id: 15, name: 'Really BIG Stone', like:Math.floor((Math.random() * 50) + 1), likes: false},
  { id: 16, name: 'Club', like:Math.floor((Math.random() * 50) + 1), likes: false},
];